<template>
  <div class="theme">
    <div class="theme__container">
      <px-header v-if="this.$route.params.id === 'sexualidad'" :titleTheme="themeDetail_Sexualidad.title" />
      <px-main v-if="this.$route.params.id === 'sexualidad'" :comentarios="themeDetail_Sexualidad.userComments" />

      <px-header v-if="this.$route.params.id === 'ideologia-de-genero'" :titleTheme="themeDetail_Ideologia.title" />
      <px-main v-if="this.$route.params.id === 'ideologia-de-genero'" :comentarios="themeDetail_Ideologia.userComments" />

      <px-header v-if="this.$route.params.id === 'aprovecha-el-tiempo'" :titleTheme="themeDetail_AprovechaElTiempo.title" />
      <px-main v-if="this.$route.params.id === 'aprovecha-el-tiempo'" :comentarios="themeDetail_AprovechaElTiempo.userComments" />
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
import PxHeader from '@/components/PxTheme/PxHeader';
import PxMain from '@/components/PxTheme/PxMain';
import firebase from 'firebase/app';
import 'firebase/firestore';

export default {
  name: 'ThemeDetail',
  components: { PxHeader, PxMain },
  data: () => ({
    themeDetail_Sexualidad: {
      title: 'Sexualidad',
      userComments: [ 'Me Gusta!', 'No me Gusta!' ]
    },

    themeDetail_Ideologia: {
      title: 'Ideologia de Genero',
      userComments: [ 'mm Quizas', 'mm Quizas No' ]
    },

    themeDetail_AprovechaElTiempo: {
      id: 'aprovecha-el-tiempo',
      img: require('@/static/img/themes/theme-sexualidad.jpg'),
      title: 'Aprovecha el Tiempo',
      userComments: [ 'Este tema esta interesante jummm', 'Bueeeeeno no es el mejor asi que digamos xd 😂😅' ] },

  }),

  created() {
    this.getThemeDetail();
  },

  methods: {
    async getThemeDetail () {
      try {
        const id = this.$route.params.id;

        // const snapshot = await firebase.firestore().collection('Temas').doc(id).get();

        // console.log(snapshot)


      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>