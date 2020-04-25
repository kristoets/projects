import React, { Component } from 'react';
class TableHeader extends Component {
    state = {}
    render() {
        const { columns } = this.props
        return (


            <thead>
                <tr>
                    {columns.map(column => (
                        <th>
                            {column.name}
                        </th>)
                    )}

                </tr>
            </thead>
        );
    }
}

export default TableHeader;