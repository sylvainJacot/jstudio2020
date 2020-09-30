import React from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";

export const BackButtonWrapper = styled.button`
position: fixed;
z-index: 1;
top: 374px;
left: 24px;
width: 80px;
height: 80px;
background-color: white;
border-radius: 50%;
`;

const BackButton = () => {

    let History = useHistory();


    const handleBackHistory = () => {
        History.goBack()
    }

    return <>
        <BackButtonWrapper
        onClick={handleBackHistory}
        > Back
        </BackButtonWrapper>
    </>

};

export default BackButton;