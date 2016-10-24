import React from 'react';
import { TextField } from 'material-ui';
import { DatePicker } from 'material-ui';


export default class InvoiceCreate extends React.Component {
    constructor(props){
        super(props);
        this.state={
            invoiceInput:{
                invoiceNumber: '',
                date: '',
                userInfo: {
                    yourCompanyName:'',
                    street: '',
                    city:'',
                    state:'',
                    zip:'',
                    phone:''
                },
                billInfo: {
                    billCompanyName:'',
                    billStreet: '',
                    billCity:'',
                    billState:'',
                    billZip:'',
                    billPhone:''
                },
                description: '',
                amount: ''
            }
        };
        //this.handleInvoiceChange = this.handleInvoiceChange.bind(this);
    }


    render() {
        return(
            <div>
                    <TextField
                        floatingLabelText="Invoice Number"
                        style={styles.mediumWidth}
                        value={this.state.invoiceNumber}
                    />
                    <DatePicker
                        hintText="Date"
                        autoOk={true}
                        value={this.state.date}
                        textFieldStyle={{width:160, margin:10}}
                    /><br/>
                    <TextField
                        floatingLabelText="Company Name"
                        style={styles.fullWidth}
                    /><br/>
                    <TextField
                        floatingLabelText="Street Address"
                        style={styles.mediumWidth}
                    />
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
                        style={styles.smallWidth}
                    /><br/>
                    <TextField
                        floatingLabelText="Company Name"
                        style={styles.fullWidth}
                    /><br/>
                    <TextField
                        floatingLabelText="Stree Address"
                        style={styles.mediumWidth}
                    />
                    <TextField
                        floatingLabelText="City, State, Zip"
                        style={styles.fullWidth}
                    /><br/>
                    <TextField
                        floatingLabelText="Phone"
                        style={styles.smallWidth}
                    />
                    <TextField
                        floatingLabelText="Email"
                        style={styles.mediumWidth}
                    /><br/>
                <h3>Description / Amount</h3>
                    <TextField
                        floatingLabelText="Description"
                        style={styles.fullWidth}
                    />
                    <TextField
                        floatingLabelText="Amount"
                        style={styles.smallWidth}
                    /><br/>
            </div>
        );
    }
}

const styles = {
    smallWidth: {
        width: 140,
        margin: 10,
    },
    mediumWidth: {
        width: 160,
        margin: 10,
    },
    fullWidth: {
        width: 230,
        margin: 10,
    },
};
