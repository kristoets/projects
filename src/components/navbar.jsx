import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    state = {}
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <NavLink className="nav-item nav-link" to="/customer-orders">
                            Customer orders
                            </NavLink>

                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;