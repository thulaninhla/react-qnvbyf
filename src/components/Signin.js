import React, { useRef, useState } from "react"
import { Form, Button, Card, Container, Row, Col, Alert } from "react-bootstrap"
import "firebase/auth"
import { useAuth } from "./AuthContext"
import { Link, useHistory } from "react-router-dom"
import "./mystyle.css"
import CssBaseline from '@material-ui/core/CssBaseline';




export default function Signin() { 
  const emailRef  = useRef()
  const passwordRef = useRef()
  const { signin } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()


async function handleSubmit(e) {
    e.preventDefault()

      try {
        setError('')
        setLoading(true)
        await signin(emailRef.current.value, passwordRef.current.value)
      history.push("/")
      } catch {
        setError('Failed to sign In')
      }
       setLoading(false)
  }

  return (
  
  <>
<section className="login" py-5 bg-light>
  <div className="container">
    <div className="row" g-0>
      <div className="col-lg-5">
        <img className="img-fluid" alt="" />
      </div>
          <div className="col-lg-7 text-center py-5">
            <h1>Sign in</h1>
            {error && <Alert variant="danger">{error}</Alert>}

            <form onSubmit={handleSubmit}>
              <div className="form-row py-3 pt-5" >
                <div className="offset-1 col-lg-10">
                  <input type="email" id="email" ref={emailRef} className="inp px-3" placeholder="Email" required/>
              </div>
                </div>
                <div className="form-row">
                <div className="offset-1 col-lg-10">
                <input type="passsword" id="passsword" ref={passwordRef} className="inp px-3" placeholder="Passsword" required />
              </div>
                </div>
          
                <div className="form-row py-3">
                <div className="offset-1 col-lg-10">
                  <button className="btn1" type="submit">Sign in</button>
              </div>
                </div>

                <div className="w-100 text-center mt-2">
              <Link to="/forgot-passsword">Forgot Password</Link>
            </div>
        
        <div className="w-100 text-center mt-2">
      Need an account? <Link to="/signup">Sign Up</Link>
      </div>   
            </form>    
            </div>
      </div>
  </div>   
  
</section>
</>
    
  );
}