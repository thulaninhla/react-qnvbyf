
import React, { useState } from "react";
import "./App.css";
import { Button, Card, Form, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from './AuthContext';
import { Link, useHistory } from 'react-router-dom';
import "./style.css";
import { Scrollbars } from 'react-custom-scrollbars';
import 'firebase/auth';
import firebase from 'firebase/app';
import 'firebase/firestore';

function Todo({ todo, index, markTodo, removeTodo }) {

  return (
    
   
    <div className="todo">
      
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
      
      <div>
        
        <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
        
      </div>
      
    </div>
  
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}> 
    <Form.Group>
      <Form.Label><b>Add Task</b></Form.Label>
      <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new task" />
    </Form.Group><br />
    <Button variant="primary mb-3" type="submit">
      Submit
    </Button>
  </Form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([
    
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const history = useHistory();


  async function handleLogout() {
    setError('');

    try {
      await logout();
      history.push('/signin');
    } catch {
      setError('Failed to log out');
    }
  }

  return (
    
    <div className="app">
      <div className="container">
  
          {error && <Alert variant="danger">{error}</Alert>}
          <Button variant="link" onClick={handleLogout}>
          Sign Out
        </Button>
       <h3 className="text-center mb-4">   <strong>Signed in as:</strong> {currentUser.email} </h3>
      <h5> Date & Time: {new Date().toLocaleString() + " "}</h5>
      
        <h3 className="text-center mb-4">Todo List</h3>
        <FormTodo addTodo={addTodo} />
        <div>
          <>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
            
          ))} </>
         
           
        </div>
      </div>
    </div>
    
  );
}

export default App;