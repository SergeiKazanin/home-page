/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'selfie': "url('./components/img/selfie.jpg')",
        'snake': "url('./components/img/snake.jpg')",
        'co2mert': "url('./components/img/co2metr.png')",
        'dictionary': "url('./components/img/dictionary.png')",
        'login': "url('./components/img/login.png')",
        'test': "url('./components/img/test.png')",
        'weather': "url('./components/img/weather.png')",
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
