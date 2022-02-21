import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBh53TE23_eovvHk-7nlSfnoyNiDeicfWo",
  authDomain: "invoice-app-da3ab.firebaseapp.com",
  projectId: "invoice-app-da3ab",
  storageBucket: "invoice-app-da3ab.appspot.com",
  messagingSenderId: "672015278897",
  appId: "1:672015278897:web:1bdccf9a815d3c1237c610",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
