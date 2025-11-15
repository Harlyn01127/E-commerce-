module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        coral: '#FF6B6B',
        salmon: '#FF7A6B',
        fruityYellow: '#FFD449',
        softGray: '#F6F6F9'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: [],
}
