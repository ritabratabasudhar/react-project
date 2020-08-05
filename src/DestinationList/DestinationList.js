import React, { Component } from 'react';
import data from'./DestinationList.json'
import {Grid,List,ListItem, Typography, Paper} from '@material-ui/core'
class DestinationList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            displayCity:[]
         }
    }
    
    render() { 
       const displayDestinationCity=(place)=>{
           //console.log(place)
            this.setState({displayCity:place})
          }
          const displayPrice=(i)=>{
              //console.log(i);
          }
        return ( <>
        <Grid container >
            <Grid item sm={2} style={{height:"584px",overflow:'auto'}}>
            <Typography>Select You State</Typography>
            {data.map((i)=>
            <List component="nav">
            <ListItem button onClick={()=>displayDestinationCity(i.place,i.price)}>
             {i.state}
             </ListItem>
             </List>
              )}
                
            </Grid>
            <Grid item sm={10} style={{height:"584px",overflow:'auto',padding:"10px"}}>
            <Grid container spacing={2}>
            {this.state.displayCity.map((place,i)=>
             <Grid item sm={6}>
            <Paper style={{height:"250px",width:"250px",marginLeft:"100px"}} onClick={()=>displayPrice(place.price)}>
                {place.city}<br></br>
                {place.price}
            </Paper>
            </Grid>
            
            )}
            </Grid>
            </Grid>
        </Grid>
        </>
         );
    }
}
 
export default DestinationList;