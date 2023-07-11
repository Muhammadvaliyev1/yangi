/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        mulish: ['Mulish', 'sans-serif']
      },

      backgroundColor: {
        primary: '#ED1C24' ,
        bgcolor : '#282828'
      },

      backgroundImage: {
        section : "url('../img/section.png')",
        footer : "url('../img/footer.svg')" 
      },
      textColor: {
        dark: '#282828'
      }
    },
  },
  plugins: [],
}

