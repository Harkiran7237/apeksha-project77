import firebase from 'firebase';
require("@firebase/firestore")
var firebaseConfig = {
    apiKey: "AIzaSyBAXSptIKjhe-OzBwv5ApxvAHwLDnB_S-Q",
    authDomain: "barter-system-c37ef.firebaseapp.com",
    databaseURL: "https://barter-system-c37ef.firebaseio.com",
    projectId: "barter-system-c37ef",
    storageBucket: "barter-system-c37ef.appspot.com",
    messagingSenderId: "862328215297",
    appId: "1:862328215297:web:fc022ac097f81f28f62d00"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();