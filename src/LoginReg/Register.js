import React, { Component } from 'react';
import { Typography, TextField, FormControlLabel, Checkbox } from '@material-ui/core';

import { red } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'


class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fname:'',
            lname:'',
            email:'',
            ph_no:'',
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
                    <Typography variant="h4">Register</Typography>
                    <form style={useStyles.form}>
                        <Grid style={{justifyContent:'center',padding:'20px'}} container spacing={1}>
                            <Grid items xs={12} sm={6} style={useStyles.form}>
                                <TextField autoComplete="fname" name="fname" variant="outlined" label="First Name" autoFocus onChange={onChangeHandling}/>
                            </Grid>
                            <Grid items xs={12} sm={6} style={useStyles.form} >
                                <TextField autoComplete="lname" name="lname" variant="outlined" label="Last Name" onChange={onChangeHandling} />
                            </Grid>
                            <Grid items sm={12} style={useStyles.form} >
                                <TextField autoComplete="email" fullWidth name="email" variant="outlined" label="Email"  onChange={onChangeHandling}/>
                            </Grid>
                            <Grid items sm={12} style={useStyles.form} >
                                <TextField autoComplete="pno" fullWidth name="ph_no" variant="outlined" label="Phone Number" onChange={onChangeHandling}  />
                            </Grid>
                            <Grid items sm={12} style={useStyles.form} >
                                <TextField autoComplete="password" fullWidth name="password" variant="outlined" label="password" onChange={onChangeHandling}/>
                            </Grid>
                            <Grid>
                                <FormControlLabel control={<Checkbox color="primary"/>} label="i accept all the terms and agrements"/>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </div>
        )
    }
}

export default Register