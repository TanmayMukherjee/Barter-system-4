import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {    apiKey: "AIzaSyBqsGe9LhRyl6JJVAHXGDsc8oyr2sBGWZs",
    authDomain: "bartersystem-b521c.firebaseapp.com",
    databaseURL: "https://bartersystem-b521c-default-rtdb.firebaseio.com",
    projectId: "bartersystem-b521c",
    storageBucket: "bartersystem-b521c.appspot.com",
    messagingSenderId: "817533901029",
    appId: "1:817533901029:web:5d9276e6f65277cb811c0c"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore()