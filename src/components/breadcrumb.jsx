import React, { Component } from 'react';
class Breadcrumb extends Component {
    state = {}
    render() {
        return (
            <nav aria-label="breadcrumb" >
                <ol className="breadcrumb" style={{ backgroundColor: 'white' }}>
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Library</li>
                </ol>
            </nav>
        );
    }
}

export default Breadcrumb;
