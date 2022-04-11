import React, { useContext, useEffect } from 'react';
import SeriesItem from './SeriesItem';
import {SeriesSchedule} from "./SeriesWeeklyContextProvider";
import { getDay , showEachDayANDBackgroundColorHandler , selectDay } from './Day';
import styles from "./SeriesWeeklyTabloid.module.css";

const SeriesWeeklyTabloid = () => {

    const [sat , sun , mon , tue , wed , thr , fri] = useContext(SeriesSchedule);

    const currentDay= getDay();

    useEffect(()=>{
        document.getElementById(currentDay).style.display="block";
        selectDay(currentDay);
    },[currentDay])
    
    return (
        <div className={styles.container} id="weeklyContainer">
            <div className={styles.days} >
                <ul id="days">
                    <li dataname="Saturday" className='dayItem' onClick={showEachDayANDBackgroundColorHandler} >شنبه</li>
                    <li dataname="Sunday" className='dayItem' onClick={showEachDayANDBackgroundColorHandler} >یکشنبه</li>
                    <li dataname="Monday" className='dayItem' onClick={showEachDayANDBackgroundColorHandler} >دوشنبه</li>
                    <li dataname="Tuesday" className='dayItem' onClick={showEachDayANDBackgroundColorHandler} >سه شنبه</li>
                    <li dataname="Wednesday" className='dayItem' onClick={showEachDayANDBackgroundColorHandler} >چهار شنبه</li>
                    <li dataname="Thursday" className='dayItem' onClick={showEachDayANDBackgroundColorHandler} >پنجشنبه</li>
                    <li dataname="Friday" className='dayItem' onClick={showEachDayANDBackgroundColorHandler} >جمعه</li>
                </ul>
            </div>
            <div id="Saturday" className={`dayContainer ${styles.scheduleContainer}`}><SeriesItem dayInfo = {sat} /></div>
            <div id="Sunday" className={styles.scheduleContainer}><SeriesItem dayInfo = {sun} /></div>
            <div id="Monday" className={styles.scheduleContainer}><SeriesItem dayInfo = {mon} /></div>
            <div id="Tuesday" className={styles.scheduleContainer}><SeriesItem dayInfo = {tue} /></div>
            <div id="Wednesday" className={styles.scheduleContainer}><SeriesItem dayInfo = {wed} /></div>
            <div id="Thursday" className={styles.scheduleContainer}><SeriesItem dayInfo = {thr} /></div>
            <div id="Friday" className={styles.scheduleContainer}><SeriesItem dayInfo = {fri} /></div> 
        </div>
    );
};

export default SeriesWeeklyTabloid;