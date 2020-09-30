import React from "react";
import styled from "styled-components";
import ResponsiveImage from "../../01 Atoms/ResponsiveImage";
import TestImage from "../../../media/img/Projects/Evergreen/Evergreen-folio_Desktop.png";
import {colorsRoles} from "../../01 Atoms/Colors";
import {transitions} from "../../01 Atoms/Animations";

const NavPhotoRetoucherProjectItem = () => {
    return <>
        <Wrapper>
            <PictureWrapper>
                <ResponsiveImage
                sourceDesktop={TestImage}
                sourceMobile={TestImage}
                breakPoint={"768"}
                altImage={"test"}
            />
            </PictureWrapper>
            <PictureLabel>
                <h3>Project Title</h3>
            </PictureLabel>
        </Wrapper>
    </>

};

export default NavPhotoRetoucherProjectItem;

export const PictureLabel = styled.div`
position: absolute;
width: 88%;
height: 56px;
bottom: 0px;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid ${colorsRoles.LightGrey};
border-top: none;
background-color: ${colorsRoles.White};
border-radius: 0px 0px 4px 4px;
z-index: 0;
transition: ${transitions.basic1};
& h3 {
    font-family: PlayfairDisplay-Regular_Black;
    font-size: 2rem;
    line-height: 1.5;
}

`;

export const Wrapper = styled.a`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
width: 320px;
height: 320px;

&:hover {
  ${PictureLabel} {
 bottom: -56px;
 transition: ${transitions.basic2};
    }
}

`;



export const PictureWrapper = styled.div`
position: relative;
overflow: hidden;
height: 100%;
background-color: grey;
box-shadow: 0 2px 10px ${colorsRoles.DarkGrey}50, 0 2px 3px ${colorsRoles.DarkGrey}50;
border: 1px solid ${colorsRoles.White};
cursor: pointer;
z-index: 1;

&:before {
content: "";
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
background: linear-gradient(to right bottom, ${colorsRoles.White} 5.99%, ${colorsRoles.White} 48.93%, rgba(255, 255, 255, 0) 49.21%);
opacity: .2;
transition: ${transitions.easeOut};
}
& img {
width: 100%;
height: auto;
}

///// -----------  HOVER effects -----------

&:hover {

  &:before {
  transform: translateY(-100%);
  opacity: .1;
  transition: ${transitions.basic1};
  }

}

`;


