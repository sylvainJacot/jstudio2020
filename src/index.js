import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';


import './index.css';
import App from './App';
import ScrollToTop from "./components/02 Molecules/ScrollToTop";
import {colorsRoles} from "./components/01 Atoms/Colors";


setTimeout(console.log.bind(console, "%cDesigned and developed by Jacot Sylvain" ,
    "color: white; " +
    "background-color: #FA2A62; " +
    "border: 16px solid #FA2A6250;" +
    "font-weight: 800;" +
    "font-size: 16px"
));

ReactDOM.render(
        <Router>
            <ScrollToTop />
            <App />
        </Router>
,
    document.getElementById('root')
);
