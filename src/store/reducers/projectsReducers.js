import ACTIONS from "../actions/actionTypes"
const initialState = {
  projects: [
    { id: "1", title: "help me find peach", content: "blah blah blah" },
    { id: "2", title: "collect all the stars", content: "blah blah blah" },
    { id: "3", title: "egg hunt with yoshi", content: "blah blah blah" },
    { id: "3", title: "egg hunt with yoshi", content: "blah blah blah" },
  ],
}

const projectReducers = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.CREATE_PROJECT:
      console.log("create project success")
      return state
    case ACTIONS.CREATE_PROJECT_FAILURE:
      console.log("create project error")
      return state
    default:
      return state
  }
}

export default projectReducers
