import React from 'react'
import {
    AppBar,
    TextField,
    Drawer,
    DatePicker,
    Divider,
    Badge,
    Paper } from 'material-ui'
import update from 'react-addons-update';
import OutputForm from './OutputForm'
import Services from './Services'
import ServiceForm from './ServiceForm'

import { connect } from 'react-redux'
import * as action from '../actions'


class Home extends React.Component {
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
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(key) {
        this.setState({
            selectedKey: key,
        })
        console.log(key, 'is selected');
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
    //
    // handleCreate(services) {
    // 	this.setState({
    // 		serviceData: update(this.state.serviceData, { $push: [services] })
    // 	});
    //     console.log(this.state.serviceData);
    // }

    // handleEdit(description, tax, amount) {
    //     this.setState({
    //         serviceData: update(this.state.serviceData,
    //         {
    //             [this.state.selectedKey]: {
    //                 description: {$set: description},
    //                 tax: {$set: tax},
    //                 amount: {$set: amount}
    //             }
    //         })
    //     });
    //     console.log("handleEdit");
    // }

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
                    <Paper zDepth={2} style={{width: '70%'}}>
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
                        serviceData={this.state.serviceData}
                    />
                   
                    </Paper>
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
                            id={this.props.id}
                            description={this.props.description}
                            tax={this.props.tax}
                            amount={this.props.amount}
                            onCreate={this.props.handleCreate}
                        />
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

const mapStateToProps = (state) => {
    return {
        serviceData: state.services.serviceData,
        id: state.services.id,
        descrition: state.services.descrition,
        tax: state.services.tax,
        amount: state.services.amount
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleCreate: (services) => { dispatch(action.create(services)) },
        handleEdit: () => { dispatch(action.edit(id)) },
        handleRemove: () => { dispatch(action.remove(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
