import React from 'react';
import { AppBar } from 'material-ui';
import SideMenu from './SideMenu';

export default class Home extends React.Component {

    render() {
        const AppBarTitle = () => (
          <AppBar
            title="Invoice & Receipt Printer"
            titleStyle={{textAlign: "center"}}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
        );
        return(
            <div>
                <AppBarTitle/>
                <SideMenu />
            </div>
        );
    }
}
