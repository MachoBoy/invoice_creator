import React from 'react';
import { Drawer } from 'material-ui';
import { TextField } from 'material-ui';
import { DatePicker } from 'material-ui';

export default class SideMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            open: false,
            invoiceData: [{
                invoiceNumber: '',
                date: '',
                companyName:'',
                street: '',
                city:'',
                state:'',
                postalCode:'',
                phone:'',
                billCompanyName:'',
                billStreet: '',
                billCity:'',
                billState:'',
                billPostalCode:'',
                billPhone:'',
                description: '',
                amount: '',
            }]
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(e){
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState)
    }

    onSubmit(output){
        this.setState({
            value: output
        });
    }

    render() {
        return(
            <div>
                <Drawer
                    width={500}
                    open={this.props.open}
                    onRequestChange={(open) => this.setState({open})}
                    openSecondary={true}
                >
                <div>
                    <form onSubmit={this.onSubmit}>
                        <TextField
                            floatingLabelText="Invoice Number"
                            name="invoiceNumber"
                            style={styles.mediumWidth}
                            value={this.state.invoiceNumber}
                            onChange={this.handleChange}
                        />

                        <DatePicker
                            hintText="Date"
                            name="date"
                            autoOk={true}
                            textFieldStyle={{width:160, margin:10}}
                        /><br/>
                        <TextField
                            floatingLabelText="Company Name"
                            name="companyName"
                            style={styles.fullWidth}
                            value={this.state.companyName}
                            onChange={this.handleChange}
                        /><br/>
                        <TextField
                            floatingLabelText="Street Address"
                            style={styles.fullWidth}
                            value={this.state.street}
                            onChange={this.handleChange}
                        /><br/>
                        <TextField
                            floatingLabelText="City, State, Postal Code"
                            style={styles.fullWidth}
                            onChange={this.handleChange}
                        />
                        <TextField
                            floatingLabelText="Phone"
                            style={styles.smallWidth}
                            onChange={this.handleChange}
                        /><br/>

                        <h3>Bill To</h3>
                        <TextField
                            floatingLabelText="Name"
                            style={styles.smallWidth}
                            onChange={this.handleChange}
                        /><br/>
                        <TextField
                            floatingLabelText="Company Name"
                            style={styles.fullWidth}
                            onChange={this.handleChange}
                        /><br/>
                        <TextField
                            floatingLabelText="Stree Address"
                            style={styles.mediumWidth}
                            onChange={this.handleChange}
                        />
                        <TextField
                            floatingLabelText="City, State, Zip"
                            style={styles.fullWidth}
                            onChange={this.handleChange}
                        /><br/>
                        <TextField
                            floatingLabelText="Phone"
                            style={styles.smallWidth}
                            onChange={this.handleChange}
                        />
                        <TextField
                            floatingLabelText="Email"
                            style={styles.mediumWidth}
                            onChange={this.handleChange}
                        /><br/>

                        <h3>Description / Amount</h3>
                        <TextField
                            floatingLabelText="Description"
                            style={styles.fullWidth}
                            onChange={this.handleChange}
                        />
                        <TextField
                            floatingLabelText="Amount"
                            style={styles.smallWidth}
                            onChange={this.handleChange}
                        /><br/>
                    </form>
                </div>
                </Drawer>
            </div>
        );
    }
}

const styles={
    button:{
        float: 'right',
    },
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
}
