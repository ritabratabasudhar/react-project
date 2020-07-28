import store from "../redux/store";
import React, { Component } from 'react';
class Profile extends Component {
    render() { 
        const storeValue =store.getState();
        return ( <div>

        </div> );
    }
}
 
export default Profile;