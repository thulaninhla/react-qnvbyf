import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBr6Y6dGzsV2qg71ldTmxZ_nS26XBBjRs4",
  authDomain: "project-pro-41396.firebaseapp.com",
  projectId: "project-pro-41396",
  storageBucket: "project-pro-41396.appspot.com",
  messagingSenderId: "51857395050",
  appId: "1:51857395050:web:3e1c36293fd7ae3d67e913"
  
})
// Initialize irebase

export const auth = app.auth();
export const firestore = firebase.firestore();
export default app;