import React, {useState} from "react";
import styled from "styled-components";
import TestImage from "../../../media/img/Projects/03_Photo Retoucher/EATBRUSSELS2019/151_EATBXL_FOOD_QueueBoeuf.png";
import {colorsRoles} from "../../01 Atoms/Colors";
import {transitions} from "../../01 Atoms/Animations";


const LightBoxPicture = (props) => {

    return <>
        <Wrapper onClick={props.onClick} isactive={props.isactive}>
            <img src={TestImage}/>
        </Wrapper>

    </>

};

export default LightBoxPicture;

export const Wrapper = styled.div`
position: fixed;
content: "";
display: ${props => props.isactive ? "flex" : "none"};
justify-content: center;
top: 0;
right: 0;
bottom: 0;
left: 0;
background-color: ${colorsRoles.Black}E6;
z-index: 3;

& img {
height: 100%;
}

`;