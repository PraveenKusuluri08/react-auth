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
        dispatch({ type: ACTIONS.CREATE_PROJECT})
      })
      .catch((error) => {
        console.log(error)
        dispatch({type: 'CREATE_PROJECT_ERROR' }, error)
      })
  }
}
