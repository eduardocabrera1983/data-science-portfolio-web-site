import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleSystemProps {
  count?: number;
  imageUrl?: string;
}

interface ParticleData {
  position: [number, number, number];
  color: THREE.Color;
  size: number;
  velocity: THREE.Vector3;
  originalPosition: [number, number, number];
  shape: number; // 0 = circle, 1 = plus, 2 = triangle
}

interface PixelInfo {
  r: number;
  g: number;
  b: number;
  a: number;
  brightness: number;
}

interface Region {
  x: number;
  y: number;
  score: number;
}

function Particles({ count = 500000, imageUrl = "/eduardo_cabrera.png" }: ParticleSystemProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const [particlesData, setParticlesData] = useState<ParticleData[]>([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const loadImage = async () => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (!ctx) return;

        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        const getPixelInfo = (x: number, y: number): PixelInfo => {
          const idx = (y * canvas.width + x) * 4;
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];
          const a = data[idx + 3];
          const brightness = (r * 0.299 + g * 0.587 + b * 0.114); // Weighted brightness
          return { r, g, b, a, brightness };
        };

        // Enhanced edge detection using Sobel operator
        const getEdgeStrength = (x: number, y: number): number => {
          if (x < 2 || y < 2 || x >= canvas.width - 2 || y >= canvas.height - 2) return 0;

          let gx = 0, gy = 0;
          
          // Sobel operator kernels
          const sobelX = [[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]];
          const sobelY = [[-1, -2, -1], [0, 0, 0], [1, 2, 1]];

          for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
              const pixel = getPixelInfo(x + dx, y + dy);
              gx += pixel.brightness * sobelX[dy + 1][dx + 1];
              gy += pixel.brightness * sobelY[dy + 1][dx + 1];
            }
          }

          return Math.sqrt(gx * gx + gy * gy);
        };

        // Detect specific facial regions with high precision
        const eyeRegions: Region[] = [];
        const beardRegions: Region[] = [];
        const lipRegions: Region[] = [];
        const skinRegions: Region[] = [];
        const hairRegions: Region[] = [];
        const eyebrowRegions: Region[] = [];

        let faceBounds: { minX: number; maxX: number; minY: number; maxY: number } | null = null;
        let faceCenter: { x: number; y: number } | null = null;
        let faceRadius = 0;

        // ULTRA fine-grained scanning for maximum skin detection
        const gridSize = 2; // Reduced from 4 to 2 for 4x more skin detection points
        for (let y = 0; y < canvas.height; y += gridSize) {
          for (let x = 0; x < canvas.width; x += gridSize) {
            const pixel = getPixelInfo(x, y);
            
            if (pixel.a < 20) continue;

            const edgeStrength = getEdgeStrength(x, y);
            const score = edgeStrength * 2 + (255 - pixel.brightness) * 0.8;

            // SUPER-ENHANCED skin detection (much wider range to catch all skin tones)
            const warmth = pixel.r - pixel.b;
            const isLightSkin = pixel.r > 160 && pixel.g > 130 && pixel.b > 110 && 
                               warmth > 10 && pixel.brightness > 130;
            const isMediumSkin = pixel.r > 100 && pixel.r > pixel.g * 0.85 && 
                                pixel.g > pixel.b * 1.00 && 
                                pixel.brightness > 90 && pixel.brightness < 210;
            const isDarkSkin = pixel.r > 70 && pixel.g > 55 && pixel.b > 35 &&
                              pixel.r > pixel.b && warmth > 5 && 
                              pixel.brightness > 60 && pixel.brightness < 160;
            // Additional very light skin detection for highlights
            const isVeryLightSkin = pixel.r > 200 && pixel.g > 180 && pixel.b > 160 &&
                                   pixel.brightness > 180;
            const isSkin = isLightSkin || isMediumSkin || isDarkSkin || isVeryLightSkin;

            // Hair detection (dark brown/black)
            const isHair = pixel.brightness < 95 && 
                          Math.abs(pixel.r - pixel.g) < 25 && 
                          Math.abs(pixel.g - pixel.b) < 25 &&
                          pixel.a > 100;

            // Eyes detection (very dark, high contrast) - more generous range
            const isEye = pixel.brightness < 85 && pixel.a > 100 && edgeStrength > 20;

            // Eyebrows detection (dark, slightly lighter than eyes)
            const isEyebrow = pixel.brightness >= 85 && pixel.brightness < 115 && 
                             edgeStrength > 20 && pixel.a > 100;

            // Beard detection (dark with brown tones, textured)
            const isBeard = pixel.brightness < 110 && pixel.brightness > 50 &&
                           pixel.r > pixel.b && edgeStrength > 15 && pixel.a > 100;

            // Lips detection (reddish, medium brightness)
            const isLip = pixel.r > pixel.g * 1.1 && pixel.r > pixel.b * 1.15 && 
                         pixel.r > 150 && pixel.brightness > 100 && 
                         pixel.brightness < 170 && edgeStrength > 20;

            if (isEye) {
              eyeRegions.push({ x, y, score: score + 80 });
            } else if (isEyebrow) {
              eyebrowRegions.push({ x, y, score: score + 65 });
            } else if (isLip) {
              lipRegions.push({ x, y, score: score + 50 });
            } else if (isBeard) {
              beardRegions.push({ x, y, score: score + 55 });
            } else if (isSkin) {
              skinRegions.push({ x, y, score });
              
              if (!faceBounds) {
                faceBounds = { minX: x, maxX: x, minY: y, maxY: y };
              } else {
                faceBounds.minX = Math.min(faceBounds.minX, x);
                faceBounds.maxX = Math.max(faceBounds.maxX, x);
                faceBounds.minY = Math.min(faceBounds.minY, y);
                faceBounds.maxY = Math.max(faceBounds.maxY, y);
              }
            } else if (isHair) {
              hairRegions.push({ x, y, score: score + 20 });
            }
          }
        }

        // Calculate face bounds - TIGHTER boundary for concentrated facial area
        if (faceBounds) {
          faceCenter = {
            x: (faceBounds.minX + faceBounds.maxX) / 2,
            y: (faceBounds.minY + faceBounds.maxY) / 2
          };
          const width = faceBounds.maxX - faceBounds.minX;
          const height = faceBounds.maxY - faceBounds.minY;
          faceRadius = Math.max(width, height) / 2 + 15; // Reduced from 40 to 15 for tighter boundary
        }

        // Sort all regions by score
        eyeRegions.sort((a, b) => b.score - a.score);
        eyebrowRegions.sort((a, b) => b.score - a.score);
        lipRegions.sort((a, b) => b.score - a.score);
        beardRegions.sort((a, b) => b.score - a.score);
        skinRegions.sort((a, b) => b.score - a.score);
        hairRegions.sort((a, b) => b.score - a.score);

        console.log(`Facial regions detected:`);
        console.log(`- Eyes: ${eyeRegions.length}, Eyebrows: ${eyebrowRegions.length}`);
        console.log(`- Lips: ${lipRegions.length}, Beard: ${beardRegions.length}`);
        console.log(`- Skin: ${skinRegions.length}, Hair: ${hairRegions.length}`);

        // Generate particles with precision distribution
        const particles: ParticleData[] = [];

        for (let i = 0; i < count; i++) {
          let bestPixel: (PixelInfo & { x: number; y: number }) | null = null;
          let bestScore = -1;

          // SUPER-POPULATE SKIN AREAS - MAXIMUM skin allocation: 80% of all particles!
          const rand = Math.random();
          let targetRegion: Region | null = null;
          let regionType: 'eye' | 'eyebrow' | 'lip' | 'beard' | 'skin' | 'hair' | 'random' = 'random';

          // Balanced particle allocation with moderate eye emphasis
          if (rand < 0.12 && eyeRegions.length > 0) {
            targetRegion = eyeRegions[Math.floor(Math.random() * Math.min(eyeRegions.length, 150))];
            regionType = 'eye';
          } else if (rand < 0.16 && eyebrowRegions.length > 0) {
            targetRegion = eyebrowRegions[Math.floor(Math.random() * Math.min(eyebrowRegions.length, 180))];
            regionType = 'eyebrow';
          } else if (rand < 0.18 && beardRegions.length > 0) {
            targetRegion = beardRegions[Math.floor(Math.random() * Math.min(beardRegions.length, 250))];
            regionType = 'beard';
          } else if (rand < 0.19 && lipRegions.length > 0) {
            targetRegion = lipRegions[Math.floor(Math.random() * Math.min(lipRegions.length, 150))];
            regionType = 'lip';
          } else if (rand < 0.96 && skinRegions.length > 0) {
            // Skin gets majority of particles for natural look
            targetRegion = skinRegions[Math.floor(Math.random() * skinRegions.length)];
            regionType = 'skin';
          } else if (rand < 0.99 && hairRegions.length > 0) {
            // Minimal hair allocation - only 3%
            targetRegion = hairRegions[Math.floor(Math.random() * Math.min(hairRegions.length, 150))];
            regionType = 'hair';
          }

          // Try multiple candidates to find optimal position
          // More attempts for skin to ensure dense population
          const maxAttempts = regionType === 'skin' ? 50 : 35;
          for (let attempt = 0; attempt < maxAttempts; attempt++) {
            let candidateX: number;
            let candidateY: number;

            if (targetRegion) {
              const spread =
                regionType === 'eye' ? 12 :      // Tighter clustering for more detail
                regionType === 'eyebrow' ? 10 :  // Tighter clustering
                regionType === 'lip' ? 6 :       // Tighter clustering
                regionType === 'beard' ? 5 :     // Tighter clustering
                regionType === 'skin' ? 3 :      // Even tighter skin clustering for maximum detail
                25;                              // Tighter hair clustering

              candidateX = Math.floor(targetRegion.x + (Math.random() - 0.5) * spread);
              candidateY = Math.floor(targetRegion.y + (Math.random() - 0.5) * spread);
            } else if (faceCenter && faceRadius > 0 && Math.random() < 0.95) { // Increased from 0.90 to 0.95
              const angle = Math.random() * Math.PI * 2;
              const radius = Math.sqrt(Math.random()) * faceRadius;
              candidateX = Math.floor(faceCenter.x + Math.cos(angle) * radius);
              candidateY = Math.floor(faceCenter.y + Math.sin(angle) * radius);
            } else {
              candidateX = Math.floor(Math.random() * canvas.width);
              candidateY = Math.floor(Math.random() * canvas.height);
            }

            candidateX = Math.max(0, Math.min(canvas.width - 1, candidateX));
            candidateY = Math.max(0, Math.min(canvas.height - 1, candidateY));

            const pixel = getPixelInfo(candidateX, candidateY);
            if (pixel.a < 50) continue; // MUCH stricter alpha threshold (was 30) - eliminates edge artifacts

            const edgeStrength = getEdgeStrength(candidateX, candidateY);

            // Sophisticated scoring system - heavily favor light/white areas
            const brightnessFactor = pixel.brightness / 255;
            let score = brightnessFactor * brightnessFactor * 100; // Quadratic boost for brightness
            score += (pixel.a / 255) * 45;
            score += (edgeStrength / 150) * 50;

            // Boost for warm tones (natural skin/beard colors)
            if (pixel.r > pixel.g && pixel.g > pixel.b) score += 20;
            
            // 5-layer brightness scoring - dramatic boost for lighter areas
            if (pixel.brightness > 217) score += 120; // Layer 1: Brightest (85%+) - maximum boost
            else if (pixel.brightness > 178) score += 85; // Layer 2: Bright (70%+) - high boost
            else if (pixel.brightness > 140) score += 55; // Layer 3: Mid-bright (55%+) - moderate boost
            else if (pixel.brightness > 102) score += 30; // Layer 4: Mid-dark (40%+) - small boost
            else score += 10; // Layer 5: Darkest - minimal boost

            // Region-specific bonuses
            if (regionType === 'eye') score += 45;
            if (regionType === 'eyebrow') score += 38;
            if (regionType === 'beard') score += 35;
            if (regionType === 'lip') score += 30;
            if (regionType === 'skin') score += 15;

            // STRICT Face proximity - heavily penalize particles outside facial area
            if (faceCenter && faceRadius > 0) {
              const dx = candidateX - faceCenter.x;
              const dy = candidateY - faceCenter.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              if (distance > faceRadius) {
                score *= 0.05; // Much harsher penalty (was 0.15) - almost eliminate edge particles
              } else {
                const proximityBoost = 1 - distance / faceRadius;
                score += proximityBoost * 60; // Increased bonus (was 42) for particles near center
              }
            }

            score += Math.random() * 5;

            if (score > bestScore) {
              bestScore = score;
              bestPixel = { x: candidateX, y: candidateY, ...pixel };
            }
          }

          if (!bestPixel) continue;

          // 3D positioning with accurate depth
          const x = (bestPixel.x / canvas.width - 0.5) * 9;
          const y = -(bestPixel.y / canvas.height - 0.5) * 10;
          
          const depth = 1 - (bestPixel.brightness / 255);
          let z = (depth - 1) * 2.5;

          // Feature-specific depth for realistic 3D structure
          if (regionType === 'eye') {
            z *= 1.85; // Eyes most forward
          } else if (regionType === 'eyebrow') {
            z *= 1.45;
          } else if (regionType === 'lip') {
            z *= 1.30;
          } else if (regionType === 'beard') {
            z *= 1.25;
          } else if (regionType === 'skin') {
            // 5-layer skin tone system based on brightness for precise depth mapping
            const skinBrightness = bestPixel.brightness / 255;
            
            if (skinBrightness > 0.85) {
              // Layer 1: Brightest highlights (closest to white) - most forward
              z *= 1.15; // Brightest areas come forward the most
            } else if (skinBrightness > 0.70) {
              // Layer 2: Bright highlights - nose bridge, forehead, top of cheekbones
              z *= 1.00; // Bright areas forward
            } else if (skinBrightness > 0.55) {
              // Layer 3: Mid-bright tones - main face surface
              z *= 0.85; // Mid-bright base level
            } else if (skinBrightness > 0.40) {
              // Layer 4: Mid-dark tones - transition areas
              z *= 0.70; // Slightly recessed
            } else {
              // Layer 5: Darkest shadows - most recessed
              z *= 0.55; // Deepest shadows furthest back
            }
            
            // Add saturation-based micro-variation for natural contours
            const maxChannel = Math.max(bestPixel.r, bestPixel.g, bestPixel.b);
            const minChannel = Math.min(bestPixel.r, bestPixel.g, bestPixel.b);
            const saturation = maxChannel === 0 ? 0 : (maxChannel - minChannel) / maxChannel;
            z *= 1 + saturation * 0.08; // More saturated areas (cheeks) slightly forward
            
          } else if (regionType === 'hair') {
            // Hair depth with volume variation
            z *= 0.55 - depth * 0.12; // 0.43-0.55x furthest back with texture
          }

          // True RGB color preservation with brightness-based enhancement
          const color = new THREE.Color(
            bestPixel.r / 255,
            bestPixel.g / 255,
            bestPixel.b / 255
          );
          
          // Minimal desaturation for natural look
          color.lerp(new THREE.Color(0.5, 0.5, 0.5), 0.03);
          
          // Variable brightness boost - lighter areas get more brightness for maximum visibility
          const brightnessNormalized = bestPixel.brightness / 255;
          let brightnessMultiplier = 1.25;
          
          if (brightnessNormalized > 0.85) {
            // Layer 1: Brightest areas - maximum brightness boost
            brightnessMultiplier = 1.65;
          } else if (brightnessNormalized > 0.70) {
            // Layer 2: Bright areas - high brightness boost
            brightnessMultiplier = 1.50;
          } else if (brightnessNormalized > 0.55) {
            // Layer 3: Mid-bright - moderate boost
            brightnessMultiplier = 1.35;
          } else if (brightnessNormalized > 0.40) {
            // Layer 4: Mid-dark - slight boost
            brightnessMultiplier = 1.25;
          }
          // Layer 5: Darkest - base multiplier (1.25)
          
          color.multiplyScalar(brightnessMultiplier);

          // Larger particle sizes for better visibility - favor lighter/whiter tones
          // Increased base size for better visibility, with moderate eye emphasis
          const brightness = bestPixel.brightness / 255;
          let size = (0.035 + (depth * 0.070)) * 2.0; // Larger base size for better visibility
          
          if (regionType === 'eye') size *= 3.0; // Eyes moderately bigger
          if (regionType === 'eyebrow') size *= 2.2; // Eyebrows moderately bigger
          if (regionType === 'lip') size *= 1.2;
          if (regionType === 'beard') size *= 0.25;
          if (regionType === 'skin') {
            // 5-layer visibility system - lighter = MORE VISIBLE with LARGER particles
            if (brightness > 0.85) {
              // Layer 1: Brightest (closest to white) - MASSIVE particles
              size *= 2.1;
            } else if (brightness > 0.70) {
              // Layer 2: Bright highlights - very large particles
              size *= 1.75;
            } else if (brightness > 0.55) {
              // Layer 3: Mid-bright - large particles
              size *= 1.4;
            } else if (brightness > 0.40) {
              // Layer 4: Mid-dark - moderate particles
              size *= 1.1;
            } else {
              // Layer 5: Darkest - standard particles
              size *= 0.9;
            }
          }

          // Assign random shape: 0 = circle (40%), 1 = plus (30%), 2 = triangle (30%)
          const shapeRand = Math.random();
          let shape: number;
          if (shapeRand < 0.4) {
            shape = 0; // Circle
          } else if (shapeRand < 0.7) {
            shape = 1; // Plus
          } else {
            shape = 2; // Triangle
          }

          particles.push({
            position: [x, y, z],
            color: color,
            size: size,
            velocity: new THREE.Vector3(
              (Math.random() - 0.5) * 0.015,
              (Math.random() - 0.5) * 0.015,
              (Math.random() - 0.5) * 0.015
            ),
            originalPosition: [x, y, z],
            shape: shape
          });
        }

        console.log(`Generated ${particles.length} particles with precision distribution`);
        setParticlesData(particles);
        setIsLoading(false);
      };

      img.onerror = () => {
        console.error('Failed to load image:', imageUrl);
        setIsLoading(false);
      };

      img.src = imageUrl;
    };

    loadImage();
  }, [count, imageUrl]);

  useFrame((state) => {
    if (pointsRef.current && particlesData.length > 0) {
      // Mouse interaction only (no auto-rotation)
      const targetRotationY = mousePosition.current.x * 0.20;
      const targetRotationX = -mousePosition.current.y * 0.20; // Inverted vertical axis
      
      pointsRef.current.rotation.y += (targetRotationY - pointsRef.current.rotation.y) * 0.030;
      pointsRef.current.rotation.x += (targetRotationX - pointsRef.current.rotation.x) * 0.030;
      
      const positionsArray = pointsRef.current.geometry.attributes.position.array as Float32Array;
      const time = state.clock.getElapsedTime();
      
      particlesData.forEach((particle, i) => {
        const idx = i * 3;
        
        // Add gentle organic drift based on time - slower and smoother
        const driftX = Math.sin(time * 0.2 + i * 0.01) * 0.0008;
        const driftY = Math.cos(time * 0.25 + i * 0.02) * 0.0008;
        const driftZ = Math.sin(time * 0.15 + i * 0.03) * 0.0008;
        
        particle.velocity.x += driftX;
        particle.velocity.y += driftY;
        particle.velocity.z += driftZ;
        
        positionsArray[idx] += particle.velocity.x;
        positionsArray[idx + 1] += particle.velocity.y;
        positionsArray[idx + 2] += particle.velocity.z;
        
        const dx = positionsArray[idx] - particle.originalPosition[0];
        const dy = positionsArray[idx + 1] - particle.originalPosition[1];
        const dz = positionsArray[idx + 2] - particle.originalPosition[2];
        
        // Keep particles close to original position
        if (Math.abs(dx) > 0.12) particle.velocity.x *= -0.70;
        if (Math.abs(dy) > 0.12) particle.velocity.y *= -0.70;
        if (Math.abs(dz) > 0.12) particle.velocity.z *= -0.70;
        
        // Gentle spring force back to original position
        particle.velocity.x -= dx * 0.008;
        particle.velocity.y -= dy * 0.008;
        particle.velocity.z -= dz * 0.008;
        
        particle.velocity.multiplyScalar(0.995);
      });
      
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  const geometry = React.useMemo(() => {
    if (particlesData.length === 0) return null;

    const positions = new Float32Array(particlesData.length * 3);
    const colors = new Float32Array(particlesData.length * 3);
    const sizes = new Float32Array(particlesData.length);
    const shapes = new Float32Array(particlesData.length); // Add shape attribute

    particlesData.forEach((particle, i) => {
      positions[i * 3] = particle.position[0];
      positions[i * 3 + 1] = particle.position[1];
      positions[i * 3 + 2] = particle.position[2];

      colors[i * 3] = particle.color.r;
      colors[i * 3 + 1] = particle.color.g;
      colors[i * 3 + 2] = particle.color.b;

      sizes[i] = particle.size;
      shapes[i] = particle.shape; // Store shape type
    });

    return { positions, colors, sizes, shapes };
  }, [particlesData]);

  if (isLoading || !geometry) {
    return null;
  }

  // Custom shader material with lighting for different particle shapes
  const vertexShader = `
    attribute float size;
    attribute vec3 color;
    attribute float shape;
    
    varying vec3 vColor;
    varying float vShape;
    varying vec3 vViewPosition;
    varying vec3 vNormal;
    
    void main() {
      vColor = color;
      vShape = shape;
      
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vViewPosition = -mvPosition.xyz;
      
      // Compute normal for lighting (pointing toward camera)
      vNormal = normalize(normalMatrix * vec3(0.0, 0.0, 1.0));
      
      gl_PointSize = size * (300.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
    }
  `;

  const fragmentShader = `
    varying vec3 vColor;
    varying float vShape;
    varying vec3 vViewPosition;
    varying vec3 vNormal;
    
    uniform vec3 lightPosition;
    uniform vec3 lightColor;
    uniform float ambientStrength;
    
    void main() {
      vec2 center = gl_PointCoord - vec2(0.5);
      float dist = length(center);
      
      // Calculate 3D position on sphere surface for lighting
      float z = sqrt(max(0.0, 0.25 - dot(center, center)));
      vec3 normal = normalize(vec3(center, z));
      
      float alpha = 0.0;
      vec3 shapeNormal = normal;
      
      if (vShape < 0.5) {
        // Circle with spherical lighting
        alpha = 1.0 - smoothstep(0.35, 0.5, dist);
        shapeNormal = normal;
      } else if (vShape < 1.5) {
        // Plus sign
        float armWidth = 0.18;
        bool horizontal = abs(center.y) < armWidth;
        bool vertical = abs(center.x) < armWidth;
        if (horizontal || vertical) {
          alpha = 1.0 - smoothstep(0.35, 0.5, dist);
          // Flatter normal for plus sign
          shapeNormal = mix(normal, vec3(0.0, 0.0, 1.0), 0.5);
        }
      } else {
        // Triangle
        float angle = atan(center.y, center.x);
        float triangleDist = dist * (1.0 + 0.3 * cos(angle * 3.0 - 1.57));
        alpha = 1.0 - smoothstep(0.35, 0.5, triangleDist);
        shapeNormal = normal;
      }
      
      if (alpha < 0.01) discard;
      
      // Lighting calculations
      vec3 lightDir = normalize(lightPosition - vViewPosition);
      
      // Diffuse lighting (Lambert)
      float diffuse = max(dot(shapeNormal, lightDir), 0.0);
      diffuse = pow(diffuse, 1.2); // Slightly stronger falloff
      
      // Specular highlight (Blinn-Phong)
      vec3 viewDir = normalize(vViewPosition);
      vec3 halfDir = normalize(lightDir + viewDir);
      float specular = pow(max(dot(shapeNormal, halfDir), 0.0), 32.0);
      specular *= 0.8; // Specular intensity
      
      // Rim lighting (Fresnel effect)
      float rim = 1.0 - max(dot(viewDir, shapeNormal), 0.0);
      rim = pow(rim, 3.0) * 0.4;
      
      // Ambient occlusion based on distance from center
      float ao = 1.0 - (dist * 0.3);
      
      // Combine lighting components
      vec3 ambient = vColor * ambientStrength * ao;
      vec3 diffuseColor = vColor * diffuse * lightColor;
      vec3 specularColor = lightColor * specular;
      vec3 rimColor = lightColor * rim;
      
      // Subsurface scattering approximation for softer look
      float subsurface = max(0.0, dot(shapeNormal, -lightDir)) * 0.3;
      
      vec3 finalColor = ambient + diffuseColor + specularColor + rimColor + (vColor * subsurface);
      
      // Add subtle color variation based on lighting
      finalColor = mix(finalColor, finalColor * 1.15, specular);
      
      gl_FragColor = vec4(finalColor, alpha * 0.98);
    }
  `;

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[geometry.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[geometry.colors, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[geometry.sizes, 1]}
        />
        <bufferAttribute
          attach="attributes-shape"
          args={[geometry.shapes, 1]}
        />
      </bufferGeometry>
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          lightPosition: { value: new THREE.Vector3(5, 5, 10) },
          lightColor: { value: new THREE.Color(1.0, 0.95, 0.9) }, // Warm light
          ambientStrength: { value: 0.4 }
        }}
        transparent
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export function PortraitParticles3D({ 
  count = 100000, 
  imageUrl = "/eduardo_cabrera.png" 
}: ParticleSystemProps) {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 13.5], fov: 53 }}
        style={{ background: 'transparent' }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <ambientLight intensity={0.75} />
        <pointLight position={[8, 8, 8]} intensity={1.5} />
        <pointLight position={[-8, -4, 6]} intensity={0.65} color="#fff9f2" />
        <Particles count={count} imageUrl={imageUrl} />
      </Canvas>
    </div>
  );
}