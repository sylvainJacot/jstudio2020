import React, {useContext} from "react";
import styled from "styled-components";
import {media} from "../01 Atoms/MediaQueries";
import {transitions} from "../01 Atoms/Animations";
import Skillsnavitem from "../04 Organisms/skillsnav/skillsnavitem";
import {Skills} from "../01 Atoms/Data";
import {UserContext} from "../Hooks/Providers/Context";
import AboutPage from "./AboutPage";


export const SkillsNavWrapper = styled.nav`
margin-top: 64px;
filter: ${props => props.value ? "blur(4px)" : "unset"};
-moz-filter: ${props => props.value ? "blur(4px)" : "unset"};
${media.desktop`
margin-top: unset;
margin-right: 80px;
`}
`;

export const SkillsNavList = styled.ul`
}
${media.desktop`
display: flex;
`}

&:hover > * {${media.desktop`
opacity: 0.4;
filter: blur(1px);
-moz-filter: blur(1px);
transition: ${transitions.basic2};
`}
  
 &:hover {${media.desktop`
opacity: 1;
filter: blur(0px);
-moz-filter: blur(0px);
transition: ${transitions.basic2};
`}
 
}

`;

const HomePage = () => {

    const {value, setValue} = useContext(UserContext);

        return <>
              <SkillsNavWrapper value={value}>
                    <SkillsNavList>

                        {
                            Skills.map((skillItem, index) =>

                                <Skillsnavitem
                                    key={index}
                                    title={skillItem.titleNav}
                                    quote={skillItem.quote}
                                    colorBrand={skillItem.mainColor}
                                    bottomGradient={skillItem.mainGradient}
                                    altImg={skillItem.altMainImg}
                                    label={skillItem.labelCTA}
                                    src={skillItem.srcMainImg}
                                    pathname={skillItem.pathname}
                                />

                            )
                        }

                    </SkillsNavList>

               </SkillsNavWrapper>
            </>


};


export default HomePage;


