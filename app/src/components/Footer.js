import React from 'react';

import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.upperContainer}>
                <i className="fas fa-hashtag fa-2x"></i>
                <a href='/'>آوا مووی</a>
                <a href='/'>دانلود انیمیشن</a>
                <a href='/'>دانلود انیمیشن جدید</a>
                <a href='/'>دانلود رایگان فیلم</a>
                <a href='/'>دانلود رایگان انیمیشن</a>
                <a href='/'>دانلود فیلم</a>
                <a href='/'>دانلود رایگان فیلم</a>
                <a href='/'>دانلود فیلم 2019</a>
                <a href='/'>دانلود فیلم 2020</a>
                <a href='/'>دانلود فیلم 2021</a>
                <a href='/'>دانلود فیلم خارجی</a>
                <a href='/'>دانلود سریال خارجی</a>
            </div>
            <div className={styles.copyRight}>
                <p>
                    <i className="fas fa-copyright"></i>
                    هر گونه کپی برداری از طرح قالب یا مطالب پیگرد قانونی دارد ، کلیه حقوق این وب سایت متعلق به آوا مووی می باشد
                </p>
            </div>
        </div>
    );
};

export default Footer;
