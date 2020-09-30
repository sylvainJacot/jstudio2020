import React from "react";

import {colorsRoles, gradient, projectColors, methodoColors, colors} from "./Colors";
import {EvergreenProject, SkillsAnimals, imagesProjects, SamsungProject, KiaProject, TelenetProject,ClavieProject, SoSmartProject} from "./Images-UXUI";
import {
    Sketch,
    RawSketch,
    EightPoint,
    AtomicDesign,
    Invision,
    StyledComponents,
    ReactJs,
    PixelPerfect,
    Zeplin,
    Trello,
    Agile,
    Html5,
    Sass,
    SamsungGuidelines,
    Photoshop,
    ResponsiveDesign,
    Git,
    Bootsrap,
    CSS3,
    Javascript
} from "./Icons-Methodo";

export const pathuiux = "/ux-ui-designer";
export const pathdev = "/creative-developer";
export const pathphoto = "/photo-retoucher";
export const pathabout = "/about";

const  UXUIDesigner
    = (
    <>
        UX/UI
        <br />
        Designer
    </>
);
const CreativeDev = (
    <>
        Creative
        <br />
        Developer
    </>
);
const PhotoRetoucher = (
    <>
        Photo
        <br />
        Retoucher
    </>
);


export const Skills =  [
    {
        titleNav: UXUIDesigner,
        mainTitle: "UX/UI Designer",
        quote: '" I understand the perfect user interface should look good and work even better. "',
        altMainImg: "Parrot with human body",
        srcMainImg: SkillsAnimals.Parrot,
        mainColor: colorsRoles.Brand01,
        mainGradient: gradient.Brand0130,
        labelCTA: "Learn more",
        pathname: pathuiux,

    },
    {
        titleNav: CreativeDev,
        mainTitle: "Creative Developer",
        quote: "Lorem ipsum UX/UI Designer ezifz iugef zieg fzieg",
        altMainImg: "Fox with human body",
        srcMainImg: SkillsAnimals.Fox,
        mainColor: colorsRoles.Brand02,
        mainGradient: gradient.Brand0230,
        labelCTA: "Learn more",
        pathname: pathdev,
    },
    {
        titleNav: PhotoRetoucher,
        mainTitle: "Photo Retoucher",
        quote: "Lorem ipsum UX/UI Designer ezifz iugef zieg fzieg",
        altMainImg: "Horse with human body",
        srcMainImg: SkillsAnimals.Horse,
        mainColor: colorsRoles.Brand03,
        mainGradient: gradient.Brand0330,
        labelCTA: "Learn more",
        pathname: pathphoto,
    },

]

export const MainMethodoUXUI = [
    RawSketch,
    Sketch,
    PixelPerfect,
    AtomicDesign,
    Invision,
    Zeplin,
]
export const MainMethodoDeveloper = [
    AtomicDesign,
    ReactJs,
    StyledComponents,
    ResponsiveDesign,
    Git,
]
export const MainMethodoRetoucher = [


]


