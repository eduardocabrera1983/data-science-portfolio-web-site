module.exports = {
  plugins: [
    require('@tailwindcss/postcss')(),  // ✅ the updated plugin
    require('autoprefixer'),
  ],
};
