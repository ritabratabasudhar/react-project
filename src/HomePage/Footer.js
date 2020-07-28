import React, { Component } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

class Footer extends Component {
    
    render() { 
        return ( 
            <div style={{marginTop:'20px'}}>
                <Grid container spacing={2} style={{padding:'5px',backgroundColor:'rgb(61, 99, 155)'}}>
                    <Grid item xs={4}>
                        <Paper elevation={3}>
                        <div style={{padding:'10px',textAlign:'left',height:"250px"}}>
                            <h3>Menu</h3>
                            <Typography>About us</Typography>
                            <Typography>Testemonial</Typography>
                            <Typography>Contact us</Typography>
                            <Typography>Rent a car</Typography>
                            <Typography>Terms And Conditions</Typography>
                            <Typography>Privacy Policy</Typography>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper elevation={3}>
                        <div style={{padding:'10px',textAlign:'left',height:"250px"}}>
                            <h3>Best Tour</h3>
                            <Typography>Heavenly Kashmir</Typography>
                            <Typography>Romantic Shimla</Typography>
                            <Typography>Fort kingdom Rajasthan</Typography>
                            <Typography>Holy Rameswaram</Typography>
                            <Typography>Fun Goa</Typography>
                            <Typography>Magestic NorthEast</Typography></div>
                        </Paper>
                    </Grid>
                    
                    <Grid item xs={4}>
                        <Paper elevation={3}>
                        <div style={{padding:'10px',textAlign:'left',height:"250px"}}>                      
                              <h3>Contact Info</h3>
                            <Typography>
                                <b>Dream Travellers</b>
                                Dum Dum <br></br>
                                Kolkata-700055<br></br>
                                <b>Phone no</b>: 8659058748<br></br>
                                <b>Email id</b>: DreamTravallers@gmail.com
                            </Typography></div>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{backgroundColor:"rgb(114, 107, 107)", color:'black',marginTop:'-20px'}}>
                    <p>Copyright Dream Travellers || All Rights Reserved </p>
                </Grid>
            </div>
         );
    }
}
 
export default Footer;