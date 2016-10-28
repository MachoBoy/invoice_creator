import React from 'react'
import { AppBar, TextField, Drawer, DatePicker, Divider, Badge } from 'material-ui'
import update from 'react-addons-update';
import OutputForm from './OutputForm'
import Services from './Services'

export default class Home extends React.Component {
    constructor(props){
        super(props);
        const date = new Date();
        this.state = {
            selectedKey: -1,
            open: true,
            invoiceNumber: '',
            date: date,
            companyName:'',
            street: '',
            cityStatePostal:'',
            phone:'',
            billCompanyName:'',
            billStreet: '',
            billCityStatePostal: '',
            billPhone:'',
            services: [{
                description: '',
                tax: '5',
                amount: '',
            }],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
    }

    handleChange(e){
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState)
    }

    handleDate(event, setDate) {
        this.setState({
            date: setDate,
        });
    }

    handleCreate(services) {
    	this.setState({
    		services: update(this.state.services, { $push: [services] })
    	});
    }

    toggleDrawer(){
        this.setState({
            open: !this.state.open
        });
    }

    render() {

        return(
            <div>
                <AppBar
                    title="Invoice Printer"
                    titleStyle={{textAlign: "center"}}
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.toggleDrawer.bind(this)}
                />

                <div>
                    <OutputForm
                        invoiceNumber={this.state.invoiceNumber}
                        date={this.state.date.toString().substring(4, 15)}
                        companyName={this.state.companyName}
                        street={this.state.street}
                        cityStatePostal={this.state.cityStatePostal}
                        phone={this.state.phone}
                        billCompanyName={this.state.billCompanyName}
                        billStreet={this.state.billStreet}
                        billCityStatePostal={this.state.billCityStatePostal}
                        billPhone={this.state.billPhone}
                        description={this.state.description}
                        tax={this.state.services.tax}
                        amount={this.state.amount}
                    />
                </div>

                <div>
                    <Drawer
                        width={380}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({open})}
                        openSecondary={true}
                    >
                    <div>
                            <TextField
                                floatingLabelText="Invoice Number"
                                name="invoiceNumber"
                                style={styles.mediumWidth}
                                underlineShow={false}

                                value={this.state.invoiceNumber}
                                onChange={this.handleChange}
                            /><Divider />

                            <DatePicker
                                hintText="Date"
                                name="date"
                                underlineShow={false}
                                firstDayOfWeek={0}
                                autoOk={true}
                                textFieldStyle={{width:160, margin:10}}
                                defaultDate={this.state.date}
                                onChange={this.handleDate}
                            /><Divider />

                            <TextField
                                floatingLabelText="Company Name"
                                name="companyName"
                                style={styles.fullWidth}
                                underlineShow={false}
                                value={this.state.companyName}
                                onChange={this.handleChange}
                            /><Divider />

                            <TextField
                                floatingLabelText="Street Address"
                                name="street"
                                style={styles.fullWidth}
                                underlineShow={false}
                                value={this.state.street}
                                onChange={this.handleChange}
                            /><Divider />

                            <TextField
                                floatingLabelText="City, State, Postal Code"
                                name="cityStatePostal"
                                style={styles.fullWidth}
                                underlineShow={false}
                                value={this.state.cityStatePostal}
                                onChange={this.handleChange}
                            /><Divider />

                            <TextField
                                floatingLabelText="Phone"
                                name="phone"
                                style={styles.smallWidth}
                                underlineShow={false}
                                value={this.state.phone}
                                onChange={this.handleChange}
                            /><br/>


                        <Badge style={{fontSize: 30, texAlign: 'center'}} badgeContent="">Recipient</Badge><br/>
                            <TextField
                                floatingLabelText="Comapny Name"
                                name="billCompanyName"
                                style={styles.smallWidth}
                                underlineShow={false}
                                value={this.state.billCompanyName}
                                onChange={this.handleChange}
                            /><Divider />

                            <TextField
                                floatingLabelText="Stree Address"
                                name="billStreet"
                                style={styles.mediumWidth}
                                underlineShow={false}
                                value={this.state.billStreet}
                                onChange={this.handleChange}
                            /><Divider />

                            <TextField
                                floatingLabelText="City, State, Zip"
                                name="billCityStatePostal"
                                style={styles.fullWidth}
                                underlineShow={false}
                                value={this.state.billCityStatePostal}
                                onChange={this.handleChange}
                            /><Divider />

                            <TextField
                                floatingLabelText="Phone"
                                name="billPhone"
                                style={styles.smallWidth}
                                underlineShow={false}
                                value={this.state.billPhone}
                                onChange={this.handleChange}
                            /><br/>
                        <Services
                            oncreate={this.handleCreate}/>
                    </div>
                    </Drawer>
                </div>

            </div>

        );
    }
}

const styles={
    smallWidth: {
        width: 160,
        margin: 10,
    },
    mediumWidth: {
        width: 180,
        margin: 10,
    },
    fullWidth: {
        width: 250,
        margin: 10,
    },
}
