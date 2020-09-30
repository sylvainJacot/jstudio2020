import React from "react";

import styled from "styled-components";
import Skillheader from "../04 Organisms/skillpage/skillheader";
import {colorsRoles} from "../01 Atoms/Colors";
import {media} from "../01 Atoms/MediaQueries";

import {SkillsAnimals} from "../01 Atoms/Images-UXUI";
import TemplateMethodo from "../04 Organisms/skillpage/TemplateMethodo";
import {Placeholder} from "./CreativeDeveloperProjects";
import {ClientsRetoucher, ClientsUXUI} from "../01 Atoms/Data";



export const Box = styled.div`
position: relative;
${media.desktop`
margin-right: 80px;
`
}
`;


const PhotoRetoucherProjects = () => {
    return <>

        <Box>


            <Skillheader
                mainTitle={"Photo Retoucher"}
                mainColor={colorsRoles.Brand03}
                srcMainImg={SkillsAnimals.Horse}
                description={"Description 01"}
                Flipped={true}
                ClientsRetoucher
            />
            <TemplateMethodo/>



        </Box>

    </>

};


export default PhotoRetoucherProjects;

