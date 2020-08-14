import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Themes: [
      {
        id: 'ideologia-de-genero',
        title: 'Ideologia de Genero',
        description: 'La "ideología de género" es una un sistema anticientífico que sostiene que las diferencias entre el hombre y la mujer, a pesar de las obvias diferencias anatómicas y biológicas, no corresponden a una naturaleza fija, sino que son unas “construcciones culturales y convencionales”, hechas según los roles y estereotipos que cada sociedad "le asigna a los sexos".',
        userComments: [ 'Ideologia de Genero? mm interesante', 'Es un tema ya muy rebuscado no?', 'Pienso que hay cosas mejores' ]
      },
      {
        id: 'sexualidad',
        title: 'Sexualidad',
        description: 'La sexualidad es el conjunto de condiciones que caracterizan el sexo de cada persona o animal. Desde el punto de vista histórico cultural, es el conjunto de fenómenos emocionales, de conducta y de prácticas asociadas a la búsqueda de emoción sexual, que marcan de manera decisiva al ser humano en todas y cada una de las fases determinantes de su desarrollo.',
        userComments: [ 'Me gusta un poquito', 'mmm no me llama mucho la atencion que digamos jeje' ]
      },
      {
        id: 'aprovecha-el-tiempo',
        title: 'Aprovecha el Tiempo',
        description: 'El tiempo es una magnitud física con que se mide la duración o separación de acontecimientos. El tiempo permite ordenar los sucesos en secuencias, estableciendo un pasado, un futuro y un tercer conjunto de eventos ni pasados ni futuros respecto a otro. En mecánica clásica a esta tercera clase se llama «presente» y está formada por eventos simultáneos a uno dado.',
        userComments: [ 'Este tema esta interesante jummm', 'Bueeeeeno no es el mejor asi que digamos xd 😂😅' ]
      },
    ],

    Propuestas: [
      {
        id: 'relaciones-familiares',
        title: 'Ideologia de Genero',
        description: 'Las buenas relaciones familiares ayudan a sus hijos a sentirse seguros y amados. Te ayudan a sentirte bien a ti también. Crea buenas relaciones en tu familia con tiempo de calidad, comunicación, trabajo en equipo y aprecio.',
        reason: 'Me parece importante resaltar lo que esta sucediendo dentro de los hogares en esta situacion de cuarentena.',
        votes: 0
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
