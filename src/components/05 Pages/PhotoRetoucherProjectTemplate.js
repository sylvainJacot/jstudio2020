import React from "react";
import PhotoRetoucherProject from "./projects/PhotoRetoucherProject";
import {PhotoRetoucherProjects} from "../01 Atoms/Data";


const PhotoRetoucherProjectTemplate = ({match}) => {

    const photoretoucherproject = PhotoRetoucherProjects.find(({ slug }) => slug === match.params.slug);


    return <>

        <PhotoRetoucherProject
            headerImage={photoretoucherproject.headerImage}
            title={photoretoucherproject.title}
            bgImage={photoretoucherproject.decorativeimage}
            sourceMobile={photoretoucherproject.decorativeimage}
            titlerole={photoretoucherproject.title}
            descriptionrole={photoretoucherproject.descriptionrole}
            roles={photoretoucherproject.roles}
            projects={photoretoucherproject.methodology}
            ImageProject={photoretoucherproject.images}
            mainColor={photoretoucherproject.maincolor}
        />

    </>

};

export default PhotoRetoucherProjectTemplate;