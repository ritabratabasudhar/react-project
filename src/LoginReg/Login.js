import React, { Component } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import { LoginRegisterContext } from '../Context/LoginRegContext'
import store from '../redux/store';

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            isLoginTrue: true

        }
    }
     submitData=(settheusername)=>{
        const storevalue=store.getState();
        console.log(storevalue)
        if(this.state.email===storevalue.email && this.state.password==storevalue.password)
        {
            alert("welcome");
            settheusername(this.state.email);
        }
        else{
            alert("wrong credentials")
        }
    }
    

    render() {
        const useStyles =
        {
            form: {
                width: '100%', // Fix IE 11 issue.
                backgroundColor: red,
                marginTop: '20px',
            },
            grid: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '10px',
            }
        }
        const onChangeHandling = (e) => {
            this.setState({ [e.target.name]: e.target.value })
        }
        const storevalue=store.getState();
            return (

            <div style={useStyles.grid} >
                
                <LoginRegisterContext.Consumer>{(context) => {
                    const { onChangeLogin,settheusername } = context;
                    return(
                    <Container component="main" maxWidth="xs">
                        <Typography variant="h4">Login</Typography>
                    
                        <form style={useStyles.form}>
                            <Grid style={{ justifyContent: 'center', padding: '20px' }} container spacing={2}>

                                <Grid items style={useStyles.form} >
                                    <TextField autoComplete="email" fullWidth name="email" variant="outlined" label="Email" autoFocus onChange={onChangeHandling} />
                                </Grid>

                                <Grid items style={useStyles.form} >
                                    <TextField autoComplete="password" fullWidth name="password" variant="outlined" label="password" onChange={onChangeHandling} />
                                </Grid>
                                <Grid items style={useStyles.form}>
                                    <Button variant="contained" color="primary" onClick={()=>this.submitData(settheusername)} >Login</Button>  &nbsp;
                             <Button color="secondary" onClick={onChangeLogin}>Don't have an account? Create</Button>
                                </Grid>

                            </Grid>
                        </form>
                    </Container>)
                }}
                </LoginRegisterContext.Consumer>
            </div>
        )
    }
}

export default Login