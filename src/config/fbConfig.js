
import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"

var config = {
  apiKey: "AIzaSyDNJycEHY5z64lbmrygXtENFV3L7NpEzNo",
  authDomain: "auth-app-e4978.firebaseapp.com",
  projectId: "auth-app-e4978",
  storageBucket: "auth-app-e4978.appspot.com",
  messagingSenderId: "682336724411",
  appId: "1:682336724411:web:dc17136e91a0da6948509e"
};

firebase.initializeApp(config);

firebase.firestore().settings({ timestampsInSnapshots: true });


export const auth = firebase.auth();


export default firebase 