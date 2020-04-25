import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Table from './common/table';

class CustomerOrders extends Component {
    state = {
        customerItems: [
            { orderId: 324342, customer: { id: 1, name: 'John Doe' }, sum: 4800, dueDate: '12.12.2019', status: 'Paid' },
            { orderId: 324321, customer: { id: 2, name: 'Thomas Bayer' }, sum: 220, dueDate: '24.12.2021', status: 'Not paid' }
        ],
        columns: [
            { name: 'Order ID' },
            { name: 'Customer Name' },
            { name: 'Sum' },
            { name: 'Payment due date' },
            { name: 'Status' }
        ],
        statusFilterTypes: [
            { id: 1, name: 'Paid' },
            { id: 2, name: 'Not paid' },
            { id: 3, name: 'Overdue' },
            { id: 4, name: 'Fulfilled' }
        ]
    }
    render() {
        const { customerItems, columns, statusFilterTypes } = this.state;
        return (
            <div>
                <Table
                    data={customerItems}
                    selectFilter={statusFilterTypes}
                    columns={columns}
                ></Table>
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