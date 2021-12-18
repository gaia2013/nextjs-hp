module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // deploy時使っているjsだけcompileするように
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
