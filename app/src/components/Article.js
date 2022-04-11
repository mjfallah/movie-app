import React from 'react';
import SeriesWeeklyTabloid from './SeriesSchedule/SeriesWeeklyTabloid';
import AdvancedSearch from './AdvancedSearch/AdvancedSearch';
import Posts from './Posts/Posts';
import Pagination from './Pagination/Pagination';
import styles from "./Article.module.css";

const Article = () => {
    return (
        <div className={styles.container}>
            <SeriesWeeklyTabloid />
            <AdvancedSearch />
            <Posts />
            <Pagination />
        </div>
        
    );
};

export default Article;