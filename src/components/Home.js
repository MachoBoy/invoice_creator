import React from 'react'
import update from 'react-addons-update'
import { AppBar } from 'material-ui'
import { TextField } from 'material-ui'
import SideMenu from './SideMenu'


export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedKey: -1,
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

        };
    }


    handleClick(key) {
    	this.setState({
    		selectedKey: key
    	});
    	console.log(key, 'is selected');
    }

    toggleDrawer(){
        this.setState({
            open: !this.state.open
        });
    }

    handleEdit(data) {
        this.setState({
            invoiceData: update(this.state.invoiceData,
            {
                [this.state.selectedKey]: {
                    invoiceNumber: {$set: data},
                }
            })
        })
    }

    render() {
        return(
            <div>
                <AppBar
                    title="Invoice & Receipt Printer"
                    titleStyle={{textAlign: "center"}}
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.toggleDrawer.bind(this)}

                />
                <SideMenu
                    open={this.state.open}
                    onToggleDrawer={this.toggleDrawer.bind(this)}
                    onCreate={this.handleEdit}

                />
            <div>
                <h1>start</h1>
                <input>{this.props.invoiceNumber}</input>
            </div>
            </div>

        );
    }
}
