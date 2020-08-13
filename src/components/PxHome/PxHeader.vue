<template>
  <header class="header">
    <div class="header__container">
      <h2>Header</h2>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/main.scss';

.header {
  margin-top: 50px;
  width: 100%;
  height: 400px;

  &__container {
    width: 100%;
    height: 100%;
    max-width: 1440px;
    margin: auto;
    border-radius: 3%;
    background-color: #f0f0f0;
    box-shadow: 5px 0px 20px rgba(0, 0, 0, 0.151);

    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

<script>
export default {
  name: 'PxHeaderHome'
}
</script>
