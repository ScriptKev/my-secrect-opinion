import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// firebase init - add your own config here
// const firebaseConfig = {
//   apiKey: "AIzaSyA5BvzQ5YbJ54dV7qfFWT82XLZjRf_jOWA",
//   authDomain: "my-secrect-opinion.firebaseapp.com",
//   databaseURL: "https://my-secrect-opinion.firebaseio.com",
//   projectId: "my-secrect-opinion",
//   storageBucket: "my-secrect-opinion.appspot.com",
//   messagingSenderId: "779025684089",
//   appId: "1:779025684089:web:ed1da73eb7271d069c26a8",
//   measurementId: "G-V43ZKNQJJP"
// };

// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// utils
const db = firebase.firestore();
const auth = firebase.auth;

// collection references
const usersCollection = db.collection('users');
const postsCollection = db.collection('posts');
const commentsCollection = db.collection('comments');

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
};