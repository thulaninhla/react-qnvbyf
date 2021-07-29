import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from './AuthContext';
import { Link, useHistory } from 'react-router-dom';
import React from "react";
import { BrowserRouter as Link, useHistory, Button, Card, Form} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React,{useState} from 'react';
import{BrowserRouter  as Router, Route, Switch, Link} from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { Switch, Link} from "react-router-dom";
import React ,{useState , useEffect} from "react";
import React,{useState} from "react";
import "./style.css";


const styles = {background:"#00FFFFFF", borderRadius: '0px', height: '550px',width:'220px',marginLeft:'50px'};
const styleon = {borderRadius: '0px', height: '550px',width:'450px',marginLeft:'100px'};
const style = {borderRadius: '0px', height: '550px',width:'220px',marginLeft:'251px',background:"#00FFFFFF"};

export default function Todo() {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const [todos, setTodos] = React.useState([
    {
      text: "This is a sample todo",
      isDone: false
    }
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

  async function handleLogout() {
    setError('');

    try {
      await logout();
      history.push('/signin');
    } catch {
      setError('Failed to log out');
    }
  }

  function Todo({ todo, index, markTodo, removeTodo }) {
    return (
      <div className="todo" >
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
        <Form.Label><b>Add Todo</b></Form.Label>
        <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
      </Form.Group>
      <Button variant="primary mb-3" type="submit">
        Submit
      </Button>
    </Form>
    );
  }

  return (


<div>

          {error && <Alert variant="danger">{error}</Alert>}
        <h6 className="text-center mb-10"  ><strong>Signed in as:</strong> {currentUser.email}</h6>
          
<h6 className="text-center mb-4">
<Button variant="link" onClick={handleLogout}>
          Sign Out
        </Button>
</h6>

<Grid className="mainGrid "  container spacing={0}>
<Grid className="firstinGrid " item xs={2}>
 <Paper style={styles} className="papertwo">
<input style={{borderRadius:'5px',border:"2px solid #e0e0e0",width:"170px", height:'30px',fontSize:'15px', margin:'15px', textAlign:"center" }} type="text" placeholder="search"  />

<Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '30px', textDecoration:"none" }} >
<Link  to="/Main" style={{color: 'black', marginTop: '720px',marginRight: '60px', marginLeft: '30px', textDecoration:"none" }} > My Day <i style={{color: '#e65100'}} class="fa fa-sun-o" aria-hidden="true"></i></Link></Typography  >

<Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '30px', textDecoration:"none" }} >
<Link  to="/Main" style={{color: 'black', marginTop: '720px', marginRight: '60px',marginLeft: '30px', textDecoration:"none" }} > Important <i style={{color: '#ffff00'}} class="fa fa-star" aria-hidden="true"></i></Link></Typography  >

<Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '30px', textDecoration:"none" }} >
<Link  to="/Main" style={{color: 'black', marginTop: '720px',marginRight: '60px', marginLeft: '30px', textDecoration:"none" }} > Planned <i style={{color: '#3e2723'}}  class="fa fa-calendar-check-o" aria-hidden="true"></i> </Link></Typography  >

<Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '9px', textDecoration:"none" }} >
<Link  to="/Main" style={{color: 'black', marginTop: '720px',marginRight: '60px', marginLeft: '50px', textDecoration:"none" }} > Assigned to you <i style={{color: '#ff9800'}} class="fa fa-calendar" aria-hidden="true"></i> </Link></Typography  >

<Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '30px', textDecoration:"none" }} >
<Link  to="/Main" style={{color: 'black', marginTop: '720px',marginRight: '60px', marginLeft: '30px', textDecoration:"none" }} > Tasks <i  style={{color: '#8d6e63'}} class="fa fa-book" aria-hidden="true"></i></Link></Typography  >

<Typography style={{color: 'black', marginTop: '230px',marginRight: '0px', marginLeft: '10px', textDecoration:"none" }} >
<Link  to="/Main" style={{color: '#01579b', marginTop: '720px',marginRight: '60px', marginLeft: '30px', textDecoration:"none" }} > Add new list <i style={{color: '#01579b'}} class="fa fa-plus" aria-hidden="true"></i></Link></Typography  >
   </Paper>
        </Grid>

        <Grid className="firstinGrid " item xs={4}> <Paper style={styleon} className="paperone">

        <Typography style={{fontWeight:"bold", fontSize:'30px', color: '#FFFFFF', marginLeft:"0px"}}>TO-D0-LIST  <i style={{  color: '#e65100', marginLeft:"270px"}}  class="fa fa-sun-o" aria-hidden="true"></i>
        </Typography>

          <div className="todo">
            <div className="container">

            <h1 className="text-center mb-4">Todo List</h1>
            <FormTodo addTodo={addTodo} />
            <div>
              {todos.map((todo, index) => (
                <Card>
                  <Card.Body>
                    <Todo key={index} index={index} todo={todo} markTodo={markTodo} />
                    </Card.Body>
                 </Card>   
              ))}
            </div>

        </div>
      </div>

    


        </Paper>
        
       

        </Grid>
        <Grid className="firstinGrid " item xs={2}>
          <Paper style={style} className="papertwo" >

 <Typography>
   

   <h2 style={{ marginLeft:'30px' }}> To do list</h2></Typography>
<Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '30px', textDecoration:"none" }} >
<Link to="/Main" style={{color:'black', marginTop:'720px',marginRight:'60px', marginLeft:'0px',textDecoration:"none" }} > Add new list </Link></Typography  >

<Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '30px', textDecoration:"none" }} >
<Link  to="/Main" style={{color: 'black', marginTop: '720px', marginRight: '60px',marginLeft: '0px', textDecoration:"none" }} > Add to my day </Link></Typography  >

<Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '0px', textDecoration:"none" }} >
<Link  to="/Main" style={{color: 'black', marginTop: '720px',marginRight: '60px', marginLeft: '30px', textDecoration:"none" }} > Add notes</Link></Typography  >

<Typography style={{color: 'black', marginTop: '20px',marginRight: '60px', marginLeft: '0px', textDecoration:"none" }} >
<Link  to="/Main" style={{color: 'black', marginTop: '720px',marginLeft: '30px', textDecoration:"none" }} >Add new plan </Link></Typography  >

<Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '30px', textDecoration:"none" }} >
<Link to="/Main" style={{color:'black', marginTop:'720px',marginRight:'60px', marginLeft:'0px',textDecoration:"none" }} > Add new list </Link></Typography  >

<Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '30px', textDecoration:"none" }} >
<Link  to="/Main" style={{color: 'black', marginTop: '720px', marginRight: '60px',marginLeft: '0px', textDecoration:"none" }} > Add to my day </Link></Typography  >

<Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '0px', textDecoration:"none" }} >
<Link  to="/Main" style={{color: 'black', marginTop: '720px',marginRight: '60px', marginLeft: '30px', textDecoration:"none" }} > Add notes</Link></Typography  >

<Typography style={{color: 'black', marginTop: '20px',marginRight: '60px', marginLeft: '0px', textDecoration:"none" }} >
<Link  to="/Main" style={{color: 'black', marginTop: '720px',marginLeft: '30px', textDecoration:"none" }} >Add new plan </Link></Typography  >





   </Paper>
        </Grid>
        
        
      </Grid>

    </div>



  );
}
