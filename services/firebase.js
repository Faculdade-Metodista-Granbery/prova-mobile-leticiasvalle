import firebase from 'firebase/app';
import 'firebase/firebase-database';

const firebaseConfig = {
    apiKey: "AIzaSyB7s3jjKcQu7a8-Cu3Yc07a10KCPVUf-pA",
    authDomain: "prova-mobile-leticiasvalle.firebaseapp.com",
    databaseURL: "https://prova-mobile-leticiasvalle-default-rtdb.firebaseio.com",
    projectId: "prova-mobile-leticiasvalle",
    storageBucket: "prova-mobile-leticiasvalle.appspot.com",
    messagingSenderId: "357887420047",
    appId: "1:357887420047:web:c05e4ce62dac54d18032fa"
  };

  firebase.initializeApp(firebaseConfig);

  const db =  firebase.database().ref();

  const getAll = () => {
      return db;
  }

  export default {
      getAll
  }