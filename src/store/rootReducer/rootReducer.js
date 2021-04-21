import authReducer from "../reducers/AuthReducers/authReducers"

import projectReducers from "../reducers/ProjectsReducers/projectsReducers"

import {combineReducers} from "redux";

const rootReducer =combineReducers({
  auth:authReducer,
  project:projectReducers
})

export default rootReducer