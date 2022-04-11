import React, { useState } from 'react';
import styles from "./AdvancedSearch.module.css";

const AdvancedSearch = () => {

    const [formData , setFormData]=useState({
        type : "",
        genre : "",
        country : "",
        year : 2021,
        metaCritic : "",
        imdb : "",
        isDouble : false,
        isSubtitled : false
    });

    const changeHandler = event => {
        (event.target.type==="checkbox") ? 
        setFormData({...formData,[event.target.name]:!(formData[event.target.name])}):
        setFormData({...formData,[event.target.name]:(event.target.value)})
    };

    const dropDownHandler = ()=> {
        const form = document.getElementById("advancedSearchForm");
        const arrow = document.getElementById("arrow");
        if(form.getAttribute("display-type") === "off") {
            form.style.maxHeight= "600px";
            form.setAttribute("display-type","on");
            arrow.className="fas fa-sort-up fa-lg";
        }
        else if (form.getAttribute("display-type") === "on") {
            form.style.maxHeight= "0";
            form.setAttribute("display-type","off");
            arrow.className="fas fa-sort-down fa-lg";
        };
    };

    return (
        <div className={styles.container}>
            <div className={styles.headContainer}>
                <div className={styles.title}>
                    <i className="fas fa-search"></i>
                    <p>جستجو پیشرفته</p> 
                </div>
                <button type="button" onClick={dropDownHandler}>
                <i className="fas fa-sort-down fa-lg" id="arrow"></i>
                </button>
            </div>
            <form action="/" method="get" className={styles.searchForm} id="advancedSearchForm" display-type="off">
                <select name="type" id="adv_type" value={formData.type} onChange={changeHandler}>
                    <option value="" disabled  hidden>نوع</option>
                    <option value="post">فیلم</option>
                    <option value="series">سریال</option>
                </select>
                <select name="genre" id="adv_genre" value={formData.genre} onChange={changeHandler}>
                    <option value="" disabled hidden>ژانر</option>
                    <option value="Film-Noir">Film-Noir</option>
                    <option value="Reality-TV">Reality-TV</option>
                    <option value="اکشن">اکشن</option>
                    <option value="انیمیشن">انیمیشن</option>
                    <option value="بیوگرافی">بیوگرافی</option>
                    <option value="تاریخی">تاریخی</option>
                    <option value="ترسناک">ترسناک</option>
                    <option value="جنایی">جنایی</option>
                    <option value="جنگی">جنگی</option>
                    <option value="خانوادگی">خانوادگی</option>
                    <option value="خبری">خبری</option>
                    <option value="درام">درام</option>
                    <option value="عاشقانه">عاشقانه</option>
                    <option value="علمی و تخیلی">علمی و تخیلی</option>
                    <option value="فانتزی">فانتزی</option>
                    <option value="فیلم نوآر">فیلم نوآر</option>
                    <option value="کمدی">کمدی</option>
                    <option value="کوتاه">کوتاه</option>
                    <option value="ماجراجویی">ماجراجویی</option>
                    <option value="مستند">مستند</option>
                    <option value="معمایی">معمایی</option>
                    <option value="موزیک">موزیک</option>
                    <option value="هیجان انگیز">هیجان انگیز</option>
                    <option value="ورزشی">ورزشی</option>
                    <option value="وسترن">وسترن</option>
                </select>
                <select name="country" id="adv_country" value={formData.country} onChange={changeHandler}>
                    <option value="" disabled hidden>کشور </option>
                    <option value="Canada">Canada</option>
                    <option value="France">France</option>
                    <option value="Germany">Germany</option>
                    <option value="Iceland">Iceland</option>
                    <option value="Iran">Iran</option>
                    <option value="Italy">Italy</option>
                    <option value="Japan">Japan</option>
                    <option value="Mexico">Mexico</option>
                    <option value="South Korea">South Korea</option>
                    <option value="Spain">Spain</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                </select>
                <label htmlFor="years-number-to" className={styles.year}>
                    سال انتشار
                    <input type="number" name="year" id="years-number-to" value={formData.year} onChange={changeHandler}/>
                </label>
                <select name="metaCritic" id="adv_critic" value={formData.metaCritic} onChange={changeHandler} >
                    <option value="" disabled hidden>نمره منتقدین</option>
                    <option value="90">بالای 90</option>
                    <option value="80">بالای 80</option>
                    <option value="70">بالای 70</option>
                    <option value="60">بالای 60</option>
                    <option value="50">بالای 50</option>
                </select>
                <select name="imdb" id="for-imdb"  value={formData.imdb} onChange={changeHandler}>
                    <option value="" disabled hidden>امتیاز IMDb</option>
                    <option value="9">بالای 9</option>
                    <option value="8">بالای 8</option>
                    <option value="7">بالای 7</option>
                    <option value="6">بالای 6</option>
                    <option value="5">بالای 5</option>
                    <option value="4">بالای 4</option>
                </select>
                <label htmlFor="id_dub" className={styles.checkBox}> دوبله فارسی
                    <input type="checkbox" name="isDouble" id="id_dub" checked={formData.isDouble} onChange={changeHandler} />
                </label>
                <label htmlFor="id_sub" className={styles.checkBox}> زیرنویس فارسی چسبیده
                    <input type="checkbox" name="isSubtitled" id="id_sub" checked={formData.isSubtitled} onChange={changeHandler} />
                </label>
                <button type="submit">جستجو کن</button>
            </form>
        </div>
    );
};

export default AdvancedSearch;