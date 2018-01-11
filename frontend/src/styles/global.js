import colors from "./constants/colors";

const globalStyle = `
    body {
      margin:0;
      display:flex;
      flex-direction: column;
      min-height:100vh;
      background-color: ${colors.background};
      font-family: 'Open Sans', sans-serif;
    }
    
    button:hover, a:hover{
    cursor: pointer;
    }
    
    h1, p {
    margin: 0 0 10px 0;
    color : ${colors.text}
    }
 
  `;

export default globalStyle;
