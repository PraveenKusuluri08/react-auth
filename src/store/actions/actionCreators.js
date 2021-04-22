import ACTIONS from "./actionTypes"

export const createProject = (project) => {
  return (dispatch, getState, { getFirestore }) => {
    // async calls
    const firestore = getFirestore()
    firestore
      .collection("projects")
      .add({
        ...project,
        autherFirstName: "Praveen",
        autherLastName: "Praveen",
        autherId: 888,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: ACTIONS.CREATE_PROJECT })
      })
      .catch((error) => {
        console.log(error)
        dispatch({ type: "CREATE_PROJECT_ERROR" }, error)
      })
  }
}

// authenntication action createProject
export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: ACTIONS.LOGIN_SUCCESS })
        console.log("success")
      })
      .catch((err) => {
        dispatch({ type: ACTIONS.LOGIN_FAILURE, err })
        console.log(err)
      })
  }
}

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()

    firebase.auth().signOut().then(() => {
      dispatch({ type: ACTIONS.SIGNOUT_SUCCESS })
    })
  }
}
