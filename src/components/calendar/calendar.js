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
        {
            title: "DC, Shay Lovett, Danny Platt",
            start: new Date(2018, 7, 14), 
            end: new Date(2018, 7, 14), 
            allDay: false 
        },
        {
            title: "Shannon Lee, DT",
            start: new Date(2018, 7, 17), 
            end: new Date(2018, 7, 17), 
            allDay: false 
        },
        {
            title: "David Griffin, Steve Simpson",
            start: new Date(2018, 7, 18), 
            end: new Date(2018, 7, 18), 
            allDay: false 
        },
        {
            title: "Chris Peace and band",
            start: new Date(2018, 7, 24), 
            end: new Date(2018, 7, 24), 
            allDay: false 
        },
        {
            title: "Don Eidman, DT, Al Lemmond",
            start: new Date(2018, 7, 25), 
            end: new Date(2018, 7, 25), 
            allDay: false 
        },
        {
            title: "mike Nolan, Louis Beeler, Bernie Swayngim",
            start: new Date(2018, 7, 31), 
            end: new Date(2018, 7, 31), 
            allDay: false 
        },
        {
            title: "Chad Bowden, DT, and Rick Spreitzer",
            start: new Date(2018, 8, 1), 
            end: new Date(2018, 8, 1), 
            allDay: false 
        },
        {
            title: "Darcie Richardson, Paul Lover",
            start: new Date(2018, 8, 8), 
            end: new Date(2018, 8, 8), 
            allDay: false 
        },
        {
            title: "Kevin Marshall, DT, Jamie Kay",
            start: new Date(2018, 8, 14), 
            end: new Date(2018, 8, 14), 
            allDay: false 
        },
        {
            title: "Scott Bianchi, DT",
            start: new Date(2018, 8, 15), 
            end: new Date(2018, 8, 15), 
            allDay: false 
        },
        {
            title: "Herschel Brown, Barb Gardiner, DT",
            start: new Date(2018, 8, 21), 
            end: new Date(2018, 8, 21), 
            allDay: false 
        },
        {
            title: "Kat, DC, Jack Lawrence",
            start: new Date(2018, 8, 22), 
            end: new Date(2018, 8, 22), 
            allDay: false 
        },
        {
            title: "Lou Breaux, Randy Higgins, Marie Calabro, DT",
            start: new Date(2018, 8, 28), 
            end: new Date(2018, 8, 28), 
            allDay: false 
        },
        {
            title: "Kathy Hall, DT, Chuck Johnson",
            start: new Date(2018, 8, 29), 
            end: new Date(2018, 8, 29), 
            allDay: false 
        },
        {
            title: "DC, Chris English, DT",
            start: new Date(2018, 9, 5), 
            end: new Date(2018, 9, 5), 
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