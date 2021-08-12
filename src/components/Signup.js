import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import 'firebase/auth';
import { useAuth } from './AuthContext';
import { Link, useHistory } from 'react-router-dom';
import "./style.css";
import "firebase/firestore";

  export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState(''); 

 const [registerationError, setRegisterationError]=useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then((cred)=>{
      db.collection('users').doc(cred.user.uid).set({
          Email: email,
          Password: password
      }).then(()=>{
          setEmail('');
          setPassword('');
          setRegisterationError('');
          props.history.push('/login');
      }).catch(err=>setRegisterationError(err.message))
  }).catch(err=>setRegisterationError(err.message))

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Password do not match');
    }
    history.push('/signin');
    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError('Failed to creat an account');
    }
    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
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
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group><br />
            <Button disabled="" className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/Signin">Sign In</Link>
      </div>
    </>
  );
}
