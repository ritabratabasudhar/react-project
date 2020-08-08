import store from "../redux/store";
import React, { Component } from 'react';
import { Typography } from "@material-ui/core";
class Profile extends Component {
    render() {
        const storeValue = store.getState();
        return (
        <div style={{ textAlign: "left" ,marginLeft:"100px"}}>
            <Typography variant="h3">Account Details</Typography>
            <br></br><br></br>
            <Typography>First Name:- {storeValue.fname}</Typography>
            <Typography>Last Name:- {storeValue.lname}</Typography>
            <Typography>Email:- {storeValue.email}</Typography>
            <Typography>Phone Number:-{storeValue.ph_no}</Typography>

        </div>);
    }
}

export default Profile;