export const UIUXProjects = [
    {
        title: "Evergreen",
        skill: "UX/UI Designer",
        fields: "UI Design • Prototyping • Html/CSS",
        description: "Evergreen Garden Care is the leading garden care company outside North America, producing high quality garden care products designed to help people create their own green oasis amid the rush of modern life.",
        roles: [
            {
                titlerole: "Team",
                descriptionrole:"6 people",
            },
            {
                titlerole: "Role",
                descriptionrole:"Design the entire platform based on the wireframes provided. Implement atomic components (html/css)",
            },
            {
                titlerole: "Time",
                descriptionrole:"Around 4 mounths",
            },
        ],
        slug: "Evergreen",
        headerImage: EvergreenProject.HeaderEvergreen,
        decorativeimage: EvergreenProject.DecoEvergreen,
        maincolor: projectColors.Evergreen,
        FieldTextColorVisible: projectColors.Evergreen,
        backgroundpicture: EvergreenProject.EvergreenFirst,
        foregroundpicture: EvergreenProject.Leaves,
        methodology: [
            Trello,
            AtomicDesign,
            Sketch,
            Agile,
            Invision,
            Html5,
            Sass,
        ],
        images: [
            {
                srcDesktop: EvergreenProject.EvergreenFolioDesktop,
                srcMobile: EvergreenProject.EvergreenFolioMobile,
                altImg: "Evergreen project portfolio",
                bgColor: colors.PureWhite,
            },
        ]

    },
    {
        title: "Samsung",
        skill: "UX/UI Designer",
        fields: "UI Design • Prototyping",
        description: "Samsung is a South Korean electronics company which sells televisions, household appliances and perhaps most notably, mobile devices.",
        roles: [
            {
                titlerole: "Team",
                descriptionrole:"4 people",
            },
            {
                titlerole: "Role",
                descriptionrole:"The Samsung Members app have got some updates and wants to inform the clients via its website. Plus, retain the audience via monthly newsletters. I had to Keep consistency and design regarding all technical contraints (Samsung guidelines)",
            },
            {
                titlerole: "Time",
                descriptionrole:"Around 4 mounths",
            },
        ],
        slug: "Samsung",
        headerImage: SamsungProject.SamsungHeader,
        decorativeimage: SamsungProject.SamsungDeco,
        maincolor: projectColors.Samsung,
        backgroundpicture: SamsungProject.Samsungfirst,
        foregroundpicture: SamsungProject.SamsungStar,
        FieldTextColorVisible: colorsRoles.White,
        methodology: [
            SamsungGuidelines,
            AtomicDesign,
            PixelPerfect,
            Sketch,
            Agile,
            Invision,
        ],
        images: [
            {
                srcDesktop: SamsungProject.SamsungFolio01,
                srcMobile: SamsungProject.SamsungFolioMobile01,
                altImg: "Samsung project portfolio 1",
                bgColor: colors.PureWhite,
            },
            {
                srcDesktop: SamsungProject.SamsungFolio02,
                srcMobile: SamsungProject.SamsungFolioMobile02,
                altImg: "Samsung project portfolio 2",
                bgColor: colors.PureWhite,
            },
            {
                srcDesktop: SamsungProject.SamsungFolio03,
                srcMobile: SamsungProject.SamsungFolioMobile03,
                altImg: "Samsung project portfolio 3",
                bgColor: colors.PureWhite,
            },
        ]

    },
    {
        title: "Kia",
        skill: "UX/UI Designer",
        fields: "UI Design • Photo Retouching",
        description: "Kia Motors Corporation is a South Korean multinational automotive manufacturer headquartered in Seoul. ",
        roles: [
            {
                titlerole: "Team",
                descriptionrole:"3 people",
            },
            {
                titlerole: "Role",
                descriptionrole:"I had to create/imagine a landing page and advertising posters for the promotion of the new Kia SUV's. I had to retouch the car's pictures as well ",
            },
            {
                titlerole: "Time",
                descriptionrole:"Around 1 week",
            },
        ],
        slug: "Kia",
        headerImage: KiaProject.KiaHeader,
        decorativeimage: KiaProject.KiaDeco,
        maincolor: projectColors.Kia,
        backgroundpicture: KiaProject.KiaFirst,
        foregroundpicture: KiaProject.KiaWheel,
        FieldTextColorVisible: projectColors.Kia,
        methodology: [
            Trello,
            Photoshop,
            Sketch,
            PixelPerfect,
            Agile,
            Invision,
            Zeplin,
        ],
        images: [
            {
                srcDesktop: KiaProject.KiaFolio01,
                srcMobile: KiaProject.KiaFolio01,
                altImg: "Kia project portfolio 1",
                bgColor: colors.PureWhite,
            },
            {
                srcDesktop: KiaProject.KiaFolio02,
                srcMobile: KiaProject.KiaFolio02,
                altImg: "Kia project portfolio 2",
                bgColor: colors.PureWhite,
            },
            {
                srcDesktop: KiaProject.KiaFolio03,
                srcMobile: KiaProject.KiaFolio013,
                altImg: "Kia project portfolio 3",
                bgColor: colors.PureWhite,
            },
        ]

    },
    {
        title: "Telenet",
        skill: "UX/UI Designer",
        fields: "UX/UI Design • Prototyping",
        description: " Telenet specialises in the supply of broadband internet, fixed and mobile telephony services and cable television to customers throughout Flanders and Brussels over a powerful HFC (hybrid fibre-coax) network",
        roles: [
            {
                titlerole: "Team",
                descriptionrole:"2 people",
            },
            {
                titlerole: "Role",
                descriptionrole:"Create an interface in order to present the concept of the Digicovers (custom adhesive sheets that cover client's Digicorder). And create the home page in order to promote the \"Signal switch\".",
            },
            {
                titlerole: "Time",
                descriptionrole:"Around 1 week",
            },
        ],
        slug: "Telenet",
        headerImage: TelenetProject.TelenetHeader,
        decorativeimage:  TelenetProject.TelenetDeco,
        maincolor: projectColors.Telenet,
        backgroundpicture:  TelenetProject.Telenetfirst,
        foregroundpicture:  TelenetProject.TelenetSignal,
        FieldTextColorVisible: projectColors.Telenet,
        methodology: [
            Sketch,
            PixelPerfect,
            Agile,
            Invision,
            Zeplin,
        ],
        images: [
            {
                srcDesktop: TelenetProject.TelenetFolio01,
                srcMobile: TelenetProject.TelenetFolio01,
                altImg: "Telenet project portfolio 1",
                bgColor: colors.PureWhite,
            },
            {
                srcDesktop: TelenetProject.TelenetFolio02,
                srcMobile: TelenetProject.TelenetFolio02,
                altImg: "Telenet project portfolio 3",
                bgColor: colors.PureWhite,
            },
            {
                srcDesktop: TelenetProject.TelenetFolio03,
                srcMobile: TelenetProject.TelenetFolio03,
                altImg: "Telenet project portfolio 3",
                bgColor: colors.PureWhite,
            },
            {
                srcDesktop: TelenetProject.TelenetFolio04,
                srcMobile: TelenetProject.TelenetFolio04,
                altImg: "Telenet project portfolio 1",
                bgColor: colors.PureWhite,
            },

        ]

    },



]

