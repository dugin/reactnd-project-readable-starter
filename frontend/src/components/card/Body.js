import React from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.p`
        margin-top: 10px;
        font-size: 12px;
        padding-right: 15px;
        text-align: justify;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: ${props => props.type === 'post' ? 'vertical' : 'inherit'};
        -webkit-line-clamp: 3;
`;

const Body = ({body, type}) => {
    return <StyledParagraph type={type}>{body}</StyledParagraph>
};

export default Body;