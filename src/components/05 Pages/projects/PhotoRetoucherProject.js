import React from "react";
import styled from "styled-components";

import {media} from "../../01 Atoms/MediaQueries";
import ProjectMainTitle from "../../04 Organisms/projectitem/ProjectMainTitle";
import BackButton from "../../02 Molecules/BackButton";
import PhotoProjectHeader from "../../04 Organisms/projectitem/PhotoProjectHeader";
import PictureComponent, {AspectRatio} from "../../04 Organisms/projectitem/PictureComponent";



const PhotoRetoucherProject = (props) => {

    let pictureComponent = props.pictureItem;

    return <>
        <Box>
            <BackButton/>
            <PhotoProjectHeader/>
            <ProjectMainTitle
                title={props.title}
                titlerole={props.titlerole}
                description={props.descriptionrole}
                roles={props.roles}
            />

            <GalleryWrapper>
            {
                pictureComponent.map((item,index) => (
                    <PictureComponent
                        key={index}
                        video={props.video}
                        videoportrait={props.videoportrait}
                        videolandscape={props.videolandscape}
                        landscape={props.landscape}
                        carre={props.carre}
                        rectanglelandscape={props.rectanglelandscape}
                        rectangleportrait={props.rectangleportrait}
                        src={item.src}
                        alt={item.altImg}
                        bigPicture={item.bigPicture}
                    />
                ))
            }
            </GalleryWrapper>


        </Box>
    </>

};

export default PhotoRetoucherProject;

export const Box = styled.div`

margin-top: 64px;

${media.desktop`
margin-top: 0px;
margin-right: 80px
`};

`;

export const BackgroundImageProject = styled.div`

width: 100%;
height: 200px;
background-image: url(${props => props.bgImage});
background-position: center; 
background-repeat: no-repeat;
background-size: cover; 

${media.desktop `
height: 400px;
`}

`;

export const GalleryWrapper = styled.div`

`;