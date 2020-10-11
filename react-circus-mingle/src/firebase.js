import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAzEqU3aMhMKvUOPy49rsMQJbfbuksGtHU",
    authDomain: "circusmingle.firebaseapp.com",
    databaseURL: "https://circusmingle.firebaseio.com",
    projectId: "circusmingle",
    storageBucket: "circusmingle.appspot.com",
    messagingSenderId: "1017567482808",
    appId: "1:1017567482808:web:25100a7c2810c2f7d4f54d",
    measurementId: "G-HMRHPEHQBJ"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;