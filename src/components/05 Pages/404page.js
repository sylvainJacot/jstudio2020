import React from "react";
import styled from "styled-components";

export const Box = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

& p {
font-size: 80px;
color: ghostwhite;
}

`;

const ErrorPage = () => {
    return <>
        <Box>
            <p>Error 404</p>
        </Box>
    </>

};

export default ErrorPage;

