import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Themes: [
      { id: 'ideologia-de-genero', img: require('@/static/img/themes/theme-ideologia-de-genero.jpg'), title: 'Ideologia de Genero', userComments: [ 'Ideologia de Genero? mm interesante', 'Es un tema ya muy rebuscado no?', 'Pienso que hay cosas mejores' ] },
      {  id: 'sexualidad', img: require('@/static/img/themes/theme-sexualidad.jpg'), title: 'Sexualidad', userComments: [ 'Me gusta un poquito', 'mmm no me llama mucho la atencion que digamos jeje' ] },
      {  id: 'aprovecha-el-tiempo', img: require('@/static/img/themes/theme-sexualidad.jpg'), title: 'Aprovecha el Tiempo', userComments: [ 'Este tema esta interesante jummm', 'Bueeeeeno no es el mejor asi que digamos xd 😂😅' ] },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
