
import firebase from "firebase";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZoJJaa_kIfAYPl9djoTwXqza1JSpNytk",
  authDomain: "socialapp-f14f0.firebaseapp.com",
  projectId: "socialapp-f14f0",
  storageBucket: "socialapp-f14f0.appspot.com",
  messagingSenderId: "160398617151",
  appId: "1:160398617151:web:9ad1db5af022bbc068668a",
  measurementId: "G-4W5KVL5Y0J"
};
const firebaseApp =firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore()
export const auth = firebase.auth();
export default {db,auth};

// import firebase from "firebase/app";

// import "firebase/auth";

// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASURMENT_ID
// });
// export const auth = app.auth();
// export default app;

