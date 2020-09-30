import React from "react";

import PhotoRetoucherProject from "./projects/PhotoRetoucherProject";
import {PhotoRetoucherProjects} from "../01 Atoms/Data";


const PhotoRetoucherProjectTemplate = ({match}) => {

    const PhotoretoucherProject = PhotoRetoucherProjects.find(({ slug }) => slug === match.params.slug);


    return <>

        <PhotoRetoucherProject
            headerImage={PhotoretoucherProject.headerImage}
            title={PhotoretoucherProject.title}
            description={PhotoretoucherProject.description}
            bgImage={PhotoretoucherProject.decorativeimage}
            sourceMobile={PhotoretoucherProject.backgroundpicture}
            titlerole={PhotoretoucherProject.titlerole}
            descriptionrole={PhotoretoucherProject.descriptionrole}
            roles={PhotoretoucherProject.roles}
            projects={PhotoretoucherProject.methodology}
            ImageProject={PhotoretoucherProject.images}
            mainColor={PhotoretoucherProject.maincolor}
        />

    </>

};

export default PhotoRetoucherProjectTemplate;