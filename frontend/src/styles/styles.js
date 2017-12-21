import styled from "styled-components";
import Chip from "material-ui/Chip/index";
import colors from "./constants/colors";


export const StyledPrimaryChip = styled(Chip)`
   background-color: ${colors.primary};
   color: white;
       margin: 5px 3px ;
`;