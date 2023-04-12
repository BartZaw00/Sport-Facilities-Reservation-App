import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.updateLocale("pl", {
  months: [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień",
  ],
  monthsShort: [
    "Sty",
    "Lut",
    "Mar",
    "Kwi",
    "Maj",
    "Cze",
    "Lip",
    "Sie",
    "Wrz",
    "Paź",
    "Lis",
    "Gru",
  ],
  weekdays: [
    "Niedziela",
    "Poniedziałek",
    "Wtorek",
    "Środa",
    "Czwartek",
    "Piątek",
    "Sobota",
  ],
  weekdaysShort: ["Nd.", "Pn.", "Wt.", "Śr.", "Czw.", "Pt.", "Sob."],
  week: {
    dow: 1,
  },
});

const localizer = momentLocalizer(moment);

const SportFacilityCalendar = () => {
  const [date, setDate] = useState(new Date());

  const handleOnChange = (date) => {
    setDate(date);
  };

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

  const messages = {
    allDay: "Cały dzień",
    previous: "Poprzedni",
    next: "Następny",
    today: "Dziś",
    month: "Miesiąc",
    week: "Tydzień",
    day: "Dzień",
    agenda: "Agenda",
    date: "Data",
    time: "Czas",
    event: "Wydarzenie",
    noEventsInRange: "Brak wydarzeń do wyświetlenia",
  };

  
  return (
    <div className="flex justify-center mt-4">
      <Calendar
        onChange={handleOnChange}
        value={date}
        minDate={new Date()}
        messages={messages}
        events={events}
        localizer={localizer}
        style={{ height: 500 }}
        formats={{
          timeGutterFormat: "H:mm",
        }}
      />
    </div>
  );
};

export default SportFacilityCalendar;
