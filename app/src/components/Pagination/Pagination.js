import React from 'react';
import styles from "./Pagination.module.css";

const Pagination = () => {
    return (
        <div className={styles.container}>
            <span>1</span>
            <a href="/">2</a>
            <a href="/">3</a>
            <a href="/">4</a>
            <a href="/">5</a>
            <a href="/">...</a>
            <a href="/">99</a>
            <a href="/">
                <i className="fas fa-angle-double-left" title="صفحه بعد"></i>
            </a>
        </div>
    );
};

export default Pagination;