import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyA4j3pnXgQdrzlsH0WXii6cwKYpTo5CO9U",
    authDomain: "e-ride-stage-4-8b167.firebaseapp.com",
    projectId: "e-ride-stage-4-8b167",
    storageBucket: "e-ride-stage-4-8b167.appspot.com",
    messagingSenderId: "318334789294",
    appId: "1:318334789294:web:f8a06ffc92e6978d6aaf3f"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
