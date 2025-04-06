export function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 px-6">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Eduardo</h1>
      <p className="text-lg max-w-xl text-gray-600 mb-8">
        I'm a data analyst becoming a data scientist. This is my personal portfolio where I share projects and ideas that blend data, design, and creativity.
      </p>
      <a
        href="/projects"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Explore My Projects
      </a>
    </section>
  );
}
