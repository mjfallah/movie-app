import React from 'react';
import styles from "./Header.module.css";
import Logo from "../assets/images/default-logo.png";
import { dorpDownHideHandler, dorpDownShowHandler , darkMoodHandler ,sideHeaderShow,sideHeaderHide,sideDarkMoodHandler } from '../functions/script';

const Header = () => {
    return (
        <>
            <div className={styles.container} id="headerContainer">
                <div className={styles.upContainer}>
                    <div>
                        <a href="https://avamovie1.xyz/">
                            <img src={Logo} alt="logo" />
                        </a>
                    </div>
                    <div className={styles.searchFormContainer}>
                        <form className={styles.searchForm} >
                            <input type="text" placeholder="نام فیلم یا سریال را وارد کنید ..." />
                            <button type="submit"><i className="fas fa-search"></i></button>
                        </form>
                    </div>
                    <div className={styles.darkMood} id="darkMoodContainer" onClick={darkMoodHandler}>
                        <span className={styles.slider} id="darkMoodSlider" darkmoodtoggle="off"></span>
                        <span className={styles.moon}><i className="fas fa-moon"></i></span>
                        <span className={styles.sun}><i className="fas fa-sun"></i></span>     
                    </div>
                    <div className={styles.accountContainer} onMouseEnter={dorpDownShowHandler} onMouseLeave={dorpDownHideHandler}>
                        <div className={styles.account}>
                            <span className={styles.insideAvatar}>
                                <i className="fas fa-user"></i>
                            </span>
                            <span className={styles.insideText}>
                                <span>حساب کاربری</span>
                                <span>لطفا وارد حساب خود شوید</span>
                            </span>
                        </div>
                        <div className={styles.signInContainer} id="signInContainer">
                            <div className={styles.signIn}>
                                <a href="/signin">ورود</a>
                                <a href="/signup">ثبت نام</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.downContainer}>
                    <ul className={styles.menus}>
                        <li><a className='menuItem' href="/">صفحه اصلی</a></li>
                        <li><a className='menuItem' href="/">دانلود فیلم</a>
                            <i className="fas fa-angle-down"></i>
                            <ul className={styles.subMenu}>
                                <li><a href="/">برترین فیلم ها</a></li>
                                <li><a href="/">فیلم دوبله فارسی</a></li>
                                <li><a href="/">انیمه لیست</a></li>
                                <li><a href="/">برترین های اسکار</a></li>
                                <li><a href="/">برترین های کن</a></li>
                                <li><a href="/">برترین فیلم ها</a></li>
                                <li><a href="/">250 فیلم برتر IMDB</a></li>
                            </ul>
                        </li>
                        <li><a className='menuItem' href="/">آرشیو سریال ها</a>
                            <i className="fas fa-angle-down"></i>
                            <ul className={styles.subMenu}>
                                <li><a href="/">برترین سریال ها</a></li>
                                <li><a href="/">سریال دوبله فارسی</a></li>
                                <li><a href="/">سریال هندی</a></li>
                                <li><a href="/">250 سریال برتر IMDB</a></li>
                            </ul>
                        </li>
                        <li><a className='menuItem' href="/">راهنمای دانلود</a></li>
                        <li><a className='menuItem' href="/">حمایت مالی</a></li>
                        <li><a className='menuItem' href="/">درخواست فیلم و سریال</a></li>
                        <li><a className='menuItem' href="/">تماس با ما</a></li>
                    </ul>
                </div>
                <div className={styles.burgerMenu} onClick={sideHeaderShow}>
                    <i className="fas fa-bars fa-2x"></i>
                </div>
            </div>
            <div className={styles.sideHeaderContainer} id='sideMenu'>
                <div className={styles.closeBtn} onClick={sideHeaderHide}>
                    <i className="fas fa-times fa-2x"></i>
                </div>
                <div className={styles.sideSearchFormContainer}>
                    <form className={styles.sideSearchForm} >
                        <input type="text" placeholder="نام فیلم یا سریال را وارد کنید ..." />
                        <button type="submit"><i className="fas fa-search"></i></button>
                    </form>
                </div>
                <div className={styles.dayAndNightContainer}>
                    <span>حالت شب و روز</span>
                    <div className={styles.sideDarkMood} id="sideDarkMoodContainer" onClick={sideDarkMoodHandler}>
                        <span className={styles.sideSlider} id="sideDarkMoodSlider" sidedarkmoodtoggle="off"></span>
                        <span className={styles.sideMoon}><i className="fas fa-moon"></i></span>
                        <span className={styles.sideSun}><i className="fas fa-sun"></i></span>     
                    </div>
                </div>
                <div className={styles.sideSignIn}>
                    <a href="/signin">ورود</a>
                    <a href="/signup">ثبت نام</a>
                </div>
                <div className={styles.sideMenusContainer}>
                    <ul className={styles.sideMenus}>
                        <li><a className='menuItem' href="/">صفحه اصلی</a></li>
                        <li><a className='menuItem' href="/">دانلود فیلم</a>
                            <i className="fas fa-angle-left"></i>
                            <ul className={styles.sideSubMenu}>
                                <li><a href="/">برترین فیلم ها</a></li>
                                <li><a href="/">فیلم دوبله فارسی</a></li>
                                <li><a href="/">انیمه لیست</a></li>
                                <li><a href="/">برترین های اسکار</a></li>
                                <li><a href="/">برترین های کن</a></li>
                                <li><a href="/">برترین فیلم ها</a></li>
                                <li><a href="/">250 فیلم برتر IMDB</a></li>
                            </ul>
                        </li>
                        <li><a className='menuItem' href="/">آرشیو سریال ها</a>
                            <i className="fas fa-angle-left"></i>
                            <ul className={styles.sideSubMenu}>
                                <li><a href="/">برترین سریال ها</a></li>
                                <li><a href="/">سریال دوبله فارسی</a></li>
                                <li><a href="/">سریال هندی</a></li>
                                <li><a href="/">250 سریال برتر IMDB</a></li>
                            </ul>
                        </li>
                        <li><a className='menuItem' href="/">راهنمای دانلود</a></li>
                        <li><a className='menuItem' href="/">حمایت مالی</a></li>
                        <li><a className='menuItem' href="/">درخواست فیلم و سریال</a></li>
                        <li><a className='menuItem' href="/">تماس با ما</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Header;