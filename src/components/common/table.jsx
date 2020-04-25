import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import TableHeader from './tableHeader';

class Table extends Component {
    render() {
        const { data, selectFilter, columns } = this.props;
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg">
                    <div className=" navbar-collapse">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

                            <select className="selectpicker" data-live-search="true">
                                <option data-tokens="ketchup mustard">Hot Dog, Fries and a Soda</option>
                                <option data-tokens="mustard">Burger, Shake and a Smile</option>
                                <option data-tokens="frosting">Sugar, Spice and all things nice</option>
                            </select>

                        </ul>
                        <ul className="mr-sm-2">
                            <input className="form-control " placeholder="Search"></input>
                        </ul>
                    </div>
                </nav>
                <table className="table">

                    <TableHeader columns={columns}></TableHeader>
                    <tbody>
                        {data.map(item => (
                            <tr>
                                <td><NavLink to="/order-details">{item.orderId}</NavLink></td>
                                <td>{item.customer.name}</td>
                                <td>{item.sum}</td>
                                <td>{item.dueDate}</td>
                                <td>{item.status}</td>
                            </tr>)
                        )}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default Table;