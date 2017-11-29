import React, {Component} from 'react';
import IosPlus from 'react-icons/lib/io/ios-plus';
import IosMinus from 'react-icons/lib/io/ios-minus';
import './AddRemove.css';
import PropTypes from 'prop-types';
import {voteType} from "../../utils/constants";

class AddRemove extends Component {

    constructor(props) {
        super(props);

        this.state = {quantity: props.amount || 1};
    }

    onAdd = () => {
        this.setState(state => state.quantity++, () => this.props.onAddOrRemove(voteType.upVote, this.state.quantity));
    };

    onRemove = () => {
        this.setState(state => state.quantity--, () => this.props.onAddOrRemove(voteType.downVote, this.state.quantity));
    };

    render() {

        return (
            <div className="AddRemove">
                <a onClick={this.onRemove} className="AddRemove__remove--btn"><IosMinus color="#39b54a" size={25}/></a>
                <a onClick={this.onAdd} className="AddRemove__add--btn"><IosPlus color="#39b54a" size={25}/></a>
            </div>
        )
    }
}

AddRemove.propTypes = {
    amount: PropTypes.number,
    onAddOrRemove: PropTypes.func.isRequired
};

export default AddRemove;