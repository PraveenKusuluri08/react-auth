import ACTIONS from "../actions/actionTypes"
const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
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
        authError: null
      }
    default:
      return state
  }
};

export default authReducer;