import rootReducer from "./rootReducer/rootReducer"
import thunk from "redux-thunk"
import {createStore} from "redux"
import {applyMiddleware} from "react-redux"

const store =createStore(rootReducer,applyMiddleware(thunk))

export default store