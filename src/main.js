import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// FIREBASE SETTINGS
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA5BvzQ5YbJ54dV7qfFWT82XLZjRf_jOWA",
  authDomain: "my-secrect-opinion.firebaseapp.com",
  databaseURL: "https://my-secrect-opinion.firebaseio.com",
  projectId: "my-secrect-opinion",
  storageBucket: "my-secrect-opinion.appspot.com",
  messagingSenderId: "779025684089",
  appId: "1:779025684089:web:ed1da73eb7271d069c26a8",
  measurementId: "G-V43ZKNQJJP"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics;

// utils
export const db = firebase.firestore();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// let app = null

// firebase.auth().onAuthStateChanged(() => {
//     if(!app) {
//         app = new Vue({
//             router,
//             store,
//             render: h => h(App)
//         }).$mount('#app')
//     }
// })
