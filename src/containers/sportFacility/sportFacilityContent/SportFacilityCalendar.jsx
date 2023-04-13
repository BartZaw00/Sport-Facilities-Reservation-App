import React, { useEffect, useState } from "react";
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

const SportFacilityCalendar = ({ id }) => {
  const [date, setDate] = useState(new Date());
  const [reservations, setReservations] = useState([]);

  const handleOnChange = (date) => {
    setDate(date);
  };

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

  useEffect(() => {
    fetchReservationsBySportFacility();
    setTimeout(() => {
      console.log(reservations);
    }, 2000);
  }, [id]);

  const fetchReservationsBySportFacility = async () => {
    fetch(
      `${
        import.meta.env.VITE_RESERVATION_URL
      }/getBySportFacility?sportFacilityID=${id}`
    )
      .then((response) => response.json())
      .then((data) => {
        const events = data.map((reservation) => {
          return {
            start: new Date(reservation.startTime),
            end: new Date(reservation.endTime),
            title: `Rezerwujący: ${reservation.user.username}`,
          };
        });
        setReservations(events);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="flex justify-center mt-4">
      <Calendar
        onChange={handleOnChange}
        value={date}
        minDate={new Date()}
        messages={messages}
        events={reservations}
        localizer={localizer}
        style={{ height: 500 }}
        formats={{
          timeGutterFormat: "H:mm",
          eventTimeRangeFormat: ({ start, end }, culture, localizer) => {
            const formattedStart = localizer.format(start, "H:mm", culture);
            const formattedEnd = localizer.format(end, "H:mm", culture);
            return `${formattedStart} - ${formattedEnd}`;
          },
        }}
      />
    </div>
  );
};

export default SportFacilityCalendar;
