/* seen on https://dev.to/alaskaa/how-to-import-a-web-font-into-your-react-app-with-styled-components-4-1dni */

import {createGlobalStyle} from "styled-components";
import {colorsRoles} from "./Colors";

import PlayfairDisplayBlack from "./fonts/Playfair_Display/PlayfairDisplay-Black.woff";
import PlayfairDisplayBlack2 from "./fonts/Playfair_Display/PlayfairDisplay-Black.woff2";
import PlayfairDisplayBlack3 from "./fonts/Playfair_Display/PlayfairDisplay-Black.ttf";

import RobotoRegular from "./fonts/Roboto/Roboto-Regular.woff";
import RobotoRegular2 from "./fonts/Roboto/Roboto-Regular.woff";

export default createGlobalStyle`


@font-face {
  font-family: 'Roboto', sans-serif;
url(${RobotoRegular}) format('woff'),
url(${RobotoRegular2}) format('woff2'),
font-weight: normal;
  font-style: normal;
}



    
html {
font-size: 8px;
}

body {
background-color: ${colorsRoles.DarkGrey};
`;

export const fonts = {
    Roboto : "font-family: 'Roboto', sans-serif;",
    PlayFairDisplay : "font-family: 'Playfair Display', serif;",
}