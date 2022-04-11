import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import styles from "./LastDubbed.module.css";
import "./LastDubbed.css";
import backtotheoutback from "../../assets/New2021/backtotheoutback.jpg";
import fortress from "../../assets/New2021/fortress.jpg";

const New2021 = () => {

    const options = {
        autoplay : true,
        loop : true,
        margin : 15,
        autoplayHoverPause : true ,
        autoplayTimeout : 3000,
        dots : false,
        center : true,
        stagePadding : 100,
        responsive : {
            0 : {items : 1},
            480 : {items : 1},
            768 : {items : 1},
            980 : {items : 1}
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <div>
                    <span className={styles.icon}>
                        <i className="fas fa-award fa-2x"></i>
                    </span>
                    <span>فیلم های 2021</span>
                </div>
                <div>
                    <a href="/">مشاهده همه</a>
                </div>
            </div>
            <div className={`asideSlider ${styles.carouselContainer}`}>
                <OwlCarousel {...options} className="owl-theme" >

                    <div className={`item ${styles.sliderItem}  `}>
                        <a href="/" >
                            <img src={backtotheoutback} alt="2021" />
                            <div className={styles.itemOverlay}>
                                <i className="fas fa-play"></i>
                                <span>
                                    <i className="far fa-star"></i>
                                    7.7<small>/10</small>
                                </span>
                                <p>دانلود انیمیشن Back to the Outback 2021</p>
                            </div>
                        </a> 
                    </div>

                    <div className={`item ${styles.sliderItem}  `}>
                        <a href="/" >
                            <img src={fortress} alt="2021" />
                            <div className={styles.itemOverlay}>
                                <i className="fas fa-play"></i>
                                <span>
                                    <i className="far fa-star"></i>
                                    7.7<small>/10</small>
                                </span>
                                <p>دانلود فیلم Fortress 2021</p>
                            </div>
                        </a>
                    </div>

                    <div className={`item ${styles.sliderItem}  `}>
                        <a href="/" >
                            <img src={backtotheoutback} alt="2021" />
                            <div className={styles.itemOverlay}>
                                <i className="fas fa-play"></i>
                                <span>
                                    <i className="far fa-star"></i>
                                    7.7<small>/10</small>
                                </span>
                                <p>دانلود انیمیشن Back to the Outback 2021</p>
                            </div>
                        </a> 
                    </div>

                     <div className={`item ${styles.sliderItem}  `}>
                        <a href="/" >
                            <img src={fortress} alt="2021" />
                            <div className={styles.itemOverlay}>
                                <i className="fas fa-play"></i>
                                <span>
                                    <i className="far fa-star"></i>
                                    7.7<small>/10</small>
                                </span>
                                <p>دانلود فیلم Fortress 2021</p>
                            </div>
                        </a>
                    </div>

                    <div className={`item ${styles.sliderItem}  `}>
                        <a href="/" >
                            <img src={backtotheoutback} alt="2021" />
                            <div className={styles.itemOverlay}>
                                <i className="fas fa-play"></i>
                                <span>
                                    <i className="far fa-star"></i>
                                    7.7<small>/10</small>
                                </span>
                                <p>دانلود انیمیشن Back to the Outback 2021</p>
                            </div>
                        </a> 
                    </div>

                    <div className={`item ${styles.sliderItem}  `}>
                        <a href="/" >
                            <img src={fortress} alt="2021" />
                            <div className={styles.itemOverlay}>
                                <i className="fas fa-play"></i>
                                <span>
                                    <i className="far fa-star"></i>
                                    7.7<small>/10</small>
                                </span>
                                <p>دانلود فیلم Fortress 2021</p>
                            </div>
                        </a>
                    </div>

                </OwlCarousel>
            </div>
        </div>
    );
    
};

export default New2021;