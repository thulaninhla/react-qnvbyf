import firebase from "firebase/app"
import firebase from "firebase"
import "firebase/auth"
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyBr6Y6dGzsV2qg71ldTmxZ_nS26XBBjRs4",
  authDomain: "project-pro-41396.firebaseapp.com",
  projectId: "project-pro-41396",
  storageBucket: "project-pro-41396.appspot.com",
  messagingSenderId: "51857395050",
  appId: "1:51857395050:web:3e1c36293fd7ae3d67e913"
  
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db} 