import ACTION from "./actionTypes"

export const createProject = (project) => {
  // return {
  //   type: ACTION.CREATE_PROJECT,
  //   project: project,
  // }
  return (dispatch, getState) => {
    // async calls
    dispatch({ type: ACTION.CREATE_PROJECT, project })
  }
}
