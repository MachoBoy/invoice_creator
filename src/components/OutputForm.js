import React from 'react';
import styles from '../styles/style.css'

export default class OutputForm extends React.Component {
    render() {
        let date = this.props.date;
        return(
            <div className={styles.form}>
                    <div className={styles.formHeader}>
                        <div><h1>{this.props.companyName}</h1></div>
                        <div>{this.props.street}</div>
                        <div>{this.props.cityStatePostal}</div>
                        <div>{this.props.phone}</div>
                    </div>

                    <div className={styles.formNumber}>
                        <div><h4>Invoice</h4></div>
                        <div>{this.props.invoiceNumber}</div>
                        <div>{this.props.date}</div>
                    </div>

                    <div className={styles.formRecipient}>
                        <div>{this.props.billCompanyName}</div>
                        <div>{this.props.billStreet}</div>
                        <div>{this.props.billCityStatePostal}</div>
                        <div>{this.props.billPhone}</div>
                    </div>
                    <div>

                    </div>

                    <div className={styles.formServices}>
                        <table className={styles.services}>
                            <tbody>
                                <tr>
                                    <th>Services</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <th>Description</th>
                                    <th>Tax</th>
                                    <th>Amount</th>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>{this.props.description}</td>
                                    <td>{this.props.tax}</td>
                                    <td>{this.props.amount}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            </div>
        );
    }
}
