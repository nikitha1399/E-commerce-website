import firebase from "firebase/app";
//import * as firebase from 'firebase';
import 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnRMm76Tvrtk149-LPXt-5EcLbKvMAMpA",
  authDomain: "react-b4e04.firebaseapp.com",
  projectId: "react-b4e04",
  storageBucket: "react-b4e04.appspot.com",
  messagingSenderId: "373421915256",
  appId: "1:373421915256:web:7d189d58ecf6abdd16018d"
};

firebase.initializeApp(firebaseConfig);
//export
export const auth = firebase.auth();
export const googleAuthProvider=new firebase.auth.GoogleAuthProvider();

 
 