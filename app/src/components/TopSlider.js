import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import styles from "./TopSlider.module.css";
import { movieData } from '../functions/sliderMovieData';
import "./TopSlider.css";

const TopSlider = () => {

    const options = {
        autoplay : true,
        nav : true,
        dots : false,
        loop : true,
        margin : 15,
        autoplayHoverPause : true ,
        autoplayTimeout : 3000,
        responsive : {
            0 : {items : 2},
            480 : {items : 3},
            768 : {items : 4},
            1024 : {items : 5},
            1250 : {items : 6},
        }
    };
    return (
        <div className={styles.container}>
            <OwlCarousel {...options} className="owl-theme" >

                {movieData.map(movie => 
                    <div key={movie.id} className={`item ${styles.sliderItem}`} >
                        <a href="/">
                            <img src={movie.imageSource} alt="slider" />
                            <div className={styles.itemOverlay}>
                                <p>{movie.summery}</p>
                                <div>
                                    <span>IMDb</span>{movie.IMDB}
                                </div>
                            </div>
                            <div className={styles.itemTitle}>
                                <p>{movie.title}</p>
                            </div>    
                        </a>
                    </div>
                 )}

            </OwlCarousel>        
        </div>
    );
};

export default TopSlider;