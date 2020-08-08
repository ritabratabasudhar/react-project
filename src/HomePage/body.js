import React, { Component } from 'react';
import { Typography, Button } from '@material-ui/core';
import history from '../History/history';

function Body(params) {
    return (<div>
        <div>
        <Button color="primary" variant="contained" style={{width:"500px",height:"50px",
            padding:'2px',borderRadius:'20px', marginTop:"5px"}}
            onClick={()=>history.push('/react-project/destinationList')}
            >
            
              Let's Choose your dream destination
              </Button>
        </div>
        <div>
            <Typography variant="h4"><b><u>Welcome to ur Dream Travellers</u></b></Typography>
        </div>
        <div style={{color:'black'}}>
            <p style={{textAlign:'left',margin:'5px'}}> We all unanimously agree that<b> "The best Stories are found between the pages of the Passport” </b>and that’s what
           we at Travelsite India try to create for you, the stories you would cherish for the rest of your lives.<br></br>
           <br></br>
           Hola Folks! Greetings on arriving at the place that takes you to the untimed journey that indeed becomes the
           food for the soul in the most nutrious way. As it is said,<b> “Live with no excuses and travel with no regrets”
           </b> We at Travelsite India, a Travel Management Agency provides you with customized tour packages for worth
           visiting destinations of Asia that suits every vacationer. Based in Delhi, the Capital of India, we take care
           of all the travel essentials of a traveler, who wishes to make the best and unforgettable journey of his life.
           Providing you with the tailor made tour program with the outstanding and superlative services with the
            destinations that are untarnished in India and across Asia.</p></div>
    </div>)

}
export default Body