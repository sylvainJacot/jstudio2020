import React from "react";
import styled from "styled-components";
import {colors, colorsRoles} from "../../../01 Atoms/Colors";


const CodeSandboxes = () => {
    return <>
        <Wrapper>
            <h2>CodeSanbox section</h2>

        </Wrapper>

    </>

};

export default CodeSandboxes;

export const Wrapper = styled.div`
background-color: ${colorsRoles.Black};
`;


export const Iframe = styled.iframe`
width:500px; 
height:500px; 
border:0; 
border-radius: 4px; 
overflow:hidden;"
`;