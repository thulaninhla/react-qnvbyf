import React, { useRef, useState } from "react"
import { Form, Button, Card, Container, Row, Col, Alert } from "react-bootstrap"
import "firebase/auth"
import { useAuth } from "./AuthContext"
import { Link, useHistory } from "react-router-dom"
import "./style.css";


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
    
    <grid>
    <Container>
      <Row>
    <Col xs={9} md={5}>
    <Card className="bg-dark text-white" style={{ width: "35rem", height: "35rem"}}>
  <Card.Img src="https://scontent.fjnb11-1.fna.fbcdn.net/v/t1.6435-9/c420.0.1080.1080a/s851x315/221416672_4359414714115016_4589805908274039668_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=da31f3&_nc_eui2=AeG_K15tqUvmV-6HEmkzTHM2QLOPcot1b9xAs49yi3Vv3Cy1D_AWTw0i9-5kE8jUzkV1kHA4yoULySMtqKoaflft&_nc_ohc=BauuODv3LY8AX8FLHVL&_nc_ht=scontent.fjnb11-1.fna&oh=c03da21ce0cb1e7b6b9b31ad9c4e7f8e&oe=6121E755" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title></Card.Title>
    <Card.Text>
      
    </Card.Text>
    <Card.Text></Card.Text>
  </Card.ImgOverlay>
</Card>

    </Col>
    
        <Col xs={5} md={7}>
      <Card style={{ width: '35rem', height: '35rem'}}>
        <Card.Body>
          
          <h2 className="text-center mb-4">Sign In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled="" className="w-100" type="submit">
              Sign in
            </Button>
          </Form>
          
          <div className="w-100 text-center mt-2">
              <Link to="/forgot-passsword">Forgot Password</Link>
            </div>
        </Card.Body>
        <div className="w-100 text-center mt-2">
      Need an account? <Link to="/signup">Sign Up</Link>
      </div>
      </Card>
     
      </Col>
     
      </Row>
      
     </Container>
     </grid>
    </>
    
  );
}