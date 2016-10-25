import React from 'react'
import { AppBar } from 'material-ui'
import { TextField } from 'material-ui'
import InvoiceCreate from './InvoiceCreate'
import SideMenu from './SideMenu'


export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
        };
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
                    title="Invoice & Receipt Printer"
                    titleStyle={{textAlign: "center"}}
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.toggleDrawer.bind(this)}

                />
                <SideMenu
                    open={this.state.open}
                    onToggleDrawer={this.toggleDrawer.bind(this)}
                />
            <div>
                <h1>Invoice</h1>
                <TextField
                />
            </div>
            </div>

        );
    }
}
