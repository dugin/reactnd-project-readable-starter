import React, {PureComponent} from 'react';
import Button from 'material-ui/Button';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogTitle,
} from 'material-ui/Dialog';
import PropTypes from "prop-types";
import {FormControl, Input, InputLabel, MenuItem, Select, withMobileDialog} from "material-ui";
import {MODE, TYPE} from "../utils/constants";
import uuidv1 from 'uuid/v1';

class CreateEditModal extends PureComponent {
    state = {
        open: false,
        category: '',
        author: '',
        body: '',
        title: ''
    };

    componentWillReceiveProps(nextProps) {
        this.setState({
            open: nextProps.open,
            category: '',
            author: '',
            body: '',
            title: ''
        });

        if (nextProps.info)
            this.setState({...nextProps.info});
    }

    handleClose = () => {
        this.setState({open: false}, () => this.props.onClose());
    };

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    onSubmit = event => {
        event.preventDefault();

        const {open, ...obj} = this.state;

        if (this.props.mode === MODE.create) {
            this.props.onSave({...obj, id: uuidv1(), timestamp: Date.now()})
        }
        else
            this.props.onSave(obj);
    };

    setDialogTitle() {
        const {mode, type} = this.props;

        if (mode === MODE.edit)
            return '';

        else if (type === TYPE.comment)
            return 'New Comment';

        return 'New Post';
    }

    render() {
        const {categories, fullScreen, type, mode} = this.props;

        return (
            <div>
                <Dialog
                    fullScreen={fullScreen}
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title">
                    <form autoComplete="off" onSubmit={this.onSubmit}>
                        <DialogTitle id="form-dialog-title">{this.setDialogTitle()}</DialogTitle>
                        <DialogContent>
                            {type === TYPE.post && (
                                <FormControl fullWidth margin="dense" required>
                                    <InputLabel htmlFor="title">Title</InputLabel>
                                    <Input autoFocus
                                           id="title"
                                           name="title"
                                           value={this.state.title}
                                           onChange={this.handleChange}
                                    />
                                </FormControl>
                            )}

                            <FormControl fullWidth margin="dense" required>
                                <InputLabel htmlFor="body">Body</InputLabel>
                                <Input
                                    id="body"
                                    multiline
                                    name="body"
                                    rowsMax="6"
                                    value={this.state.body}
                                    onChange={this.handleChange}
                                />
                            </FormControl>

                            <FormControl margin="dense" required fullWidth>
                                <InputLabel htmlFor="author">Author</InputLabel>
                                <Input
                                    id="author"
                                    name="author"
                                    value={this.state.author}
                                    onChange={this.handleChange}
                                />
                            </FormControl>

                            {type === TYPE.post && (
                                <FormControl margin="dense" required fullWidth>
                                    <InputLabel htmlFor="category">Category</InputLabel>
                                    <Select
                                        value={this.state.category}
                                        onChange={this.handleChange}
                                        input={<Input name="category" required id="category"/>}>
                                        {categories && categories.map(c => <MenuItem key={c} value={c}>{c}</MenuItem>)}
                                    </Select>
                                </FormControl>
                            )}

                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button type='submit' disabled={type === TYPE.post && this.state.category.length === 0}
                                    color="primary">
                                Save
                            </Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </div>
        );
    }
}

CreateEditModal.defaultProps = {
    mode: 'create',
    type: 'post'
};

CreateEditModal.propTypes = {
    info: PropTypes.object,
    open: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    categories: PropTypes.array,
    mode: PropTypes.string,
    type: PropTypes.string
};

export default withMobileDialog()(CreateEditModal);