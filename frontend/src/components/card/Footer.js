import moment from "moment/moment";
import React from "react";
import styled from "styled-components";
import colors from "../../styles/constants/colors";
import { ModeComment } from "material-ui-icons";
import { StyledPrimaryChip } from "../../styles/styles";
import { TYPE } from "../../utils/constants";

const StyledFooter = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: -10px;
  margin-top: 10px;
  p {
    margin: 0 0 0 10px;
  }
`;

const StyledFooterContent = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
`;

const StyledFooterComments = styled.div`
  position: relative;
  height: 40px;
  width: 40px;
  margin-right: 25px;
  svg {
    height: 100%;
    width: 100%;
    color: ${colors.primary};
  }
  span {
    font-size: 12px;
    position: absolute;
    left: 0;
    bottom: 3px;
    height: 100%;
    width: 100%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const StyledSecondaryChip = StyledPrimaryChip.extend`
  background-color: ${colors.secondary};
`;

const Footer = ({ author, timestamp, voteScore, type, amount }) => {
  const fromNow = () => {
    return moment(timestamp).fromNow();
  };

  return (
    <StyledFooter>
      <StyledFooterContent>
        <StyledSecondaryChip label={voteScore} />
        <p>
          by <b>{author}</b>
        </p>
        <p>{fromNow()}</p>
      </StyledFooterContent>

      <StyledFooterComments>
        {type !== TYPE.comment && (
          <div>
            <ModeComment />
            <span> {amount} </span>
          </div>
        )}
      </StyledFooterComments>
    </StyledFooter>
  );
};

export default Footer;
