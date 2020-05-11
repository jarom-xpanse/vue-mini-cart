module.exports = {
  theme: {
    // screens: {
    //   'sm': '480px',
    //   'md': '768px',
    //   'lg': '1024px',
    //   'xl': '1280px',
    // },
    container: {
      center: false
    },
    extend: {
      translate: {
        'less': '-50%'
      },
      inset: {
        half: '50%',
        0: '0',
        '-full': '-100%'
      }
    },
  },
  variants: {},
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '90%',
          '@screen sm': { //640
            // maxWidth: '600px',
          },
          '@screen md': { //768
            // maxWidth: '728px',
          },
          '@screen lg': { //1024
            // maxWidth: '984px',
          },
          '@screen xl': { //1280
            // maxWidth: '1240px',
          },
        }
      })
    }
  ]
}
