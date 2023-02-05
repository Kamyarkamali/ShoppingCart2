import React from 'react';

//STYLED
import styled from "./Footer.module.css";

//Icon
import git from "../icon/git.png";
import link from "../icon/link.png";
import insta from "../icon/insta.png";
import tel from "../icon/tel.png";

const Footer = () => {
    return (
        <div className={styled.container}>
            <h3>contact with me</h3>
            <div className={styled.image}>
                <a href='https://github.com/Kamyarkamali'><img src={git} alt='git'/></a>  
                <a href='https://www.linkedin.com/in/kamyar-kamali-671a5822b/'><img src={link} alt='link'/></a> 
                <a href='https://www.instagram.com/kamyar_kamali021/'><img src={insta} alt='insta'/></a> 
                <a href='https://web.telegram.org/k/'><img src={tel} alt='tel'/></a>  
            </div>
        </div>
    );
};

export default Footer;