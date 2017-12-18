import React, {Component} from 'react';
import './Categories.css';
import CategoriesBadges from "../../stateless/categoriesBadge";
import SortBy from "../sort-by/SortBy";
import PropTypes from 'prop-types';
import {fetchCategories} from "../../actions/categories";
import {connect} from 'react-redux';
import {Loader} from "../loader/loader";

class Categories extends Component {

    state = {categories: [], style: null};

    componentDidMount() {

        this.setState({style: {overflowX: this.props.onEdit ? 'none' : 'auto'}});
    }

    render() {
        const {fetching, categories} = this.props;

        if (fetching)
            return <p className="loading">Carregando...</p>;

        return (
            <div className="Categories" style={this.state.style}>
                {
                    this.props.onEdit
                        ?
                        <SortBy default={this.props.default}
                                selected={(selected) => this.props.selected(selected)}
                                options={categories}/>
                        :
                        [...categories, 'all']
                            .map(c => <CategoriesBadges key={c} selected={(c) => this.props.selected(c)}
                                                        category={c}/>)
                }
            </div>
        )
    }
}

Categories.propTypes = {
    selected: PropTypes.func.isRequired,
    default: PropTypes.string
};

const mapStateToProps = (store) => {
    return {
        ...store.categoryReducer
    }
};

export default connect(mapStateToProps)(Categories);