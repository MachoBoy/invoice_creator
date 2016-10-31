import React from 'react'
import styles from '../styles/style.css'

export default class SerivceForm extends React.Component {
    render() {
        return(
            <div className={styles.formServiceList}>
                <table className={styles.serviceList}>
                    <tbody>
                        <tr>
                            <td>{this.props.serviceData.description}</td>
                            <td>{this.props.serviceData.tax}</td>
                            <td>{this.props.serviceData.amount}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
