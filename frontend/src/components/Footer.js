import React from "react";
import styled from "styled-components";

const StyledParagraph = styled.p`
  width: 100%;
  text-align: center;
  font-weight: 300;
  margin-bottom: 20px;
`;

const Footer = () => {
  return <StyledParagraph>Developed by Rodrigo Dugin</StyledParagraph>;
};

export default Footer;
