import ACTIONS from "../actions/actionTypes"
const initialState = {
  authError: null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN_FAILURE:
      console.log("login error")
      return {
        ...state,
        authError: "Login failed",
      }
    case ACTIONS.LOGIN_SUCCESS:
      console.log("login success")
      return {
        ...state,
        authError: null,
      }
    case ACTIONS.SIGNOUT_SUCCESS:
      console.log("signout success")
      return state

    case ACTIONS.SIGNUP_SUCCESS:
      console.log("signup success")
      return {
        ...state,
        authError: null,
      }

    case ACTIONS.SIGNUP_FAILURE:
      console.log("signup failure")
      return {
        ...state,
        authError:action.error.message,
      }
    default:
      return state
  }
}

export default authReducer
