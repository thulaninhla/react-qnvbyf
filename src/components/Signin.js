import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import Input from '@material-ui/core/Input';
import { useAuth } from "./AuthContext";
import { Link, useHistory } from "react-router-dom"
import  FormControl from '@material-ui/core/FormControl';
import  FormGroup from '@material-ui/core/FormGroup';
import InputLabel from '@material-ui/core/InputLabel';
import 'firebase/auth';

const style={
  borderRadius:"10px 0px 0px 10px",

}

const styl={
  borderRadius:"0px 10px 10px 0px",
  }

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  image: {
    backgroundImage: 'url(https://scontent-jnb1-1.xx.fbcdn.net/v/t1.6435-9/221416672_4359414714115016_4589805908274039668_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeG_K15tqUvmV-6HEmkzTHM2QLOPcot1b9xAs49yi3Vv3Cy1D_AWTw0i9-5kE8jUzkV1kHA4yoULySMtqKoaflft&_nc_ohc=e_crX677YlQAX9z1Gds&_nc_ht=scontent-jnb1-1.xx&oh=eba001f82eea9898064eced70e81e0c5&oe=612E7421)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    
    padding: theme.spacing(6),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export default function Signin() { 
 
  const emailRef  = useRef();
  const passwordRef = useRef();
  const { signin } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const classes = useStyles();


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


<div className={classes.root}>
      <Grid container component="main" className={classes.root}>
        
        <Grid style={style} className={classes.image} item xs={6}>
         
        </Grid>
        <Grid item xs={}>
          <Paper style={styl} className={classes.paper}> 
          <h2 style={{marginBottom:'30px'}} className="">Sign In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <form onSubmit={handleSubmit}>
        <FormGroup id="email"> 
        <TextField label="Email" variant="filled" type="email" required />
        <FormControl type="email" ref={emailRef} required>
          </FormControl>
          </FormGroup>

        <FormGroup id="passsword">  
        <TextField label="Password" variant="filled" type="password" required />
        <FormControl type="passsword" ref={passwordRef} required>
          </FormControl>
          </FormGroup>
        
            <Button disabled="" className="" type="submit">
              Sign in
            </Button>
            </form>
          <div className="">
              <Link to="/forgot-passsword">Forgot Password</Link>
            </div>
       
        <div className="">
      Need an account? <Link to="/signup">Sign Up</Link>
      </div></Paper>
        </Grid>
      
      </Grid>
    </div>

  );
}