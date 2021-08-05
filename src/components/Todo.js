import React from 'react';
import { alpha ,makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import randomColor from 'randomcolor';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(13),
    textAlign: 'center',
    color: theme.palette.text.secondary,

  gridLay: {
    height: '400px',
    maxWidth: '500px'
  },  
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'left',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  },
}));
async function handleLogout() {
  setError('');

  try {
    await logout();
    history.push('/signin');
  } catch {
    setError('Failed to log out');
  }
}

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Grid container spacing={0} container wrap="wrap" spacing={2}>
      </Grid>
      <Grid container spacing={0} className="gridLay" >
        <Grid item sx={3} style={{ height:"600px"}} style={{background:randomColor()}} >
          <br />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
            </div>
            <InputBase style={{textAlign:"left"}}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <SearchIcon />

          </div><br />
           <Typography variant="h6" style={{textAlign:"left", marginLeft:"35px"}}>My day</Typography>
           <br />
           <Typography variant="h6" style={{textAlign:"left", marginLeft:"35px"}}>Important</Typography>
           <br />
           <Typography variant="h6" style={{textAlign:"left", marginLeft:"35px"}}>Plannned</Typography>
           <br />
           <Typography variant="h6" style={{textAlign:"left", marginLeft:"35px"}}>My day</Typography>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper} style={{height:"600px" , backgroundImage: " url('https://scontent.fjnb10-1.fna.fbcdn.net/v/t1.6435-9/212240113_4385266501529837_112884892142877978_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeFOkaN2t-9xfbqrZHE-WvIAuQmVQvqdYzm5CZVC-p1jOdzUIingiSLl6qeLi2-OTD4MYDRuhClCGza-CyeBAS1j&_nc_ohc=fZQe5edgIBUAX9gXbPz&_nc_ht=scontent.fjnb10-1.fna&oh=4adf07630c34b844c1e04a928bdf50b2&oe=6131BFBF')"}}></Paper>
        </Grid>
        <Grid item xs={3} style={{ height:"600px"}}style={{background:randomColor()}}>
          <br />
          <br />
          <br />
        <Typography variant="h6" style={{textAlign:"left", marginLeft:"35px"}}>Add to my day</Typography>
           <br />
           <Typography variant="h6" style={{textAlign:"left", marginLeft:"35px"}}>Remind me</Typography>
           <br />
           <Typography variant="h6" style={{textAlign:"left", marginLeft:"35px"}}>Add due date</Typography>
           <br />
           <Typography variant="h6" style={{textAlign:"left", marginLeft:"35px"}}>Repeat</Typography>
           <br />
           <Typography variant="h6" style={{textAlign:"left", marginLeft:"35px"}}>Add file</Typography>
           
           
        </Grid>
      </Grid>
      
    </div>
  );
}