
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDNJycEHY5z64lbmrygXtENFV3L7NpEzNo",
  authDomain: "auth-app-e4978.firebaseapp.com",
  projectId: "auth-app-e4978",
  storageBucket: "auth-app-e4978.appspot.com",
  messagingSenderId: "682336724411",
  appId: "1:682336724411:web:dc17136e91a0da6948509e"
};
const firebaseApp =firebase.initializeApp(firebaseConfig);
export const db=firebaseApp.firestore()
export const auth = firebase.auth();


