
       
       import React, { useState } from 'react';
       import { Card, Button, Alert } from 'react-bootstrap';
       import { useAuth } from './AuthContext';
       import { Link, useHistory } from 'react-router-dom';
       import React from "react";
       import { BrowserRouter as Router,Switch,Route,Link,useHistory,useLocation,useParams} from "react-router-dom";
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
       import firebase from "firebase/app";
       import "firebase/auth";
       import "firebase/firestore";
       import 'firebase/storage';
       import 'firebase/analytics';
       import React from "react";
       import React,{useState} from "react";
       import MyForm from './MyForm';
       import ListOfTodo from './ListOfTodo';
       import DateTime from './DateTime';
       import "./style.css";
       
       const styles = { borderRadius: '0px', height: '620px',width:'280px',marginLeft:'80px'};
       const styleon = {borderRadius: '0px', height: '620px',width:'670px',marginLeft:'15px',overflowY:"scroll"};
       const style = {borderRadius: '0px', height: '620px',width:'280px',marginLeft:'0px'};
       
       export default function Todo() {
       
       const[input , setInput]=useState("");
       const[todos, setTodos]= useState([]);
       
       
       
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
       
       
       <div>
       
       
       <Grid className="mainGrid "  container spacing={0}>
       <Grid className="firstinGrid " item xs={3}>
        <Paper style={styles} className="papertwo">
       <input style={{borderRadius:'5px',border:"2px solid #e0e0e0",width:"250px",fontWeight:"bold", height:'45px',fontSize:'15px', margin:'13px', textAlign:"center" }} type="text" placeholder="search"  />
       
       <Typography style={{color: 'black', marginTop: '60px',marginRight: '0px', marginLeft: '30px', textDecoration:"none" }} >
       <Link  to="/" style={{color: 'black', marginTop: '720px',marginRight: '60px', marginLeft: '30px', textDecoration:"none",fontSize:"20px" }} > My Day <i style={{color: '#e65100'}} class="fa fa-sun-o" aria-hidden="true"></i></Link></Typography  >
       
       <Typography style={{color: 'black', marginTop: '30px',marginRight: '0px', marginLeft: '30px', textDecoration:"none" }} >
       <Link  to="/Important" style={{color: 'black', marginTop: '720px', marginRight: '60px',marginLeft: '30px', textDecoration:"none",fontSize:"20px" }} > Important <i style={{color: '#ffff00'}} class="fa fa-star" aria-hidden="true"></i></Link></Typography  >
       
       <Typography style={{color: 'black', marginTop: '30px',marginRight: '0px', marginLeft: '30px', textDecoration:"none" }} >
       <Link  to="/Planned" style={{color: 'black', marginTop: '720px',marginRight: '60px', marginLeft: '30px', textDecoration:"none",fontSize:"20px" }} > Planned <i style={{color: '#3e2723'}}  class="fa fa-calendar-check-o" aria-hidden="true"></i> </Link></Typography  >
       
       <Typography style={{color: 'black', marginTop: '30px',marginRight: '0px', marginLeft: '9px', textDecoration:"none" }} >
       <Link  to="/Calender" style={{color: 'black', marginTop: '720px',marginRight: '60px', marginLeft: '50px', textDecoration:"none",fontSize:"20px" }} > Calendar <i style={{color: '#ff9800'}} class="fa fa-calendar" aria-hidden="true"></i> </Link></Typography  >
       
       <Typography style={{color: 'black', marginTop: '30px',marginRight: '0px', marginLeft: '30px', textDecoration:"none" }} >
       <Link  to="/Notes" style={{color: 'black', marginTop: '720px',marginRight: '60px', marginLeft: '30px', textDecoration:"none",fontSize:"20px" }} > Notes <i  style={{color: '#8d6e63'}} class="fa fa-book" aria-hidden="true"></i></Link></Typography  >
       
       <Typography style={{color: 'black', marginTop: '150px',marginRight: '0px', marginLeft: '30px', textDecoration:"none" }} >
       <Link  to="/" style={{color: '#01579b', marginTop: '20px',marginRight: '60px', marginLeft: '30px', textDecoration:"none",fontSize:"20px" }} > Add new list <i style={{color: '#01579b', marginLeft:"20px"}} class="fa fa-plus" aria-hidden="true"></i></Link></Typography  >
          </Paper>
               </Grid>
       
               <Grid className="firstinGrid " item xs={6}> <Paper style={styleon} className="paperon">
               <Typography  >
                 <p style={{ marginLeft:'80px',visibility:"hidden" }}>To do list</p>
                   </Typography >

                   <Typography style={{fontWeight:"bold", fontSize:'50px', color: '#FFFFFF', marginLeft:"30px"}}> Planned 
        <i style={{color: '#3e2723', marginLeft:"330px"}}  class="fa fa-calendar-check-o" aria-hidden="true"></i>
        </Typography>
       
            
               
               <DateTime/>
       
       <Form input={input}
       setInput={setInput}
       todos={todos}
       setTodos={setTodos}
       />
       <h5 style={{color:"##3e2723", textAlign:"center"}}> Planned </h5>
       <TodosList todos={todos}
       setTodos={setTodos}/>
       
       
               </Paper>
               
              
       
               </Grid>
               <Grid className="firstinGrid " item xs={3}>
                 <Paper style={style} className="papertwo" >
       
                 <Typography  >
                 <p style={{visibility:"hidden" }}>To do list</p>
                   </Typography >
            
        <Typography><h2 style={{ marginLeft:'50px' }}> <AddCircleIcon style={{  fontSize: '30px' , color:'#0099FF' }}/>To do list</h2></Typography>
       <Typography style={{ marginLeft:'60px',fontSize: '10px' ,color:'#24527a', fontWeight:"bold", marginBottom:"50px",marginTop: '30px' }}>
          {error && <Alert variant="dnager">{error}</Alert>}
                 {currentUser.email}
                 </Typography>
       
       <Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '50px', textDecoration:"none" }} >
       <Link to="/" style={{color:'black', marginTop:'720px',marginRight:'0px', marginLeft:'0px',textDecoration:"none" }} ><i style={{marginRight:'10px' ,color: '#01579b'}} class="fa fa-plus" aria-hidden="true"></i> Add new list </Link></Typography  >
       
       
       
       <Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '50px', textDecoration:"none" }} >
       <Link  to="/" style={{color: 'black', marginTop: '720px', marginRight: '0px',marginLeft: '0px', textDecoration:"none" }} ><i  style={{marginRight: '10px',color:"#adf7d1"}}  class="fa fa-plus-square-o" aria-hidden="true"></i> Add to my day  <i style={{color: '#e65100'}} class="fa fa-sun-o" aria-hidden="true"></i> </Link></Typography  >
       
       <Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '0px', textDecoration:"none" }} >
       <Link  to="/Notes" style={{color: 'black', marginTop: '720px',marginRight: '0px', marginLeft: '50px', textDecoration:"none" }} > <i  style={{marginRight: '10px',color:"#adf7d1"}}  class="fa fa-plus-square-o" aria-hidden="true"></i>Add notes<i  style={{color: '#8d6e63'}} class="fa fa-book" aria-hidden="true"></i></Link></Typography  >
       
       <Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '0px', textDecoration:"none" }} >
       <Link  to="/Planned" style={{color: 'black', marginTop: '720px',marginLeft: '50px', textDecoration:"none" }} ><i style={{marginRight: '10px',color:"#adf7d1"}}  class="fa fa-plus-square-o" aria-hidden="true"></i>Add new plan <i style={{color: '#3e2723'}}  class="fa fa-calendar-check-o" aria-hidden="true"></i> </Link></Typography  >
       
       <Typography style={{fontWeight:"bold", marginTop: '240px', marginLeft: '40px', textDecoration:"none" }} >
       <Link  to="/signin" style={{color: '#f95959',textDecoration:"none" }} >Sign Out<i  style={{  marginLeft: '10px'}} class="fa fa-sign-out" aria-hidden="true"></i> </Link>
       </Typography >
       
                 </Paper>
               </Grid>
             </Grid>
           </div>
       
       
       
         );
       }
       