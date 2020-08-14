<template>
  <main class="main">
    <div class="main__container">
      <h2>Propuestas</h2>
      <section class="main__propuestas">
        <article class="propuesta" v-for="(p,i) in Propuestas" :key="i">
          <figure class="propuesta__img--container">
            <router-link to="/propuesta/xd">
              <img :src="require('@/static/img/themes/theme-ideologia-de-genero.jpg')" :alt="p.title">
            </router-link>
          </figure>

          <section class="propuesta__description">
              <h2>{{p.title}}</h2>
              <span>{{p.votes}} Votos</span>
              <button @click="voteProposal">Votar</button>
          </section>
        </article>
      </section>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/main';

.main {
  width: 100%;
  height: 100%;

  &__container {
    width: 90%;
    margin: auto;
    text-align: center;

  }

  &__propuestas {
      width: 100%;
      margin: auto;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: auto;
      gap: 20px;
      justify-items: center;
      align-content: center;
  }

  & .propuesta {
    width: 300px;
    height: 380px;

    &__img--container {
      width: 250px;
      padding: 20px;
      height: 250px;
      overflow: hidden;
      margin: auto;

      & img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
        box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.151);
        transition: all 600ms;

        &:hover {
          transform: scale(1.1)
        }

      }
    }

    &__description {
      display: grid;
      padding: 0 10px;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-template-areas:  "title title title"
                            "countingVote countingVote ctaVote";
      row-gap: 10px;

      align-items: center;

      & h2 {
        grid-area: title;
      }

      & span {
        grid-area: countingVote;
        justify-self: flex-start;
      }

      & button {
        grid-area: ctaVote;
        width: 90%;
        height: 30px;
        background-color: #ff46ff;
        color: white;
        font-weight: bold;
      }

    }
  }
}
</style>

<script>
import { mapState } from 'vuex';

export default {
  name: 'PxMainPropuestas',

  computed: {
    ...mapState(['Propuestas'])
  },

  methods: {
    voteProposal() {
      this.Propuestas.votes = this.Propuestas.votes += 1
    }
  },
}
</script>