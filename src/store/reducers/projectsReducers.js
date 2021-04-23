import ACTIONS from "../actions/actionTypes"
const initialState = {
  projects: [],
}

const projectReducers = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.CREATE_PROJECT:
      console.log("create project success")
      console.log(state);
      return state
    case ACTIONS.CREATE_PROJECT_FAILURE:
      console.log("create project error")
      return state
    default:
      return state
  }
}

export default projectReducers
