import React from "react";
import {Route, Switch} from 'react-router-dom';

import HomePage from "../05 Pages/HomePage";
import AboutPage from "../05 Pages/AboutPage";
import ErrorPage from "../05 Pages/404page";
import UxUiProjects from "../05 Pages/UxUiProjects";
import CreativeDeveloperProjects from "../05 Pages/CreativeDeveloperProjects";
import PhotoRetoucherProjects from "../05 Pages/PhotoRetoucherProjects";
import UiUxDesignProjectTemplate from "../05 Pages/UiUxDesignProjectTemplate";
import {pathuiux, pathdev, pathphoto, pathabout} from "../01 Atoms/Data";
import CreativeDeveloperProjectTemplate from "../05 Pages/CreativeDeveloperProjectTemplate";


const Routes = [
    {
        path: "/",
        exact: true,
        component: HomePage,
    },
    {
        path: pathuiux,
        exact: true,
        component: UxUiProjects,
    },
    {
        path: pathdev,
        exact: true,
        component: CreativeDeveloperProjects,
    },
    {
        path: pathphoto,
        exact: true,
        component: PhotoRetoucherProjects,
    },
    {
        path: pathabout,
        exact: true,
        component: AboutPage,
    },
    {
        path: pathuiux+"/:slug",
        exact: true,
        component: UiUxDesignProjectTemplate,
    },
    {
        path: pathdev+"/:slug",
        exact: true,
        component : CreativeDeveloperProjectTemplate,
    }

]

const AppRoutes = () => {
    return <>
        <Switch>
        {
            Routes.map((route, key) =>
                 <Route
                     key={key}
                 path={route.path}
                 exact={route.exact}
                 component={route.component}
                 />
            )
        }
        <Route path="*" component={ErrorPage}/>
        </Switch>

    </>

};


export default AppRoutes;