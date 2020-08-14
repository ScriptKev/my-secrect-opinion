<template>
  <div class="home">
    <div class="home__container">
      <PxHeader />
      <px-main :Loading="Loading" :Themes="Themes" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  margin-top: 20px;
}
</style>

<script>
import { mapState } from 'vuex';

import firebase from 'firebase/app';
import 'firebase/firestore';

import PxHeader from '@/components/PxHome/PxHeader';
import PxMain from '@/components/PxHome/PxMain';

export default {
  name: 'Home',
  components: { PxHeader, PxMain },
  data: () => ({
      // Themes: [],
      Loading: false
  }),

  computed: {
    ...mapState(['Themes'])
  },

  created() {
    // this.getThemes();
  },

  methods: {
    async getThemes () {
      try {
        // Collection Firebase
        const snapshot = await firebase.firestore().collection('Temas').get()

        snapshot.forEach(doc => {
          this.Themes.push(doc.data())
        })

      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>