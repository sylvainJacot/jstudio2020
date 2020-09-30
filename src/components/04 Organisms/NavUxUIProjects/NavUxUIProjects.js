import React, {useState, useEffect, useRef} from "react";
import {useRouteMatch} from "react-router-dom";

import {colorsRoles, projectColors} from "../../01 Atoms/Colors";
import {UIUXProjects} from "../../01 Atoms/Data";
import NavUxUIProjectsItem from "./NavUxUIProjectsItem";



const Box = {
    width: "100%",
    height: "100%",
};

const NavUxUIProjects = (props) => {

    const [bgColor, setbgColor] = useState("");
    const [YPos, setYPos] = useState(0);
    const myRef = useRef();



    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll',handleScroll);
        }
    })


    const handleScroll = () => {

        let lastScrollY = window.pageYOffset + 320;
        let lastScrollYDesktop = lastScrollY + 160;
        let ref = myRef.current;
        let refTop = ref.offsetTop;

        let MediaQueryDesktop = window.matchMedia("(max-width: 1024px)")

        const NavProjectItemHeightDesktop = 880;
        const NavProjectItemHeightMobile = 640;

        const Bg1 = projectColors.Evergreen;
        const Bg2 = projectColors.Samsung;
        const Bg3 = projectColors.Kia;
        const Bg4 = projectColors.Telenet;

        setYPos({YPos:lastScrollY});
        console.log(lastScrollY);
        console.log(refTop);


        if (MediaQueryDesktop.matches) {

        if (lastScrollY >= 0) {
            window.requestAnimationFrame(() => {
                setbgColor("none")
            });
        }

        if (lastScrollY >= refTop) {
            window.requestAnimationFrame(() => {
                setbgColor(Bg1)
            });

        }
        if (lastScrollY >= refTop + NavProjectItemHeightMobile) {
            window.requestAnimationFrame(() => {
                setbgColor(Bg2)
            });

        }
            if (lastScrollY >= refTop + NavProjectItemHeightMobile * 2) {
                window.requestAnimationFrame(() => {
                    setbgColor(Bg3)
                });

            }
            if (lastScrollY >= refTop + NavProjectItemHeightMobile * 3) {
                window.requestAnimationFrame(() => {
                    setbgColor(Bg4)
                });

            }


        }
        else {
            if (lastScrollYDesktop >= 0) {
                window.requestAnimationFrame(() => {
                    setbgColor("none")
                });
            }

            if (lastScrollYDesktop >= refTop) {
                window.requestAnimationFrame(() => {
                    setbgColor(Bg1)
                });

            }
            if (lastScrollYDesktop >= refTop + NavProjectItemHeightDesktop) {
                window.requestAnimationFrame(() => {
                    setbgColor(Bg2)
                });

            }
            if (lastScrollYDesktop >= refTop + NavProjectItemHeightDesktop * 2) {
                window.requestAnimationFrame(() => {
                    setbgColor(Bg3)
                });

            }
            if (lastScrollYDesktop >= refTop + NavProjectItemHeightDesktop * 3) {
                window.requestAnimationFrame(() => {
                    setbgColor(Bg4)
                });

            }

        }

    }

    let { url } = useRouteMatch();

        return (
            <>
                <div style={Box} ref={myRef}>

                    {
                        UIUXProjects.map((project) =>

                        <NavUxUIProjectsItem

                        bgColor={bgColor}
                        slug={`${url}/${project.slug}`}
                        title={project.title}
                        description={project.description}
                        backgroundpicture={project.backgroundpicture}
                        foregroundpicture={project.foregroundpicture}
                        fields={project.fields}
                        TextColor={project.maincolor}
                        FieldTextColorVisible={project.FieldTextColorVisible}

                        />

                        )
                    }

                </div>

            </>
        )

}

export default NavUxUIProjects;