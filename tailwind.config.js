const tailwindcssNoise = require("tailwindcss-noise");

module.exports = {
  plugins: {
    tailwindcss: { config: './tailwindcss-config.js' },
    tailwindcssNoise,
  },
}