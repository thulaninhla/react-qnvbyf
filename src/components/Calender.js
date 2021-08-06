import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from './AuthContext';
import { Link, useHistory } from 'react-router-dom';
import React from "react";
import { BrowserRouter as Router,Switch,Route,Link,useHistory,useLocation,useParams} from "react-router-dom";
import React,{useState} from 'react';
import{BrowserRouter  as Router, Route, Switch, Link} from "react-router-dom";
import Sign from "./Pages/Sign";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "./style.css";
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
import "./style.css";
import{v4 as uuidv4} from "uuid";
import React,{useState} from "react";
import "./style.css";
//import Form from './comp/Form';
//import TodosList from './comp/TodosList';
//import  ReactCalendar from './comp/ ReactCalendar';
//import Important from "./Important "
import Calender from "./Calender"
import Notes from "./Notes"
import Planned from "./Planned"
import Cal from "./comp/Cal"
import moment from "moment";
import DateTime from './comp/DateTime';


const styles = { borderRadius: '0px', height: '550px',width:'250px',marginLeft:'50px'};
const styleon = {borderRadius: '0px', height: '550px',width:'452px',marginLeft:'120px',overflowY:"scroll"};
const style = {borderRadius: '0px', height: '550px',width:'220px',marginLeft:'271px'};

export default function Calender() {

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
  
  var showdate = new Date();
  var dt = showdate.toDateString();


  return (


<div>


<Grid className="mainGrid "  container spacing={0}>
<Grid className="firstinGrid " item xs={2}>
 <Paper style={styles} className="papertwo">
<input style={{borderRadius:'5px',border:"2px solid #e0e0e0",width:"170px", height:'30px',fontSize:'15px', margin:'15px', textAlign:"center" }} type="text" placeholder="search"  />

<Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '30px', textDecoration:"none" }} >
<Link  to="/" style={{color: 'black', marginTop: '720px',marginRight: '60px', marginLeft: '30px', textDecoration:"none" }} > My Day <i style={{color: '#e65100'}} class="fa fa-sun-o" aria-hidden="true"></i></Link></Typography  >

<Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '30px', textDecoration:"none" }} >
<Link  to="/Important" style={{color: 'black', marginTop: '720px', marginRight: '60px',marginLeft: '30px', textDecoration:"none" }} > Important <i style={{color: '#ffff00'}} class="fa fa-star" aria-hidden="true"></i></Link></Typography  >

<Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '30px', textDecoration:"none" }} >
<Link  to="/Planned" style={{color: 'black', marginTop: '720px',marginRight: '60px', marginLeft: '30px', textDecoration:"none" }} > Planned <i style={{color: '#3e2723'}}  class="fa fa-calendar-check-o" aria-hidden="true"></i> </Link></Typography  >

<Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '9px', textDecoration:"none" }} >
<Link  to="/Calender" style={{color: 'black', marginTop: '720px',marginRight: '60px', marginLeft: '50px', textDecoration:"none" }} > Calender <i style={{color: '#ff9800'}} class="fa fa-calendar" aria-hidden="true"></i> </Link></Typography  >

<Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '30px', textDecoration:"none" }} >
<Link  to="/Notes" style={{color: 'black', marginTop: '720px',marginRight: '60px', marginLeft: '30px', textDecoration:"none" }} > Notes <i  style={{color: '#8d6e63'}} class="fa fa-book" aria-hidden="true"></i></Link></Typography  >

