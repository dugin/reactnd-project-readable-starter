import React, {PureComponent} from 'react';
import Button from 'material-ui/Button';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText
} from 'material-ui/Dialog';
import PropTypes from "prop-types";

class RemoveDialog extends PureComponent {
    state = {
        open: false,
    };

    componentWillReceiveProps(nextProps) {
        this.setState({open: nextProps.open});
    }

    handleClose = () => {
        this.setState({open: false}, () => this.props.onClose());
    };

    handleRemove = () => {
        this.setState({open: false}, () => this.props.onRemove());
    };

    render() {
        return (
            <div>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogContent>
                        <DialogContentText>
                            Are you sure you want to remove <u>{this.props.post.title}</u> ?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleRemove} color="primary" autoFocus>
                            Yes
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

RemoveDialog.propTypes = {
    post: PropTypes.object.isRequired,
    open: PropTypes.bool,
    onClose: PropTypes.func,
    onRemove: PropTypes.func
};

export default RemoveDialog;