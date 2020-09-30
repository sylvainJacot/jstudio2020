import React from "react";
import styled from "styled-components";
import {media} from "../../01 Atoms/MediaQueries";
import {colorsRoles} from "../../01 Atoms/Colors";
import ShortDescription from "./shortdescription";


export const Box = styled.div`

background-color: ${colorsRoles.White};
padding: 32px 0;

${media.desktop`
padding: 80px 0 24px 0;
`}

& h1 {
position: relative;
font-family: PlayfairDisplay-Regular_Black;
font-size: 4rem;
line-height: 32px;
color: ${colorsRoles.DarkGrey};
margin-bottom: 40px;
text-align: center;
${media.desktop`
font-size: 6rem;
line-height: 84px;
flex-direction: unset;
align-items: unset;
`}
}

`;
export const ShortDescriptionWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;

${media.desktop`
flex-direction: unset;
align-items: unset;
`};

`;


const ProjectMainTitle = (props) => {

    const roles = props.roles;

    return <>
            <Box>
                  <h1>{props.title}</h1>

                  <ShortDescriptionWrapper>

                            {roles.map((item) => (
                                <ShortDescription
                                    title={item.titlerole}
                                    description={item.descriptionrole}
                                />
                            ))

                            }

                  </ShortDescriptionWrapper>
            </Box>
        </>

};

export default ProjectMainTitle;


