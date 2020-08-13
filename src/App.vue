<template>
  <div class="App">
    <px-nav />
    <router-view />
    <px-footer />
  </div>
</template>

<style lang="scss">
@import './assets/scss/main.scss';
</style>

<script>
import PxNav from '@/components/PxGlobal/PxNav';
import PxFooter from '@/components/PxGlobal/PxFooter';

export default {
  name: 'App',
  components: { PxNav, PxFooter }
}
</script>