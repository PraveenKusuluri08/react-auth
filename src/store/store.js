import rootReducer from "./reducers/rootReducer"
import thunk from "redux-thunk"
import { createStore, applyMiddleware, compose } from "redux"
import { reduxFirestore, getFirestore } from "redux-firestore"
import { reactReduxFirebase, getFirebase } from "react-redux-firebase"
import fbConfig from "../config/fbConfig"

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(fbConfig,{useFirestoreForProfile:true,userProfile:"users",attachAuthIsReady :true}),
    reduxFirestore(fbConfig)
  )
)

export default store
