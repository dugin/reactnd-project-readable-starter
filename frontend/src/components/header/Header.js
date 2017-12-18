import React, {Component} from 'react';
import './Header.css';
import {withRouter, Link} from 'react-router-dom';
import IosArrowBack from 'react-icons/lib/io/ios-arrow-back';


export class Header extends Component {

    state = {shouldGoBack: false};

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);

        this.setState({
            shouldGoBack: nextProps.history.action !== 'REPLACE' && nextProps.location.pathname !== '/'
        })
    }

    onBack = () => {
        this.props.history.goBack();
    };

    render() {
        return (
            <nav className="navbar p-0 sticky-top navbar-light bg-primary Header">

                <div className="Header__wrapper">
                    {this.state.shouldGoBack && (
                        <a onClick={this.onBack} className="Header__back-btn"> <IosArrowBack size={30}/></a>
                    )}
                    <div className="container Header__brand">
                        <Link to="/" className="h1 navbar-brand m-0 ">My Readable</Link>
                    </div>
                </div>


            </nav>
        )
    }
}

export default withRouter(Header);