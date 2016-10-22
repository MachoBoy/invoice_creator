import React from 'react';
import { AutoComplete } from 'material-ui';

import InvoiceCreate from './InvoiceCreate';

export default class SideMenu extends React.Component {
    render() {
        return(
            <div>
                <InvoiceCreate/>
            </div>
        );
    }
}
