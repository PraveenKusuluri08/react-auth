import { BrowserRouter, Route, Switch } from "react-router-dom"
import "./App.css"
import SignIn from "./components/auth/SignIn"
import SignUp from "./components/auth/SignUp"
import Dashboard from "./components/dashboard/Dashboard"
import NavBar from "./components/layout/NavBar"
import ProjectDetails from "./components/projects/ProjectDetails"
import CreateProject from "./components/projects/CreateProject"
import store from "./store/store"
import {Provider} from "react-redux"
function App() {
  return (
   <Provider store={store}>
    <BrowserRouter>
      <div className=" app">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreateProject} />
        </Switch>
      </div>
      
    </BrowserRouter>
    </Provider>
  )
}
export default App
