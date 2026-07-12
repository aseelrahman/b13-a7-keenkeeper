'use client'

import { createContext, useState } from "react";

export const TimeLineContext = createContext(null)

const TimeLineProvider = ({children}) => {

    const [timeLines, setTimeLines] = useState([])
    const data = {
        timeLines,
        setTimeLines,
    }
    return (
        <TimeLineContext.Provider value={data}>
            {children}
        </TimeLineContext.Provider>
    );
};

export default TimeLineProvider ;