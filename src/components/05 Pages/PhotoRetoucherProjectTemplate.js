import React from "react";
import PhotoRetoucherProject from "./projects/PhotoRetoucherProject";
import {PhotoRetoucherProjects} from "../01 Atoms/Data";
import TestImage from "../../media/img/Projects/03_Photo Retoucher/EATBRUSSELS2019/191_EATBXL_FOOD_DUO_Graines.png";



const PhotoRetoucherProjectTemplate = ({match}) => {

    const photoretoucherproject = PhotoRetoucherProjects.find(({ slug }) => slug === match.params.slug);


    return <>

        <PhotoRetoucherProject
            title={photoretoucherproject.title}
            roles={photoretoucherproject.roles}
            description={photoretoucherproject.description}
            video={photoretoucherproject.ratio}
            videoportrait={photoretoucherproject.videoportrait}
            videolandscape={photoretoucherproject.videolandscape}
            landscape={photoretoucherproject.landscape}
            carre={photoretoucherproject.carre}
            rectanglelandscape={photoretoucherproject.rectanglelandscape}
            rectangleportrait={photoretoucherproject.rectangleportrait}
            src={TestImage}
            width={"400px"}
        />

    </>

};

export default PhotoRetoucherProjectTemplate;