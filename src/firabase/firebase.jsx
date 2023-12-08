import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCe8f6HwtbfMn794pX95ZTpvFzHBDDZuoU",
  authDomain: "curso-react-flex.firebaseapp.com",
  projectId: "curso-react-flex",
  storageBucket: "curso-react-flex.appspot.com",
  messagingSenderId: "18759082719",
  appId: "1:18759082719:web:9f06648a094a0bd83ebf6a",
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export { db };