<Typography style={{color: 'black', marginTop: '230px',marginRight: '0px', marginLeft: '10px', textDecoration:"none" }} >
<Link  to="/" style={{color: '#01579b', marginTop: '720px',marginRight: '60px', marginLeft: '30px', textDecoration:"none" }} > Add new list <i style={{color: '#01579b', marginLeft:"20px"}} class="fa fa-plus" aria-hidden="true"></i></Link></Typography  >
   </Paper>
        </Grid>

        <Grid className="firstinGrid " item xs={4}> <Paper style={styleon} className="paperone">

        <Typography style={{fontWeight:"bold", fontSize:'30px', color: '#FFFFFF', marginLeft:"10px"}}>Calender 
        <i style={{color: '#ff9800', marginLeft:"250px"}} class="fa fa-calendar" aria-hidden="true"></i>
        </Typography>

        <DateTime/>
      
       <h5  style={{fontWeight:"bold", fontSize:'30px', textAlign:"center",marginLeft:"20px" , color:"blue", marginTop:"50px"}}> {dt}</h5>
      
        <Typography style={{fontWeight:"bold", fontSize:'30px', color: '#FFFFFF', marginLeft:"0px",display:"flex"}}>
        <h6  style={{fontWeight:"bold", fontSize:'20px', color: '#FFFFFF', marginLeft:"25px"}}>S</h6>
        <h6 style={{fontWeight:"bold", fontSize:'20px', color: '#FFFFFF', marginLeft:"45px"}}>M</h6>
        <h6  style={{fontWeight:"bold", fontSize:'20px', color: '#FFFFFF', marginLeft:"47px"}}>T</h6>
        <h6 style={{fontWeight:"bold", fontSize:'20px', color: '#FFFFFF', marginLeft:"48px"}}>W</h6>
        <h6 style={{fontWeight:"bold", fontSize:'20px', color: '#FFFFFF', marginLeft:"47px"}}>T</h6>
        <h6 style={{fontWeight:"bold", fontSize:'20px', color: '#FFFFFF', marginLeft:"49px"}}>F</h6>
        <h6 style={{fontWeight:"bold", fontSize:'20px', color: '#FFFFFF', marginLeft:"50px"}}>S</h6>
        </Typography>

<Cal/>

        </Paper>
        
       

        </Grid>
        <Grid className="firstinGrid " item xs={2}>
          <Paper style={style} className="papertwo" >

 <Typography><h2 style={{ marginLeft:'30px' }}> <AddCircleIcon style={{  fontSize: '30px' , color:'#0099FF' }}/>To do list</h2></Typography>
<Typography style={{ marginLeft:'30px',fontSize: '10px' ,color:'#24527a', fontWeight:"bold", marginBottom:"50px" }}>
   {error && <Alert variant="dnager">{error}</Alert>}
          {currentUser.email}
          </Typography>

<Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '30px', textDecoration:"none" }} >
<Link to="/Main" style={{color:'black', marginTop:'720px',marginRight:'0px', marginLeft:'0px',textDecoration:"none" }} ><i style={{marginRight:'10px' ,color: '#01579b'}} class="fa fa-plus" aria-hidden="true"></i> Add new list </Link></Typography  >



<Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '30px', textDecoration:"none" }} >
<Link  to="/Main" style={{color: 'black', marginTop: '720px', marginRight: '0px',marginLeft: '0px', textDecoration:"none" }} ><i  style={{marginRight: '10px',color:"#adf7d1"}}  class="fa fa-plus-square-o" aria-hidden="true"></i> Add to my day  <i style={{color: '#e65100'}} class="fa fa-sun-o" aria-hidden="true"></i> </Link></Typography  >

<Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '0px', textDecoration:"none" }} >
<Link  to="/Main" style={{color: 'black', marginTop: '720px',marginRight: '0px', marginLeft: '30px', textDecoration:"none" }} > <i  style={{marginRight: '10px',color:"#adf7d1"}}  class="fa fa-plus-square-o" aria-hidden="true"></i>Add notes<i  style={{color: '#8d6e63'}} class="fa fa-book" aria-hidden="true"></i></Link></Typography  >

<Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '0px', textDecoration:"none" }} >
<Link  to="/Main" style={{color: 'black', marginTop: '720px',marginLeft: '30px', textDecoration:"none" }} ><i style={{marginRight: '10px',color:"#adf7d1"}}  class="fa fa-plus-square-o" aria-hidden="true"></i>Add new plan <i style={{color: '#3e2723'}}  class="fa fa-calendar-check-o" aria-hidden="true"></i> </Link></Typography  >

<Typography style={{ marginTop: '240px', marginLeft: '10px', textDecoration:"none" }} >
<Link  to="/signin" style={{color: '#f95959',textDecoration:"none" }} >Sign Out<i  style={{  marginLeft: '10px'}} class="fa fa-sign-out" aria-hidden="true"></i> </Link>
</Typography  >


          </Paper>
        </Grid>
        
        
      </Grid>

    </div>



  );
}
