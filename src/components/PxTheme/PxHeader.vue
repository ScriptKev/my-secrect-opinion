<template>
  <header class="header">
    <div class="header__container">
      <section class="theme__title">
        <h2>{{ titleTheme }}</h2>
        <p> {{ descriptionTheme }} </p>
      </section>

      <figure class="theme__img">
        <img :src="require('@/static/img/themes/theme-'+idTheme+'.jpg')" alt="theme img" width="100%">
      </figure>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  margin-top: 50px;
  width: 100%;
  height: 100%;

  &__container {
    width: 90%;
    margin: auto;
    height: 100%;
    max-width: 1440px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:  "description img";
    justify-items: center;
    align-items: center;
    border-radius: 10px;
    background-color: #dddddd;
    box-shadow: 5px 0px 20px rgba(0, 0, 0, 0.151);
    padding: 20px;

    & .post {
      text-align: center;
    }
  }

  & .theme__title {

  }

  & .theme__img {

    & img {
      border-radius: 10px;
    }
  }
}
</style>

<script>
export default {
  name: 'PxHeader',
  props: ['titleTheme', 'descriptionTheme', 'idTheme']
}
</script>