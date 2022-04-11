import React from 'react';
import Aside from './Aside';
import Article from "./Article";
import styles from "./Main.module.css";

const Main = () => {
    return (
        <div className={styles.container}>
            <Article />
            <Aside />
        </div>
    );
};

export default Main;