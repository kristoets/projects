import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class CustomerOrders extends Component {
    state = {}
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg">
                    <div className=" navbar-collapse">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <select className="custom-select">
                                <option selected>Filter by status</option>
                                <option value="Overdue">Overdue</option>
                                <option value="Paid">Paid</option>
                                <option value="Fulfilled">Fulfilled</option>
                                <option value="Paid">Paid</option>
                            </select>
                        </ul>
                        <ul className="mr-sm-2">
                            <input className="form-control " placeholder="Search"></input>
                        </ul>
                    </div>
                </nav>
                <table className="table">
                    <thead>
                        <tr>
                            <th >Order ID</th>
                            <th >Customer Name</th>
                            <th >Sum</th>
                            <th >Payment due date</th>
                            <th >Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th> <NavLink className="nav-item nav-link" to="/order-details">
                                3435362
                            </NavLink>
                            </th>
                            <td>John Doe</td>
                            <td>$4,800.00</td>
                            <td>12.12.2019</td>
                            <td><span class="badge badge-success">Paid</span></td>
                        </tr>
                        <tr>
                            <th>
                                <NavLink className="nav-item nav-link" to="/order-details">
                                    3435362                            </NavLink>
                            </th>
                            <td>Thomas Bayer</td>
                            <td>$210.90</td>
                            <td><span class="badge badge-danger">1d 12h overdue</span></td>
                            <td><span class="badge badge-danger">Not paid</span></td>
                        </tr>
                    </tbody>
                </table>
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div >
        );
    }
}

export default CustomerOrders;