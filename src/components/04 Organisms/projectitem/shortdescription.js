import React from "react";
import styled from "styled-components";
import {colorsRoles} from "../../01 Atoms/Colors";
import {media} from "../../01 Atoms/MediaQueries";


export const Box = styled.div`

width: 50%;
margin-bottom: 24px;
display: flex;
flex-direction: column;
align-items: center;
flex-wrap: nowrap;

& h5 {
font-family: Roboto-Bold;
font-size: 2rem;
color: ${colorsRoles.DarkGrey};
text-align: center;
line-height: 1.5;
}

& p {
width: 288px;
font-family: Roboto-Regular;
font-size: 2rem;
color: ${colorsRoles.DarkGrey2};
letter-spacing: 0;
text-align: center;
line-height: 1.5;

${media.tablet`
width: 320px;
`}

${media.desktopL`
width: 400px;
`}

}

`;


const ShortDescription = (props) => {
    return <>
        <Box>
            <h5>{props.title}</h5>
            <p>{props.description}</p>
        </Box>
    </>

};

export default ShortDescription;