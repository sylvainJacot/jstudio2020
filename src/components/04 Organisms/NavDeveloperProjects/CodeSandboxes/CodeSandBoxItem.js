import React from "react";
import styled from "styled-components";
import {colorsRoles} from "../../../01 Atoms/Colors";
import {fonts} from "../../../01 Atoms/globalStyle";
import {transitions} from "../../../01 Atoms/Animations";


const CodeSandBoxItem = (props) => {
    return <>
        <Wrapper href={props.href}>
            <img src={props.src} alt={props.alt}/>
            <Label><p>{props.label}</p></Label>
        </Wrapper>
    </>

};

export default CodeSandBoxItem;

export const Label = styled.div`
width: 100%;
height: 32px;
background-color: ${colorsRoles.DarkGrey};
display: flex;
justify-content: center;
align-items: center;
transition: ${transitions.basic2};

    & p {
        ${fonts.Roboto};
        font-weight: bold;
        font-size: 2rem;
        color: ${colorsRoles.White};
    }


`;

export const Wrapper = styled.a`
display: block;
position: relative;
width: 240px;
height: 160px;
background-color: ${colorsRoles.DarkGrey};
border-radius: 16px;
overflow: hidden;
cursor: pointer;
margin: 16px;
    & img {
    width: 100%;
    }
    
    &:hover {
        ${Label} {
            height: 56px;
            transform: translateY(-24px);
            transition: ${transitions.basic1};
        }
    }

`;

