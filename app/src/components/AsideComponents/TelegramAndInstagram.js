import React from 'react';
import styles from "./TelegramAndInstagram.module.css";

const TelegramAndInstagram = () => {
    return (
        <div>
            <a  href="/" className={styles.subContainer}>
                <span> تلگرام آوا مووی </span>
                <i className="fab fa-telegram fa-2x"></i>
            </a>
            <a  href="/" className={styles.subContainer}>
                <span> اینساتگرام آوا مووی </span>
                <i className="fab fa-instagram fa-2x"></i>
            </a>
        </div>
    );
};

export default TelegramAndInstagram;