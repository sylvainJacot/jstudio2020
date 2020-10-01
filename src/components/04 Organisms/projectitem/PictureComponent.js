import React from "react";
import styled, {css} from "styled-components";



const PictureComponent = (props) => {
    return <>
        <Wrapper width={props.width}>
            <AspectRatio
                video={props.video}
                videoportrait={props.videoportrait}
                videolandscape={props.videolandscape}
                landscape={props.landscape}
                carre={props.carre}
                rectanglelandscape={props.rectanglelandscape}
                rectangleportrait={props.rectangleportrait}
            >
                <img src={props.src}/>
            </AspectRatio>
        </Wrapper>
    </>

};

export default PictureComponent;

export const Wrapper = styled.div`
position: relative;
width: ${props => props.width};
`;


export const AspectRatio = styled.div`
overflow: hidden;
position: relative;


${(props) => {
    return (
        props.videoportrait &&
        css`
            {
            padding-top: calc(100% / (9 / 16));
            }
            `
    );
}}

${(props) => {
    return (
        props.videolandscape &&
        css`
            {
            padding-top: calc(100% / (16 / 9));
            }
            `
    );
}}

${(props) => {
    return (
        props.carre &&
        css`
            {
            padding-top: 100%;
            }
            `
    );
}}

${(props) => {
    return (
        props.rectanglelandscape &&
        css`
            {
            padding-top: calc(100% / (4 / 3));
            }
            `
    );
}}

${(props) => {
    return (
        props.rectangleportrait &&
        css`
            {
            padding-top: calc(100% / (3 / 4));
            }
            `
    );
}}



& img {
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
}


`;
