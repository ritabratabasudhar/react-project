import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker,} from '@material-ui/pickers';
import  store  from '../redux/store';
import { DatePicker } from '@material-ui/pickers'

export default class AddressForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            StartDate: new Date(),
            firstName:"",
            lastName:"",
            city:"",
            zip:"",
            totalPeople:"",
            address:"",
            country:"",
            totalDays:"",
            state:""

        }
    }
   

    render() {
        const handleSaveData=(e)=>{
            this.setState({[e.target.name]:e.target.value},()=>console.log(this.state));
           }
        const startDate=(date)=>{
            this.setState({StartDate:date})
            console.log(this.state.StartDate);

        }     

        const saveTheDetails = () => 
        {
            const{startDate,firstName,lastName,city,zip,totalPeople,address,country,totalDays,state}=this.state;
            store.dispatch({type:'BOOKING_DETAILS',startDate:startDate,firstName:firstName,lastName:lastName,
            city:city,zip:zip,totalPeople:totalPeople,address:address,country:country,totalDays:totalDays
            })
            this.props.nextStep();
        }
        return (
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    Booking Details
      </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="First name"
                            fullWidth
                            autoComplete="given-name"
                            onChange={handleSaveData}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="lastName"
                            name="lastName"
                            label="Last name"
                            fullWidth
                            autoComplete="family-name"
                            onChange={handleSaveData}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="address1"
                            name="address"
                            label="Address "
                            fullWidth
                            autoComplete="shipping address-line1"
                            onChange={handleSaveData}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="address2"
                            name="totalPeople"
                            label="Total No People"
                            fullWidth
                            autoComplete="shipping address-line2"
                            onChange={handleSaveData}
                        />
                    </Grid>
                    <Grid xs={12} sm={6}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            name="startDate"
                            label="Starting Journey Date"
                            format="dd/MM/yyyy"
                            value={this.state.StartDate}
                            onChange={startDate}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid xs={12} sm={6} style={{paddingTop:"15px"}}>
                    <TextField
                            id="address2"
                            name="totalDays"
                            label="totalDays"
                            fullWidth
                            autoComplete="total days"
                            onChange={handleSaveData}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="city"
                            name="city"
                            label="City"
                            fullWidth
                            autoComplete="shipping address-level2"
                            onChange={handleSaveData}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="state" name="state" label="State/Province/Region" 
                        onChange={handleSaveData} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="zip"
                            name="zip"
                            label="Zip / Postal code"
                            fullWidth
                            autoComplete="shipping postal-code"
                            onChange={handleSaveData}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="country"
                            name="country"
                            label="Country"
                            fullWidth
                            autoComplete="shipping country"
                            onChange={handleSaveData}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                            label="Use this address for payment details"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={saveTheDetails}
                        >
                            Next
                  </Button>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}
