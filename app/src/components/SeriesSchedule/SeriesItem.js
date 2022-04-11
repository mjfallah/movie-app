import React from 'react';

import styles from "./SeriesItem.module.css";

const SeriesItem = ({dayInfo}) => {

    return (
        <div className={styles.container} >
            { dayInfo && dayInfo.map(item =>
                <div key={item.id} className={ `itemContainer ${styles.subContainer}`} >
                    <a href="/">
                        <img src={item.image} alt="weekly" className={styles.image}/>
                    </a>
                    <div className={styles.info}>
                        <span className={styles.infoSection}>
                            <strong> سریال </strong>
                            <a href="/">{item.name}</a>
                        </span>
                        <span className={styles.infoSection}>
                            <strong> بروزرسانی </strong>
                            قسمت{item.episode}فصل{item.season}اضافه شد
                        </span>
                        <span className={styles.infoSection}>
                            <strong> شبکه </strong>
                            {item.channel}
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SeriesItem;