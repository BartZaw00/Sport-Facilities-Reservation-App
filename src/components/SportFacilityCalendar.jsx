import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/pl";
import "react-big-calendar/lib/css/react-big-calendar.css";

const SportFacilityCalendar = () => {
  const [date, setDate] = useState(new Date());

  const handleOnChange = (date) => {
    setDate(date);
  };

  const localizer = momentLocalizer(moment);

  const events = [
    {
      start: new Date(2023, 2, 25, 10, 0),
      end: new Date(2023, 2, 25, 11, 0),
      title: "Rezerwacja kortu tenisowego",
    },
    {
      start: new Date(2023, 2, 24, 16, 0),
      end: new Date(2023, 2, 24, 18, 0),
      title: "Rezerwacja boiska do piłki nożnej",
    },
  ];

  return (
    <div className="flex justify-center mt-4">
      <Calendar
        onChange={handleOnChange}
        value={date}
        minDate={new Date()}
        formatShortWeekday={(locale, date) => moment(date).format("dd")}
        messages={{
          next: "Następny",
          previous: "Poprzedni",
          today: "Dziś",
          month: "Miesiąc",
          week: "Tydzień",
          day: "Dzień",
          agenda: "Agenda",
          date: "Data",
          time: "Czas",
          event: "Wydarzenie",
          noEventsInRange: "Brak wydarzeń do wyświetlenia",
        }}
        culture="pl"
        events={events}
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};


export default SportFacilityCalendar;
