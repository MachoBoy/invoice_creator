import React from 'react';
import { Drawer } from 'material-ui';
import { FlatButton } from 'material-ui';
import InvoiceCreate from './InvoiceCreate';

export default class SideMenu extends React.Component {
    constructor(props) {
        super(props);

    }

    // handleClose() {
    //     this.setState({
    //         {this.state.open}: false,
    //     })
    //     console.log("im clicked");
    // }

    render() {
        return(
            <div>
                <Drawer
                    width={500}
                    open={this.props.open}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <FlatButton
                        label="X"
                        style={styles.button}
                    />
                    <InvoiceCreate/>
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
