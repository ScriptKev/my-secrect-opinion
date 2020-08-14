<template>
  <main class="main">
    <section class="writeYourComment">
      <div class="writeYourComment__container">
        <input type="text" class="writeYourComment__input" v-model="anonymousComment">
        <button @click="sumbitUserComment" class="writeYourComment__sumbit cta__primary">Enviar</button>
      </div>
    </section>

    <section class="comments">
      <div class="comments__container">
        <ul class="comments__list">
          <li class="comment" v-for="(data, i) in userComments" :key="i">
            <div class="comment__content">
              <div class="comment__content--author">
                <h4 style="margin-left: 20px;">Anonimo</h4>
              </div>

              <div class="comment__content--msj">
                <p> {{ data }} </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/main';

.main {
  margin-top: 50px;
  width: 100%;
  height: 100%;

  & .writeYourComment {
    width: 100%;

    &__container {
      width: 90%;
      margin: auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
  }

  & .comments {
    margin-top: 50px;

    &__container {
      width: 90%;
      margin: auto;
    }

    &__list {
      width: 100%;
      height: 100%;
      
    }

    & .comment {
      width: 100%;
      height: 100%;
      display: flex;
      padding: 20px 0;
      background-color: #dddddd;
      margin: 20px 0;
      box-shadow: 5px 0px 20px rgba(0, 0, 0, 0.151);
      border-radius: 10px;


      &__content {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        grid-template-areas:  "author msj";
        justify-items: initial;

        &--author {
          grid-area: author;
        }

        &--msj {
          grid-area: msj;
        }
      }
    }
  }
}
</style>

<script>
import firebase from 'firebase/app';
import 'firebase/firestore';

export default {
  name: 'PxMain',
  props: ['userComments', 'idTheme'],

  data: () => ({
    anonymousComment: ''
  }),

  computed: {
    userCommentsComputed () {
      return this.userComments;
    },
  },

  methods: {
    async sumbitUserComment () {
      try {
        const arrayUnion = firebase.firestore.FieldValue.arrayUnion;

        firebase.firestore().collection('Temas').doc(this.idTheme).update({
          userComments: arrayUnion(this.anonymousComment)
        }).then(() => {
          console.log('comentario enviado')
          this.anonymousComment = ''
        }).catch((err) => console.error(err))

      } catch (error) {
      }
    }
  },
}
</script>