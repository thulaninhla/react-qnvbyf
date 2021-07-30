import React from "react"
import Signup from "./Signup"
import { Container } from 'react-bootstrap'
import { AuthProvider } from "./AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Todo from "./Todo"
import Signin from "./Signin"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <Grid>
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
                </Switch>
          </AuthProvider>
        </Router>
  
    </div>
  </Container>
  </div>
  </Grid>
  )
}

export default App