module.exports = {
  plugins: {
    tailwindcss: {}, // This line is now handled by the new plugin
    autoprefixer: {},
    // Add the new plugin here:
    '@tailwindcss/postcss': {}, // This is the new line
  },
}