import React, { useEffect, useRef } from "react";

const Calendar = () => {
    useEffect(() => {
        if (window.dycalendar) {
            window.dycalendar.draw({
                target:'#dycalendar', 
                dayformat: 'full', 
                type: 'month', 
                monthformat: 'full', 
                highlighttoday: true, 
                prevnextbutton: 'show'
            });
        } else {
            console.error('???');
            }
    }, []);

    return (
        <div className="container">
            <div className="dycalendar" id="dycalendar"></div>
        </div>
    );
};

export default Calendar;
