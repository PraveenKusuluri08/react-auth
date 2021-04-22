import ACTIONS from "../actions/actionTypes"
const initialState = {
  authError: null
}

const authReducer = (state = initialState, action) => {
  switch(action.type){
    case ACTIONS.LOGIN_FAILURE:
      console.log('login error');
      return {
        ...state,
        authError: 'Login failed'
      }
    case ACTIONS.LOGIN_SUCCESS:
      console.log('login success');
      return {
        ...state,
        authError: null
      }
      case ACTIONS.SIGNOUT_SUCCESS :
        console.log("signout success");
        return state
    default:
      return state
  }
};

export default authReducer;