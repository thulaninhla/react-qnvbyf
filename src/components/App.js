import React from "react"
import Signup from "./Signup"
import { Container } from 'react-bootstrap'
import { AuthProvider } from "./AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Todo from "./Todo"
import Signin from "./Signin"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import Grid from '@material-ui/core/Grid'
import Important from "./Important "
import Calender from "./Calender"
import Notes from "./Notes"
import Planned from "./Planned"

function App() {
  return (
    
    <div>
      <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: '900px' }} >
        <Router>
          <AuthProvider>
            <Switch>
              <Route path="/signin" component={Signin} />
              <PrivateRoute exact path="/" component={Todo} />
              <Route path="/signup" component={Signup} />
              <Route path="/forgot-passsword" component={ForgotPassword} />
              <Route path="/Calender" component={Calender} />
              <Route path="/Planned" component={Planned} />
              <Route path="/Notes" component={Notes} />
              <Route path="/Important" component={Important} />
             
                </Switch>
          </AuthProvider>
        </Router>
  
    </div>
  </Container>
  </div>
  
  )
}

export default App