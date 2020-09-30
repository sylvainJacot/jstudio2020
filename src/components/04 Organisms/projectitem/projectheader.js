import React from "react";
import styled from "styled-components";
import ResponsiveImage from "../../01 Atoms/ResponsiveImage";
import {transitions} from "../../01 Atoms/Animations";
import {media} from "../../01 Atoms/MediaQueries";


export const Header = styled.header`
height: 208px;
width: 100%;
padding-top: 40px;
padding-bottom: 16px;
position: relative;
display: flex;
justify-content: center;
align-items: flex-end;
background-color: ${props => props.mainColor} ;

${media.desktop`
height: 400px;
padding-top: 24px;
`};

& picture {
width: 80%;
height: fit-content;
transition: ${transitions.basic2};

&:hover {
transform: scale(.9);
transition: ${transitions.basic1};
}

${media.desktop`
width: 48%;
`};

& img  {
width: 100%;
}
}



`;


const ProjectHeader = (props) => {
    return <>

            <Header mainColor={props.mainColor}>
                <ResponsiveImage
                    sourceMobile={props.headerImage}
                />
            </Header>
    </>
};

export default ProjectHeader;