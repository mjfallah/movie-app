import React from 'react';
import ReactTooltip from 'react-tooltip';
import Invasion from "../../assets/Updated/Invasion.jpg";
import swagger from "../../assets/Updated/swagger.jpg";
import TheExpanse from "../../assets/Updated/TheExpanse.jpg";

import styles from "./UpdatedSeries.module.css";


const UpdatedSeries = () => {
    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <div>
                    <span className={styles.icon}>
                        <i className="fas fa-sync fa-2x"></i>
                    </span>
                    <span> سریال های بروز شده </span>
                </div>
                <div>
                    <a href="/">آرشیو سریال ها</a>
                </div>
            </div>
            <a href='/' className={styles.item} data-tip="دانلود سریال Invasion" data-for="invasion">
                <img src={Invasion} alt="updated" />
                <p>قسمت آخر فصل اول اضافه شد</p>
                <ReactTooltip place="right" id="invasion" type="light" effect="solid" offset={{left: -7}} border borderColor="black"/>
            </a>
            <a href='/' className={styles.item} data-tip="دانلود سریال Swagger" data-for="swagger">
                <img src={swagger} alt="updated" />
                <p>قسمت 09  فصل اول اضافه شد</p>
                <ReactTooltip place="right" id="swagger" type="light" effect="solid" offset={{left: -7}} border borderColor="black"/>
            </a>
            <a href='/' className={styles.item} data-tip="دانلود سریال The Expanse" data-for="expanse">
                <img src={TheExpanse} alt="updated" />
                <p>قسمت 03  فصل دوم اضافه شد</p>
                <ReactTooltip place="right" id="expanse" type="light" effect="solid" offset={{left: -7}} border borderColor="black"/>
            </a>
            <a href='/' className={styles.item} data-tip="دانلود سریال Invasion" data-for="invasion">
                <img src={Invasion} alt="updated" />
                <p>قسمت آخر فصل اول اضافه شد</p>
                <ReactTooltip place="right" id="invasion" type="light" effect="solid" offset={{left: -7}} border borderColor="black"/>
            </a>
            <a href='/' className={styles.item} data-tip="دانلود سریال Swagger" data-for="swagger">
                <img src={swagger} alt="updated" />
                <p>قسمت 09  فصل اول اضافه شد</p>
                <ReactTooltip place="right" id="swagger" type="light" effect="solid" offset={{left: -7}} border borderColor="black"/>
            </a>
            <a href='/' className={styles.item} data-tip="دانلود سریال The Expanse" data-for="expanse">
                <img src={TheExpanse} alt="updated" />
                <p>قسمت 03  فصل دوم اضافه شد</p>
                <ReactTooltip place="right" id="expanse" type="light" effect="solid" offset={{left: -7}} border borderColor="black"/>
            </a>
            <a href='/' className={styles.item} data-tip="دانلود سریال Invasion" data-for="invasion">
                <img src={Invasion} alt="updated" />
                <p>قسمت آخر فصل اول اضافه شد</p>
                <ReactTooltip place="right" id="invasion" type="light" effect="solid" offset={{left: -7}} border borderColor="black"/>
            </a>
            <a href='/' className={styles.item} data-tip="دانلود سریال Swagger" data-for="swagger">
                <img src={swagger} alt="updated" />
                <p>قسمت 09  فصل اول اضافه شد</p>
                <ReactTooltip place="right" id="swagger" type="light" effect="solid" offset={{left: -7}} border borderColor="black"/>
            </a>
            <a href='/' className={styles.item} data-tip="دانلود سریال The Expanse" data-for="expanse">
                <img src={TheExpanse} alt="updated" />
                <p>قسمت 03  فصل دوم اضافه شد</p>
                <ReactTooltip place="right" id="expanse" type="light" effect="solid" offset={{left: -7}} border borderColor="black"/>
            </a>
        </div>
    );
};

export default UpdatedSeries;