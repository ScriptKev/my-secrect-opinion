<template>
  <div class="theme">
    <div class="theme__container">
      <px-header :idTheme="themeDetail.id" :descriptionTheme="themeDetail.description" :titleTheme="themeDetail.title" />
      <px-main :idTheme="themeDetail.id" :userComments="themeDetail.userComments" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.theme {
  min-height: 100vh;
}
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
    themeDetail: {}
  }),

  created() {
    this.getThemeDetail();
  },

  methods: {
    async getThemeDetail () {
      try {
        const id = this.$route.params.id;
        const snapshot = await firebase.firestore().collection('Temas').doc(id).get();
        this.themeDetail = snapshot.data();

      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>