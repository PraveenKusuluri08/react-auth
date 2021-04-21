import { BrowserRouter, Route, Switch } from "react-router-dom"
import "./App.css"
import Signin from "./components/auth/Signin"
import SignUp from "./components/auth/SignUp"
import Dashboard from "./components/dashboard/Dashboard"
import NavBar from "./components/layout/NavBar"
import ProjectDetails from "./components/projects/ProjectDetails"
import CreateProject from "./components/projects/CreateProject"
import {Provider} from "react-redux"
import store from "./store/store"
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <div className=" app">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreateProject} />
        </Switch>
      </div>
      
    </BrowserRouter>
    </Provider>
  )
}
export default App
