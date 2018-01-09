import React from 'react';
import colors from "../../styles/constants/colors";
import {Link} from "react-router-dom";
import styled from 'styled-components';
import media from 'styled-media-query';


const StyledH1 = styled.h1`
    font-size: 20px;
 ${media.lessThan('medium')`
    font-size: 18px;
  `}
   
`;

const StyledLink = styled(Link)`
    font-size: 20px;
    color: #777777;
     ${media.lessThan('medium')`
    font-size: 18px;
  `}
    
    &:hover{
        color: ${colors.primary};
    }
`;

const Title = ({title, id, category, type}) => {
    return (
        <div>
            {type === 'detail' ?
                (<StyledH1> {title}</StyledH1>)
                :
                (<StyledLink to={`${category}/${id}`}>
                    {title}
                </StyledLink>)
            }
        </div>
    )
};

export default Title;