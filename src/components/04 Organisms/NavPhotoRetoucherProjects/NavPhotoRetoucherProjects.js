import React from "react";
import NavPhotoRetoucherProjectItem from "../NavPhotoRetoucherProjects/NavPhotoRetoucherProjectItem";
import styled from "styled-components";
import {colorsRoles} from "../../01 Atoms/Colors";


const NavPhotoRetoucherProjects = () => {
    return <>
        <Wrapper>
        <NavPhotoRetoucherProjectItem/>
        </Wrapper>
    </>

};

export default NavPhotoRetoucherProjects;

export const Wrapper = styled.section`
position: relative;
width: 100%;
height: 100%;
background-color: ${colorsRoles.LightGrey2};
`;