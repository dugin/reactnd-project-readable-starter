import colors from "./constants/colors";

const globalStyle = `
    body {
      margin:0;
      display:flex;
      flex-direction: column;
      min-height:100vh;
      background-image: ${colors.background};
      font-family: 'Open Sans', sans-serif;
    }
  `;
export default globalStyle;
