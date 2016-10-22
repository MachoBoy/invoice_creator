import React from 'react';
import { TextField } from 'material-ui';
import { DatePicker } from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

export default class InvoiceCreate extends React.Component {
    constructor(props){
        super(props);
        this.state={
            invoiceInput:{
                invoiceNumber: '',
                date: '',
                yourInformation: [{
                    yourCompanyName:'',
                    street: '',
                    city:'',
                    state:'',
                    zip:'',
                    phone:''
                }],
                billInformation: [{
                    billCompanyName:'',
                    billStreet: '',
                    billCity:'',
                    billState:'',
                    billZip:'',
                    billPhone:''
                }],
                Description: '',
                amount: ''
            }
        };
        //this.handleInvoiceChange = this.handleInvoiceChange.bind(this);
        this.
    }


    render() {
        const styles = {
            smallWidth: {
                width: 140,
            },
            mediumWidth: {
                width: 160,
            },
            fullWidth: {
                width: 180,
            },
        };

        return(
            <div>
                    <TextField
                        floatingLabelText="Invoice Number"
                        style={styles.smallWidth}
                        value={this.state.invoiceNumber}
                    />
                    <DatePicker
                        hintText="Date"
                        autoOk={true}
                        value={this.state.date}
                        textFieldStyle={{width:140}}
                    /><br/>
                    <TextField
                        floatingLabelText="Company Name"
                        style={styles.smallWidth}
                    /><br/>
                    <TextField
                        floatingLabelText="Street Address"
                        style={styles.mediumWidth}
                    /><br/>
                    <TextField
                        floatingLabelText="City, State, Zip"
                        style={styles.fullWidth}
                    /><br/>
                    <TextField
                        floatingLabelText="Phone"
                        style={styles.smallWidth}
                    /><br/>
                <h3>Bill To</h3>
                    <TextField
                        floatingLabelText="Name"
                    /><br/>
                    <TextField
                        floatingLabelText="Company Name"
                    /><br/>
                    <TextField
                        floatingLabelText="Stree Address"
                    /><br/>
                    <TextField
                        floatingLabelText="City, State, Zip"
                    /><br/>
                    <TextField
                        floatingLabelText="Phone"
                    /><br/>
                    <TextField
                        floatingLabelText="Email"
                    /><br/>
                <h3>Description / Amount</h3>
                    <TextField
                        floatingLabelText="Description"
                    />
                    <TextField
                        floatingLabelText="Amount"
                    /><br/>
            </div>
        );
    }
}
