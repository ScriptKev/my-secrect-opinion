<template>
  <nav class="nav">
    <div class="nav__container">
      <section class="nav__logo">
        <router-link to="/">
          <figure class="nav__logo--container">
            <img src="" alt="Logo">
          </figure>
        </router-link>
      </section>

      <router-link to="/propuestas">
        <section class="nav__links">
            <h5>Propuestas</h5>
        </section>
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
    position: relative;

  }

  &__logo {
    position: absolute;
    left: 50%;
    top: 20px;
  }

  &__links {
    position: absolute;
    right: 5%;
    top: 10px;
    background-color: blueviolet;
    color: white;
    font-weight: normal;
    border-radius: 5px;
    padding: 10px;
  }
}
</style>

<script>

export default {
  name: 'Nav'
}
</script>