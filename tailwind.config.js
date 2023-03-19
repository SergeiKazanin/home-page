/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'selfie': "url('./components/img/selfie.jpg')",
        'snake': "url('./components/img/snake.jpg')",
        'co2mert': "url('./components/img/co2metr.jpg')",
        'dictionary': "url('./components/img/dictionary.jpg')",
        'login': "url('./components/img/login.jpg')",
        'dictionary2': "url('./components/img/dictionary2.jpg')",
        'test': "url('./components/img/test.jpg')",
        'weather': "url('./components/img/weather.jpg')",
      },
      fontFamily: {
        greatvibes: ["Great Vibes"],
        montserrat: ["Montserrat"],
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
}
