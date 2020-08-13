<template>
  <nav class="nav">
    <div class="nav__container">
      <router-link to="/">
        <figure class="nav__logo">
          <img src="" alt="Logo">
        </figure>
      </router-link>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 60px;
  background-color: #dbdbdb;
  border-radius: 0 0 10px 10px;
    box-shadow: 5px 0px 20px rgba(0, 0, 0, 0.151);

  &__container{
    width: 100%;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

<script>
export default {
  name: 'Nav'
}
</script>