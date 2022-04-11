import React from 'react';
import TelegramAndInstagram from './AsideComponents/TelegramAndInstagram';
import LastDubbed from './AsideComponents/LastDubbed';
import New2021 from './AsideComponents/New2021';
import UpdatedSeries from './AsideComponents/UpdatedSeries';
import SuggestedToWatch from './AsideComponents/SuggestedToWatch';
import Upcoming from './AsideComponents/Upcoming';
import GenreCategories from './AsideComponents/GenreCategories';
import styles from "./Aside.module.css";

const Aside = () => {
    return (
        <div className={styles.socialContainer}>
            <TelegramAndInstagram />
            <LastDubbed />
            <New2021 />
            <UpdatedSeries />
            <SuggestedToWatch />
            <Upcoming />
            <GenreCategories />
        </div>
    );
};

export default Aside;