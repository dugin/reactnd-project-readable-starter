import React, {PureComponent} from 'react';
import {Grid} from "material-ui";
import CategoriesChips from "../category/CategoriesChips";
import {fetchCategories} from "../category/category.action";
import {connect} from "react-redux";


class PostsPage extends PureComponent {

    componentWillMount(){
        this.props.dispatch(fetchCategories());
    }
    render() {
        const {categories} = this.props;

        return (
            <Grid container >

                <Grid item xs={12} >
                   <CategoriesChips  categories={categories} />
                </Grid>

                <Grid item xs={12}>
                    <h1>Teste</h1>
                </Grid>
            </Grid>
        );
    }
}

export const mapStateToProps = (state) => {
    const {categories, isDone, error} = state.categories;

    return {
        categories,
        isLoading: !isDone,
        error: !!error
    }
};
export default connect(mapStateToProps)(PostsPage);