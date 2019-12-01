import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import de from 'vuetify/es5/locale/de'

Vue.use(Vuetify)

export default new Vuetify({
  lang: {
    locales: { de },
    current: 'de'
  },
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#2ebf91',
        secondary: '#8360c3',
        accent: '#76d275',
        error: '#b71c1c'
      }
    }
  }
})