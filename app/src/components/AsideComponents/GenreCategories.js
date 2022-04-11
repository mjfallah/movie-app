import React from 'react';
import "./GenreCategories.css";

const GenreCategories = () => {

    const displayHandler = event => {
        if (event.target.getAttribute("id") === "moviesButton") {
            document.getElementById("seriesButton").className="";
            document.getElementById("moviesButton").className="activeButton";
            document.getElementById("series").style.display="none";
            document.getElementById("movies").style.display="flex";
        } else {
            document.getElementById("seriesButton").className="activeButton";
            document.getElementById("moviesButton").className="";
            document.getElementById("series").style.display="flex";
            document.getElementById("movies").style.display="none";
        };
    };

    return (
        <div className="container">
            <div className="head">
                <div>
                    <span className="icon">
                        <i className="fas fa-theater-masks fa-2x"></i>
                    </span>
                    <span>تفکیک بر اساس ژانر</span>
                </div>
                <div>
                    <button className="activeButton" onClick={displayHandler} id="moviesButton">فیلم</button>
                    <button onClick={displayHandler} id="seriesButton">سریال</button>
                </div>
            </div>
            <ul id="movies" className="movies">
                    <li><a href="/">Film-Noir</a></li>
                    <li><a href="/">Reality-TV</a></li>
                    <li><a href="/">اکشن</a></li>
                    <li><a href="/">انیمیشن</a></li>
                    <li><a href="/">بیوگرافی</a></li>
                    <li><a href="/">تاریخی</a></li>
                    <li><a href="/">ترسناک</a></li>
                    <li><a href="/">جنایی</a></li>
                    <li><a href="/">جنگی</a></li>
                    <li><a href="/">خانوادگی</a></li>
                    <li><a href="/">خبری</a></li>
                    <li><a href="/">درام</a></li>
                    <li><a href="/">عاشقانه</a></li>
                    <li><a href="/">علمی و تخیلی</a></li>
                    <li><a href="/">فانتزی</a></li>
                    <li><a href="/">فیلم نوآر</a></li>
                    <li><a href="/">کمدی</a></li>
                    <li><a href="/">کوتاه</a></li>
                    <li><a href="/">ماجراجویی</a></li>
                    <li><a href="/">مستند</a></li>
                    <li><a href="/">معمایی</a></li>
                    <li><a href="/">موزیک</a></li>
                    <li><a href="/">هیجان انگیز</a></li>
                    <li><a href="/">ورزشی</a></li>
                    <li><a href="/">وسترن</a></li>
            </ul>
            <ul id="series" className="series">
                <li><a href="/">Game-Show</a></li>
                <li><a href="/">Reality-TV</a></li>
                <li><a href="/">Talk-Show</a></li>
                <li><a href="/">اجتماعی</a></li>
                <li><a href="/">اکشن</a></li>
                <li><a href="/">انیمیشن</a></li>
                <li><a href="/">بیوگرافی</a></li>
                <li><a href="/">تاریخی</a></li>
                <li><a href="/">ترسناک</a></li>
                <li><a href="/">جنایی</a></li>
                <li><a href="/">جنگی</a></li>
                <li><a href="/">خانوادگی</a></li>
                <li><a href="/">درام</a></li>
                <li><a href="/">عاشقانه</a></li>
                <li><a href="/">علمی و تخیلی</a></li>
                <li><a href="/">فانتزی</a></li>
                <li><a href="/">کمدی</a></li>
                <li><a href="/">کوتاه</a></li>
                <li><a href="/">ماجراجویی</a></li>
                <li><a href="/">مستند</a></li>
                <li><a href="/">معمایی</a></li>
                <li><a href="/">موزیک</a></li>
                <li><a href="/">هیجان انگیز</a></li>
                <li><a href="/">ورزشی</a></li>
                <li><a href="/">وسترن</a></li>
            </ul>
        </div>
    );
};

export default GenreCategories;