import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAB-bAmdJz54HtC4gB46qyrg0ipC4aeYik",
  authDomain: "linkedin-clone-1b7c5.firebaseapp.com",
  projectId: "linkedin-clone-1b7c5",
  storageBucket: "linkedin-clone-1b7c5.appspot.com",
  messagingSenderId: "693252345693",
  appId: "1:693252345693:web:5baf4954345a1e997262b4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };