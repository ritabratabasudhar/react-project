import React ,{useContext}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import LocalAirportIcon from '@material-ui/icons/LocalAirport';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { LoginRegisterContext } from '../Context/LoginRegContext';
import { Button, Grid } from '@material-ui/core';
import history from '../History/history';
//import { LocalAirport } from 'material-ui-icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const {username,settheusername}=useContext(LoginRegisterContext);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const isLoginTrue=(settheusername)=>{
     settheusername('');
  }
  const goToLogin=()=>{
    history.push('/react-project/login')
  }
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{height:"57px"}}>
        <Toolbar>
          <Grid>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <LocalAirportIcon onClick={()=>history.push('/react-project')} />
          </IconButton>
            <p style={{marginTop:"-10px"}}>Live ur lyf  live ur dreams  !!</p>
            </Grid>
          <Typography variant="h5" className={classes.title}>
            Dream Travellers
            
          </Typography>
          
          
          {username !="" ? (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle/>
                </IconButton>
                <Typography style={{marginTop:"-10px"}}>Welcome {username}</Typography>
                 <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={()=>isLoginTrue(settheusername)}>Logout</MenuItem>
              </Menu>
            </div>
          ):<Button variant='contained' onClick={goToLogin}>Login</Button>}
        </Toolbar>
      </AppBar>
    </div>
  );
}
