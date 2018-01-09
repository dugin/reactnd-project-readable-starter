import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";
import React, {PureComponent} from "react";
import RemoveDialog from "../RemoveDialog";
import OptionMenu from "../OptionMenu";
import {StyledPrimaryChip} from "../../styles/styles";
import Footer from "./Footer";
import Title from "./Title";
import Body from "./Body";
import AddSubtract from "../AddSubtract";
import styled, {css} from 'styled-components';
import colors from "../../styles/constants/colors";
import CreateEditModal from "../../pages/CreateEdit.modal";
import {cardActions, MODE, TYPE} from "../../utils/constants";
import {Hidden} from "material-ui";

const StyledSection = styled.section`
 background-color:  white;
  padding: 15px 0 15px 15px;
  
  ${props => props.type === 'detail' && css`
    margin-top: 10px;
    background-color: ${colors.background};
  `
    }
  
   ${props => props.type === 'comment' && css`
        border-top: 2px solid ${colors.background};
        border-bottom: 1px solid ${colors.background};
        margin-top: -1px;
`
    }
`;

const StyledDiv = styled.section`
    display: flex;
   
    p{
    font-size: 14px;
    }
`;

const StyledAddSubtractDiv = styled.div`
    display: flex;
    align-items: center;
`;

const StyledOptions = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledMain = styled.section`
   flex-grow: 1;
   display: flex;
   flex-direction: column;
   justify-content: center; 
`;


class Card extends PureComponent {

    state = {
        openRemoveDialog: false,
        openEditDialog: false
    };

    componentWillReceiveProps(nextProps){
    }

    onAddOrSubtract = (voteType) => {
        this.props.onAddOrSubtract(this.props.info.id, voteType)
    };

    onOption = (o) => {

        if (o === MODE.edit) {
            this.setState({openEditDialog: true});
        }

        else if (o === MODE.remove) {
            this.setState({openRemoveDialog: true});
        }
    };

    onRemove = () => {
        this.props.onRemove(this.props.info.id);
    };

    onEdit = (obj) => {
        this.props.onEdit(obj);
        this.setState({openEditDialog: false})
    };


    render() {
        const {info, type, amount, categories} = this.props;

        return (
            <StyledSection type={type}>
                <StyledDiv>
                    <StyledAddSubtractDiv>
                        <AddSubtract onAddOrSubtract={this.onAddOrSubtract}/>
                    </StyledAddSubtractDiv>

                    <StyledMain>
                        <Title
                            title={info.title}
                            id={info.id}
                            category={info.category}
                            type={type}/>

                        <Hidden smDown>
                            <Body body={info.body} type={type}/>
                        </Hidden>
                    </StyledMain>

                    <StyledOptions>
                        <OptionMenu
                            options={cardActions}
                            onSelect={(o) => this.onOption(o)}/>

                        {type !== TYPE.comment && <StyledPrimaryChip label={info.category}/>}
                    </StyledOptions>
                </StyledDiv>
                <Hidden smUp>
                    <Body body={info.body} type={type}/>
                </Hidden>

                <Footer
                    author={info.author}
                    timestamp={info.timestamp}
                    voteScore={info.voteScore || 1}
                    amount={amount}
                    type={type}/>

                <RemoveDialog
                    onClose={() => this.setState({openRemoveDialog: false})}
                    onRemove={this.onRemove}
                    open={this.state.openRemoveDialog}
                    info={info}/>

                <CreateEditModal
                    onClose={() => this.setState({openEditDialog: false})}
                    onSave={this.onEdit}
                    open={this.state.openEditDialog}
                    info={info}
                    categories={categories && categories.filter(c => c !== 'all')}
                    type={type}
                    mode={MODE.edit}/>
            </StyledSection>
        );
    }
}

Card.defaultProps = {
    type: 'post',
    amount: 0
};
Card.propTypes = {
    info: PropTypes.object.isRequired,
    onRemove: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onAddOrSubtract: PropTypes.func.isRequired,
    type: PropTypes.string,
    amount: PropTypes.number,
    categories: PropTypes.array
};
export default withRouter(Card);