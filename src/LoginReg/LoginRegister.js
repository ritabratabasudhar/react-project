import React, { Component, Fragment } from 'react'
import Button from '@material-ui/core/Button';
import Login from './Login';
import Register from './Register';


class LoginRegister extends Component {
    constructor(props){
        super(props);
        this.state={
            isLoginTrue:true
        }
    }

    render() {
    const onClickButtonchanging=()=>{
        //console.log('hello')
        this.setState({isLoginTrue:!this.state.isLoginTrue})
    }

        return (
            <Fragment>
                {this.state.isLoginTrue===true?<div>
                   <div><Login/></div> <br></br>
                    <Button variant="contained" color="primary">Login</Button>  &nbsp;
                <Button color="secondary" onClick={onClickButtonchanging}>Don't have an account? Create it</Button></div>
                :
                <div>
                    <div style={{justifyContent:'center'}}><Register/></div><br></br>
                <Button variant="contained" color="primary">Register</Button> &nbsp;
                <Button color="secondary" onClick={onClickButtonchanging}>Already have an account? Sign it</Button>
                </div>
                }
                
                
            </Fragment>
        )
    }
}
export default LoginRegister