import React, {Component} from 'react';
import * as readableAPI from '../../api/readableAPI';
import './Categories.css';

class Categories extends Component {

    state = {categories: []};

    componentDidMount() {
        this.getAllCategories();
    }

    getAllCategories = () => {
        readableAPI.getAllCategories()
            .then(resp => {
                if (resp.status === 200)
                    this.setState({categories: resp.data.categories});

                else
                    throw new Error({status: resp.status, msg: resp.statusText})
            })
            .catch(err => console.error(err));
    };

    render() {
        return (
            <div className="Categories">
                {this.state.categories.map(c => (
                    <a href="#" key={c.name} className="badge badge-pill badge-secondary">{c.name}</a>
                ))}

            </div>
        )
    }
}

export default Categories;