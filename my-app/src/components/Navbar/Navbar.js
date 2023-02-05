import React from 'react';

import Headere from "../Headre/Headere";

///Style
import styled from "../Navbar/Navbar.module.css";

//Image
import navbar from "../icon/Navbar.jpg";

const Navbar = () => {
    return (
        <>
        <Headere/>
        <div className={styled.container}>
            <img src={navbar} alt='navbar'/>
            <div className={styled.text}>
                <h2>Wellcome to my Shopp</h2>
                <p>Built Whith <span>React.JS</span></p>
            </div>
        </div>
        </>
    );
};

export default Navbar;