export const CreativeDeveloperProjects = [
    {
        title: "Clavie",
        skill: "Creative Developer",
        fields: "Integration HTML/CSS",
        description: "Active for more than 40 years in the packaging sector, the CLAVIE company has developed a professional approach in the solution of packaging problems.",
        madeWith: [
            Html5,
            Sass,
            Javascript
        ],
        roles: [
            {
                titlerole: "Team",
                descriptionrole:"6 people",
            },
            {
                titlerole: "Role",
                descriptionrole:"Design the entire platform based on the wireframes provided. Implement atomic components (html/css)",
            },
            {
                titlerole: "Website",
                descriptionrole:"www.clavie.be",
            },
        ],
        slug: "Clavie",
        headerImage: ClavieProject.ClavieHeader,
        decorativeimage: ClavieProject.ClavieDecorative,
        maincolor: projectColors.Clavie,
        FieldTextColorVisible: projectColors.Clavie,
        thumbnailproject : ClavieProject.ClavieThumbnail,
        methodology: [
            Sketch,
            Html5,
            Sass,
            Javascript,
            Bootsrap,
            Git,
        ],
        images: [
            {
                srcDesktop: ClavieProject.ClavieFolio01,
                srcMobile: ClavieProject.ClavieFolio01,
                altImg: "Clavie project portfolio",
                bgColor: colors.PureWhite,
            },
            {
                srcDesktop: ClavieProject.ClavieFolio02,
                srcMobile: ClavieProject.ClavieFolio02,
                altImg: "Clavie project portfolio",
                bgColor: colors.PureWhite,
            },
        ]

    },
    {
        title: "SoSmart",
        skill: "Creative Developer",
        fields: "Integration HTML/CSS",
        description: "So Smart is an online marketplace for booking hairdressing, aesthetic and well-being services under strong promotion during off-peak hours or at the last minute.\n",
        madeWith: [
            Html5,
            CSS3
        ],
        roles: [
            {
                titlerole: "Team",
                descriptionrole:"6 people",
            },
            {
                titlerole: "Role",
                descriptionrole:"Design the entire platform based on the wireframes provided. Implement atomic components (html/css)",
            },
            {
                titlerole: "Time",
                descriptionrole:"Around 4 mounths",
            },
        ],
        slug: "SoSmart",
        headerImage: SoSmartProject.SoSmartHeader,
        decorativeimage: SoSmartProject.SoSmartDeco,
        maincolor: projectColors.SoSmart,
        FieldTextColorVisible: projectColors.Evergreen,
        thumbnailproject : SoSmartProject.SoSmartThumbnail,
        methodology: [
            Sketch,
            Html5,
            CSS3,
            Git
        ],
        images: [
            {
                srcDesktop: SoSmartProject.SoSmartFolio01,
                srcMobile: SoSmartProject.SoSmartFolio01,
                altImg: "So smart project portfolio",
                bgColor: colors.PureWhite,
            },
        ]

    },


]




