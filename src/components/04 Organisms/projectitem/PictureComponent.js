import React from "react";
import styled from "styled-components";
import AspectRatio from "react-aspect-ratio/dist/next";



const PictureComponent = (props) => {
    return <>
        <AspectRatio ratio={props.ratio} style={{ maxWidth: '800px' }}>
            <img src={props.src}/>
        </AspectRatio>

    </>

};

export default PictureComponent;
