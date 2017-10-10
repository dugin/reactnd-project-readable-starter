import React, {Component} from 'react';
import './Header.css';

class Header extends Component {

    render() {
        return (
            <nav className="navbar p-0 sticky-top navbar-light bg-primary Header">
                <div className="container">
                <span className="h1 navbar-brand ">My Readable</span>
                </div>
            </nav>
        )
    }
}

export default Header;