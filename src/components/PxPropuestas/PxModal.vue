<template>
  <div class="pxModal">
    <transition name="fade" appear>
      <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
    </transition>

    <transition name="slide" appear>
      <div class="modal" v-if="showModal">
        <h1>Escriba su Propuesta</h1>
        <form class="form__propuesta">
          <section class="form__propuesta--titleTheme">
            <label for="titleTheme">Titulo del Tema</label>
            <input type="text" name="titleTheme">
          </section>

          <section class="form__propuesta--descriptionTheme">
            <label for="descriptionTheme">Descripcion del Tema</label>
            <input type="text" name="descriptionTheme">
          </section>

          <section class="form__propuesta--reasonTheme">
            <label for="descriptionTheme">Cual es tu razon?</label>
            <input type="text" name="descriptionTheme">
          </section>
        </form>
        <button class="button" @click="showModal = false">
          cerrar
        </button>
      </div>
    </transition>

  </div>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}


.button {
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  width: 100px;
  height: 50px;

  display: inline-block;
  background-image: linear-gradient(to right, #CC2E5D, #FF5858);
  border-radius: 8px;
  
  color: #FFF;
  font-size: 18px;
  font-weight: 700;
  
  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;
  
  
  &:hover {
      box-shadow: 6px 6px rgba(0, 0, 0, 0.6);
  }
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: transparent;
  height: 100%;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  
  width: 100%;
  max-width: 400px;
  background-color: #FFF;
  border-radius: 16px;
  
  padding: 25px;
  
  h1 {
    color: #222;
    font-size: 32px;
    font-weight: 900;
    margin-bottom: 15px;
  }
  
  p {
    color: #666;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 15px;
  }
}

.fade-enter-active,
.fade-leave-active {
 transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
 opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
 transition: transform .5s;
}

.slide-enter,
.slide-leave-to {
 transform: translateY(-50%) translateX(100vw);
}
</style>

<script>
export default {
  name: 'PxModal',
  data: () => ({
    showModal: true
  })
}
</script>