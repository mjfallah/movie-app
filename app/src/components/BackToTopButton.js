import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import styles from "./BackToTop.module.css";

const BackToTopButton = () => {

    const [visible , setVisible]=useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
          setVisible(true)
        } 
        else if (scrolled <= 300){
          setVisible(false)
        };
    };

    window.addEventListener('scroll', toggleVisible);

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
    };
    
    return (
        <div>
            {
                visible && 
                <div className={styles.container} onClick={scrollToTop} data-tip="بازگشت به بالا" data-for="backToTop">
                    <span>
                    <i className="fa fa-arrow-up "></i> 
                    </span>
                    <ReactTooltip place="left" id="backToTop" type="dark" effect="solid" offset={{left: -7}} border borderColor="black"/>
                </div>
            }
        </div>
    );
};

export default BackToTopButton;