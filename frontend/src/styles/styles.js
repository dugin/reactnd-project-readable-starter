import styled from "styled-components";
import Chip from "material-ui/Chip/index";
import colors from "./constants/colors";
import { Button } from "material-ui";

export const StyledPrimaryChip = styled(Chip)`
  background-color: ${colors.primary};
  min-width: 40px;
  color: white;
  margin: 5px 3px;
`;

export const StyledButton = styled(Button)`
  padding: 0;
  display: flex;
  span {
    width: inherit;
    color: ${colors.primary};
  }
`;
