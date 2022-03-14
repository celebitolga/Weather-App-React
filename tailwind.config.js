module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        '6': '1.5rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}