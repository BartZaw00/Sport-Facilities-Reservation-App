import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { DatePicker, TimePicker } from "antd";
import locale from "antd/es/date-picker/locale/pl_PL";
import moment from "moment";
import Cookies from "universal-cookie";
import useAuth from "../../../hooks/useAuth";
import { ModalContext } from "../../../App";
import { FormButton, FormSelect } from "../../../components/formComponents";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handleChange = (event) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
};

const SportFacilityReservationForm = ({ sportFacility }) => {
  const { user } = useAuth();

  const { setIsModalOpen, setSelectedOption } = useContext(ModalContext);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("");

  const handleReservation = () => {
    if (!user) {
      setIsModalOpen(true);
      setSelectedOption("login");
      // TODO: Add code to handle reservation
    }
  };

  const durationOptions = [
    { label: "30 minut", value: "30" },
    { label: "1 godzina", value: "60" },
    { label: "1 godzina 30 minut", value: "90" },
    { label: "2 godziny", value: "120" },
    { label: "2 godziny 30 minut", value: "150" },
    { label: "3 godziny", value: "180" },
  ];

  const isMediumScreen = useMediaQuery("(max-width: 767px)");
  const isSmallScreen = useMediaQuery("(max-width: 515px)");

  const disabledDate = (current) => {
    // Disable dates before yesterday
    return current && current < moment().subtract(1, "days").endOf("day");
  };

  const disabledTime = (now) => {
    return {
      disabledHours: () => {
        const hours = [];
        for (let i = 0; i < 24; i++) {
          if (
            i < parseInt(sportFacility.openTime.slice(0, -6)) ||
            i > parseInt(sportFacility.closeTime.slice(0, -6))
          ) {
            hours.push(i);
          }
        }
        return hours;
      },
    };
  };

  return (
    <>
      <div className="flex flex-col gap-4 md:gap-2">
        <label
          className="text-lg font-medium md:text-xs hidden md:block"
          htmlFor="date"
        >
          Data:
        </label>
        <label
          className="text-lg font-medium md:text-xs md:hidden"
          htmlFor="date"
        >
          Wybierz datę:
        </label>
        <DatePicker
          locale={locale}
          id="date"
          onChange={(value) => setDate(value)}
          format="DD.MM.YYYY"
          disabledDate={disabledDate}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-my-primary bg-white text-gray-900 shadow-sm"
        />
      </div>
      <div className="flex flex-col gap-4 mt-6 md:mt-0 md:gap-2">
        <label
          className="text-lg font-medium md:text-xs hidden md:block"
          htmlFor="time"
        >
          Godzina:
        </label>
        <label
          className="text-lg font-medium md:text-xs md:hidden"
          htmlFor="time"
        >
          Wybierz godzinę rezerwacji:
        </label>
        <TimePicker
          locale={locale}
          id="time"
          format="HH:mm"
          disabledTime={disabledTime}
          onChange={(value) => setTime(value)}
          minuteStep={30}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-my-primary bg-white text-gray-900 shadow-sm"
        />
      </div>
      <div className="mt-6 md:mt-0">
        <FormSelect
          label={isMediumScreen ? "Czas:" : "Wybierz czas trwania rezerwacji:"}
          id="duration"
          options={durationOptions}
          className={`border border-gray-300 rounded-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-my-primary ${
            isMediumScreen ? "text-xs" : "text-lg"
          } ${isSmallScreen && "w-12 h-10"}`}
          labelClassName={
            isMediumScreen ? "text-xs font-medium" : "text-lg font-medium"
          }
          divClassName="flex flex-col gap-4 md:gap-2"
          onChange={(event) => setDuration(event.target.value)}
          value={duration}
        />
      </div>
      <div className="mt-8  md:mt-0">
        <FormButton
          onClick={handleReservation}
          className="w-full px-4 py-4 bg-my-primary text-white font-bold rounded-lg hover:bg-my-primary-hover focus:outline-none md:py-3 md:px-6"
        >
          Rezerwuj
        </FormButton>
      </div>
    </>
  );
};

export default SportFacilityReservationForm;
