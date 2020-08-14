<template>
  <header class="header">
    <div class="header__container">
      <section class="header__presentation">
        <h1>Puedes crear tu propia propuesta</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi eum ea tempora sit cum optio iste saepe id ex facere.</p>
        <button>Crear propuesta</button>
      </section>

      <figure class="header__img--container">
        <img src="../../static/img/header.png" alt="header img">
      </figure>
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
    max-height: 400px;
    margin: auto;
    border-radius: 3%;
    background-color: #f0f0f0;
    box-shadow: 5px 0px 20px rgba(0, 0, 0, 0.151);

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:  "presentation headerImg";
    justify-items: center;
    align-items: center;


  }

  &__presentation {
    width: 100%;
    height: 100%;
    grid-area: presentation;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr min-content;
    grid-template-areas:  "title"
                          "description"
                          "cta";
    justify-items: center;
    align-items: center;

    & h1 {
      grid-area: title;
      font-size: 40px;
      padding: 0 40px;
    }

    & p {
      align-self: flex-start;
      grid-area: description;
      text-align: start;
      padding: 0 40px;
    }

    & button {
      grid-area: cta
    }
  }


  &__img--container {
    grid-area: headerImg;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: flex-end;

    & img {
      border-radius: 0 10px 10px 0  ;
      object-fit: cover;
      right: 0;
    }
  }
}
</style>

<script>
export default {
  name: 'PxHeaderPropuestas'
}
</script>
