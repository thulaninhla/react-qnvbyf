import React, { useState } from "react";
import "./App.css";
import { Button, Card, Form, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from './AuthContext';
import { Link, useHistory } from 'react-router-dom';
import "./style.css";
import 'firebase/auth';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { v4 as uuidv4 } from 'react';
import {auth, db} from '../Config/Config'
import { Todo } from './Todo';
import { Modal } from './Modal';


export const Home = ({currentUser, todos, deleteTodo,
editTodoValue, editModal, updateTodoHandler}) => {

  const [todo, setTodo]=useState('');
  const [todoError, setTodoError]=useState('');

  const handleTodoSubmit=(e)=>{
    e.preventDefault();
    auth.onAuthStateChanged(user=>{
      if(user){
        db.collection('todos of ' + user.uid).add({
          Todo: todo
        }).then(setTodo('')).catch(err=>setTodoError(err.message))
      }
      else{
        console.log('user is not signed in to add todo to database');
      }
    })
  }

    return (
        <div className='wrapper'>
          <Header currentUser={currentUser}/>
          <br></br>
          <br></br>
          <div className='container'>
            <form autoComplete='off' className='form-group'
            onSubmit={handleTodoSubmit}>

            {currentUser&&<>
              <input type="text" placeholder="Enter TODO's"
                className='form-control' required
                onChange={(e)=>setTodo(e.target.value)}
                value={todo}
              />
              <br></br>
              <div style={{width: 100+'%',
              display: 'flex',justifyContent: 'flex-end'}}>
                <button type="submit" className='btn btn-success'
                  style={{width: 100+'%'}}>
                   ADD
                </button>
              </div>
              
            </>}

            {!currentUser&&<>
              <input type="text" placeholder="Enter TODO's"
                className='form-control' required disabled
              />
              <br></br>
              <div style={{width: 100+'%',
              display: 'flex',justifyContent: 'flex-end'}}>
                <button type="submit" className='btn btn-success'
                disabled style={{width: 100+'%'}}>
                   ADD
                </button>
              </div>
              <div className='error-msg'>
                Please register your account or login to use application
              </div>
            </>}
            
            </form>
            {todoError&&<div className='error-msg'>{todoError}</div>}
            <Todo todos={todos} deleteTodo={deleteTodo}
             editModal={editModal}/>
            </div>

            {editTodoValue&&<Modal editTodoValue={editTodoValue}
              editModal={editModal} updateTodoHandler={updateTodoHandler}
            />} 
              
        </div>
    )
}

function Todo({ todo, index, markTodo, removeTodo }) {

  const [Datalist,setData]=useState([{activity:''}])

  const onCreate = () =>{
    const db =firebase.firestore()
    db.collection("users").add({activity:input})
  }
  const onInputChange = event => {
    setInput(event.target.value);
  };
  const onFormSubmit = event => {
    event.preventDefault();
    setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
    setInput('');
  };

  return (
    
    <div className="todo" style={{width:'400px', height:'0px', margin:'4px' }}>
      
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
    <>
    
    <Form onSubmit={handleSubmit} > 
    <Form.Group className="text-center mb-4">
      <Form.Label><b>Add Task</b></Form.Label>
      <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new task" style={{width:"370px", height:'40px', margin:'15px' }}/>
    </Form.Group>
    <Button variant="primary mb-3" type="submit" style={{ margin:'15px' }}
    >
      Submit
    </Button >
  </Form>
  </>
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
    <>
      <h3 className="text-left mb-4" style={{ margin:'15px' }}>To-Do-List</h3>
          <Button variant="link" onClick={handleLogout}>
          Sign Out
        </Button>
      
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
  </>
 
  );
}


export default App;
