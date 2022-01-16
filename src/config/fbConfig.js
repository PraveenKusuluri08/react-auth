
import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"

var config = {
 
};

firebase.initializeApp(config);

firebase.firestore().settings({ timestampsInSnapshots: true });


export const auth = firebase.auth();


export default firebase 
