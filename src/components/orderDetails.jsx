import React, { Component } from 'react';
class OrderDetails extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className="OrderDetails">
                    <div className="card">
                        <div className="card-header">
                            Order details
                        </div>
                        <div className="card-body">
                            <table>
                                <tbody><tr>
                                    <td>Total Due:</td>
                                    <td>$8,750</td>
                                </tr>
                                    <tr>
                                        <td>Bank Name:</td>
                                        <td>Profit Bank Europe</td>
                                    </tr>
                                    <tr>
                                        <td>Country:</td>
                                        <td>United Kingdom</td>
                                    </tr>
                                    <tr>
                                        <td>City:</td>
                                        <td>London</td>
                                    </tr>
                                    <tr>
                                        <td>Address:</td>
                                        <td>3 Goodman street</td>
                                    </tr>
                                    <tr>
                                        <td>IBAN:</td>
                                        <td>KFHT32565523921540571</td>
                                    </tr>
                                    <tr>
                                        <td>SWIFT Code:</td>
                                        <td>BPT4E</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <div className="card-header">
                            Order details
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th >Item</th>
                                    <th >Amount</th>
                                    <th >Item price</th>
                                    <th >Sum</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Item name</td>
                                    <td>2</td>
                                    <td>10.00 €</td>
                                    <td>20.00€</td>
                                </tr>
                            </tbody>
                        </table>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">Next</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderDetails;