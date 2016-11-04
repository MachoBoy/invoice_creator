import React from 'react'
import styles from '../styles/style.css'
import { IconMenu, MenuItem, IconButton } from 'material-ui'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

export default class SerivceForm extends React.Component {
    render() {
        return(
            <div className={styles.formServiceList}>
                <table className={styles.serviceList} onClick={this.props.onClick}>
                    <tbody>
                        <tr>
                            <td>{this.props.serviceData.description}</td>
                            <td>{this.props.serviceData.tax}</td>
                            <td>{this.props.serviceData.amount}</td>
                            <td>
                                <div><IconMenu
                                      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                                      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                                      targetOrigin={{horizontal: 'left', vertical: 'top'}}
                                    >
                                      <MenuItem primaryText="Edit" onItemTouchTap=""/>
                                      <MenuItem primaryText="Delete" />
                                </IconMenu></div>
                            </td>
                        </tr>
                    </tbody>
                </table>


            </div>

        );
    }
}
