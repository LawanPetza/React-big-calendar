import React from "react";
import "./Calendar.css";
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css"


// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.

BigCalendar.momentLocalizer(moment); // or globalizeLocalizer


const MyCalendar = props => (
  <div style = {{height: 600, color: "white", background: "black", fontSize:"1rem" }}>
    <BigCalendar
      events={[
        {
            title: "Tom Walsh",
            start: new Date(2018, 6, 27), 
            end: new Date(2018, 6, 27), 
            allDay: false 
        },
        {
            title: "Paul Lover, Will Pittman",
            start: new Date(2018, 6, 28), 
            end: new Date(2018, 6, 28), 
            allDay: false 
        },
        {
            title: "Kevin Bidges, Chris Feeree",
            start: new Date(2018, 7, 3), 
            end: new Date(2018, 7, 3), 
            allDay: false 
        },
        {
            title: "Doug Williams, DT",
            start: new Date(2018, 7, 4), 
            end: new Date(2018, 7, 4), 
            allDay: false 
        },
        {
            title: "Jay Corriher, David Whitman",
            start: new Date(2018, 7, 10), 
            end: new Date(2018, 7, 10), 
            allDay: false 
        },
        {
            title: "Katie Oakes, Parker Foley",
            start: new Date(2018, 7, 11), 
            end: new Date(2018, 7, 11), 
            allDay: false 
        },

      ]}

      step={60}
      view='month'
      views={['month']}
      onView={() => {}}
  
    />
  </div>
);




export default MyCalendar;