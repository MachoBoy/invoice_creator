import React from 'react';
import { Drawer } from 'material-ui';
import InvoiceCreate from './InvoiceCreate';

export default class SideMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            open: false,
        }
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
                    <InvoiceCreate
                        invoiceNumber={this.props.invoiceNumber}/>
                </Drawer>
            </div>
        );
    }
}

const styles={
    button:{
        float: 'right',
    }
}
