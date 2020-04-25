import React, { Component } from 'react';
class TableBody extends Component {
    state = {}
    render() {

        return (
            <tbody>
                {data.map(item => (
                    <tr>
                        <td><Link className="nav-item nav-link" to="/order-details">{item.orderId}</Link></td>
                        <td><NavLink>{item.customer.name}</NavLink></td>
                        <td>{item.sum}</td>
                        <td>{item.dueDate}</td>
                        <td>{item.status}</td>
                    </tr>)
                )}
            </tbody>);
    }
}

export default TableBody;