import React, { Component } from 'react';
import {  Typography, TextField} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'


class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email:'',
            password:''

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
                flexDirection:'column',
                alignItems:'center',
                marginTop: '10px',
            }
        }
        const onChangeHandling=(e)=>{
            this.setState({[e.target.name]:e.target.value},()=>console.log(this.state))
        }


        return (

            <div style={useStyles.grid} >
                <Container component="main" maxWidth="xs">
                    <Typography variant="h4">Login</Typography>
                    <form style={useStyles.form}>
                        <Grid style={{justifyContent:'center',padding:'20px'}} container spacing={2}>
                           
                            <Grid items  style={useStyles.form} >
                                <TextField autoComplete="email" fullWidth name="email" variant="outlined" label="Email" autoFocus onChange={onChangeHandling} />
                            </Grid>
                            
                            <Grid items  style={useStyles.form} >
                                <TextField autoComplete="password" fullWidth name="password" variant="outlined" label="password" onChange={onChangeHandling} />
                            </Grid>
                            
                        </Grid>
                    </form>
                </Container>
            </div>
        )
    }
}

export default Login