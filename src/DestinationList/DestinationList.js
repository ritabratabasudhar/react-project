import React, { Component } from 'react';
import data from'./DestinationList.json'
import {Grid,List,ListItem, Typography, Paper, Modal, Divider} from '@material-ui/core'
import history from '../History/history'
import store from '../redux/store'
import SimpleModal from './modal';
class DestinationList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            displayCity:[],
            show:false,
            State:"",
            modalOn:false,
            selectedcity:"",
            selectedPrice:""
         }
    }
    
    render() { 
       const displayDestinationCity=(place,state)=>{
           //console.log(state)
            this.setState({displayCity:place,State:state,show:true})
          }
          const displayPrice=(price,city)=>{
              this.setState({modalOn:true,selectedPrice:price,selectedcity:city})
             }
          const cancelModal=()=>this.setState({modalOn:false})
          const moveToNextpage=()=>{
              store.getState().email===""?
               alert("please login")
              :
               history.push('/react-project/checkout')
              store.dispatch({type:'Destination_Details',state:this.state.State,
              price:this.state.selectedPrice,city:this.state.selectedcity});
             // console.log(store.getState())
          }

          
        return ( <>
        <SimpleModal check={this.state.modalOn} next={moveToNextpage} cancel={cancelModal}/>
        <Grid container >
            <Grid item sm={2} style={{height:"590px",overflow:'auto', marginTop:"10px",color:"black"}}>
            <Typography>Select You State</Typography><br></br>
            <Divider/>
            {data.map((i)=>
            <List component="nav">
            <ListItem button onClick={()=>displayDestinationCity(i.place,i.state)}>
             {i.state}
             </ListItem>
             </List>
              )}
                
            </Grid>
            <Grid item sm={10} style={{height:"584px",overflow:'auto',padding:"10px"}}>
            <Grid container spacing={2}>
                {this.state.show===false?
                <Typography variant="h5" style={{margin:"50px"}}>
                    Please select the <b>State</b>  and then your preffered destination
                </Typography>
                :
            this.state.displayCity.map((place)=>
             <Grid item sm={6}>
            <Paper elevation={8} style={{height:"310px",width:"380px",marginLeft:"50px",textAlign:"left"}}
             onClick={()=>displayPrice(place.price,place.city)}>
            <img style={{height:"240px",width:"380px"}} src={place.img}/>
                <Typography variant="h6" style={{marginLeft:"20px"}}>
                 {place.city}
                <br></br>
                Couple Price is <b>{place.price}</b> /- per night</Typography>
        
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