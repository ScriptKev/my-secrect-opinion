<template>
  <main class="main">
    <div class="main__container">
      <section class="main__title">
        <h2>Temas en Cuestion</h2>
      </section>
          <skeleton-loader :loading="Loading" />

      <section class="main__themes">
        <div class="main__themes--container">
          <article class="theme" v-for="(t,i) in Themes" :key="i">
            <router-link :to="'/theme/'+t.id">
              <figure class="theme__img">
                <div class="clip__path">
                  <img :src="require('@/static/img/themes/theme-'+t.id+'.jpg')" :alt="t.id" width="100%">
                </div>
              </figure>
            </router-link>

            <section class="theme__description">
              <h4> {{ t.title }} </h4>
              <h5> {{ t.userComments.length }} Comentarios</h5>
            </section>

            <section class="theme__cta">
              <button @click="goToThemeDetail(t.id)" class="cta__primary">Ver</button>
              <button class="cta__primary">Votar</button>
            </section>
          </article>
        </div>
      </section>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/main';

.main {
  margin-top: 50px;
  width: 100%;
  height: 100%;

  &__container {
    width: 100%;
    height: 100%;
    max-width: 1440px;
    margin: auto;
  }

  &__title {
    text-align: center;

  }

  &__themes {
    margin-top: 50px;

    &--container {
      width: 90%;
      margin: auto;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: auto;
      gap: 20px;
      justify-items: center;
      align-content: center;
    }
  }

  & .theme {
    width: 300px;
    height: 360px;
    background-color: #ddbddd;
    border-radius: 10px;

    &__img {
      border-radius: 10px 10px 0 0;
      width: 100%;
      height: 65%;
      cursor: pointer;

      & .clip__path {
        width: 100%;
        height: 100%;
        overflow: hidden;
        // clip-path: circle(50% at 50% 50%);

      }

      & img {
        border-radius: 10px 10px 0 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 600ms;
        
        &:hover {
          transform: scale(1.2)
        }

      }
    }

    &__description {
      padding: 10px;
    }

    &__cta {
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      & button {
        width: 48%;
        height: 30px;
        background-color: #ff46ff;
        color: rgb(226, 226, 226);
        font-weight: bold;
      }
    }
  }

}
</style>

<script>
import SkeletonLoader from '@/components/PxHome/SkeletonLoader';

export default {
  name: 'PxMain',
  components: { SkeletonLoader },
  props: {
    Themes: {
      type: Array,
      required: true
    },
    Loading: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    goToThemeDetail (index) {
      this.$router.push({ name: 'ThemeDetail', params: { id: index } })
    }
  },
}
</script>