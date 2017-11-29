import React, {Component} from 'react';
import './Header.css';
import {withRouter, Link} from 'react-router-dom';
import IosArrowBack from 'react-icons/lib/io/ios-arrow-back';


export class Header extends Component {

    state = {shouldGoBack: false};

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        if (nextProps.location !== this.props.location && nextProps.history.action !== 'REPLACE' ) {
            this.setState({shouldGoBack: true})
        }
        else
            this.setState({shouldGoBack: false})
    }

    onBack = () => {
        this.props.history.goBack();
    };

    render() {
        return (
            <nav className="navbar p-0 sticky-top navbar-light bg-primary Header">
                {this.state.shouldGoBack ?
                    (
                        <div className="Header__wrapper">
                            <a onClick={this.onBack} className="Header__back-btn"> <IosArrowBack size={30}/></a>
                            <div className="container Header__brand">
                                <Link to="/" className="h1 navbar-brand m-0 ">My Readable</Link>
                            </div>
                        </div>
                    ) : (
                        <div className="container">
                            <p className="h1 navbar-brand m-0 ">My Readable</p>
                        </div>
                    )
                }
            </nav>
        )
    }
}

export default withRouter(Header);