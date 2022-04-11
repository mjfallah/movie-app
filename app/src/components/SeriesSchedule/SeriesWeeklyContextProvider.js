import React, { createContext, useEffect, useState } from 'react';

import {weeklySchedule} from "./WeeklySeriesInfo";

export const SeriesSchedule = createContext();

const SeriesWeeklyContextProvider = ({children}) => {

    const [seriesData , setSeriesData] = useState([]);

    useEffect(()=>{
        setSeriesData(weeklySchedule);
    },[]);

    return (
        <SeriesSchedule.Provider value={seriesData}>
            {children}
        </SeriesSchedule.Provider>
    );
};

export default SeriesWeeklyContextProvider;