import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import store from '../redux/store';


const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2)
  },
}));

export default function Review(props) {
  const classes = useStyles();
  const nextPage = () => {

    props.nextStep();
  }
  const previousPage = () => {
    props.previousStep();
  }
  const storeValue = store.getState();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>

        <ListItem className={classes.listItem} >
          <ListItemText primary="Price per Night" />
          <Typography variant="body2">{storeValue.price}</Typography>
        </ListItem>
        <ListItem className={classes.listItem} >
          <ListItemText primary="Total No of Night" />
          <Typography variant="body2">{storeValue.totalDays}</Typography>
        </ListItem>
        <ListItem className={classes.listItem} >
          <ListItemText primary="Total person" />
          <Typography variant="body2">{storeValue.totalPeople}</Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Final Price" />
          <Typography variant="subtitle1" className={classes.total}>
            {(storeValue.price/2)*storeValue.totalDays * storeValue.totalPeople}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <div style={{textAlign:"left"}}>
          <Typography variant="h6" className={classes.title}>
           <b> Shipping Address Details</b>
          </Typography>
          <Typography >{storeValue.firstName} &nbsp;{storeValue.lastName}</Typography>
          <Typography >{storeValue.address}</Typography>
          <Typography>{storeValue.city}</Typography>
          <Typography>{storeValue.zip}</Typography>
          <Typography>{storeValue.country}</Typography>
          </div>
        </Grid>
        <Grid item  xs={12} sm={6} >
          <div >
          <Typography variant="h6" className={classes.title}>
            <b>Destination Details</b>
          </Typography>
          <Typography><b>State</b>:-{storeValue.state}</Typography>
          <Typography><b>City</b>:-{storeValue.dcity}</Typography>
          <Typography><b>Total People</b>-{storeValue.totalPeople}</Typography>
          <Typography>{JSON.stringify(storeValue.startDate)}</Typography>
          </div>

        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={previousPage}
          >
            Previous
                  </Button> &nbsp;&nbsp;&nbsp;
                  <Button
            variant="contained"
            color="primary"
            onClick={nextPage}
          >
            Submit
                  </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}