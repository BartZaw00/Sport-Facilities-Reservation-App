import { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { GiTennisCourt, GiGrass } from "react-icons/gi";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";

import {
  SportFacilityCalendar,
  SportFacilityDetail,
  SportFacilityHeader,
} from "../components";
import { ImageGrid, ReservationForm } from "../containers";

const SportFacility = ({ handleModalOpenClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const facility = {
    name: "Boisko Piłkarskie",
    address: "Rajdowa 18, Łódź",
    type: "Orlik",
    surface: "Sztuczna trawa",
    hours: "8:00 - 22:00",
    description:
      "Boisko Piłkarskie typu Orlik to obiekt sportowy znajdujący się przy ulicy Rajdowej 18 w Łodzi. Boisko wyposażone jest w sztuczną trawę, co pozwala na grę w piłkę nożną przez większą część roku. Obiekt jest dostępny dla ludzi od godziny 8:00 do 22:00, co pozwala na organizację treningów czy meczów o różnych porach dnia. Boisko to idealne miejsce dla miłośników piłki nożnej, którzy chcą aktywnie spędzać czas na świeżym powietrzu.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/4/42/Dygowo_-_Orlik.jpg",
      "http://osir.brzostek.pl/wp-content/uploads/2018/01/kompleks-sportowy-orlik.jpg",
      "https://wadowiceonline.pl/images/stories/ZDJECIA/2020/orlik_jak_nowy_pilkarze_sie_ciesza/orlik.jpg",
      "https://i.gremicdn.pl/image/free/053c6035d72cac423014caa05f887e4c/?t=resize:fill:1200:716,enlarge:1",
      "https://mosirleszno.pl/wp-content/uploads/2017/03/DJI_0813-1.png",
      "https://www.osirmokotow.waw.pl/wp-content/uploads/2019/03/kazimierzowska_orlik006-1024x683.jpg",
    ],
  };

  return (
    <div className="mt-28 px-96 2xl:px-60 xl:px-32 lg:px-6 md:px-4 flex flex-col sm:mt-24">
      <SportFacilityHeader name={facility.name} type={facility.type} />
      <div className="mt-2 flex justify-between sm:mt-4">
        <div className="flex items-center gap-4 md:gap-2 sm:flex-1 sm:justify-between">
          <SportFacilityDetail icon={MdLocationOn} text={facility.address} />
          <SportFacilityDetail icon={GiGrass} text={facility.surface} />
          <SportFacilityDetail icon={IoMdTime} text={facility.hours} />
        </div>
        <button
          className="px-3 py-2 bg-slate-200 flex items-center gap-2 rounded-full hover:bg-slate-300 md:text-sm sm:hidden"
          onClick={handleClick}
        >
          Dodaj do ulubionych{" "}
          {isClicked ? <BsSuitHeartFill color="red" /> : <BsSuitHeart />}
        </button>
      </div>
      <div className="mt-4">
        <ImageGrid
          images={facility.images}
          handleModalOpenClick={handleModalOpenClick}
        />
      </div>
      <div className="my-12 grid grid-cols-3 gap-8 md:grid-cols-1">
        <div className="col-span-2">
          <div className="flex flex-col gap-4">
            <SportFacilityCalendar />
            <p className="px-2">{facility.description}</p>
          </div>
        </div>
        <div className="col-span-1">
          <div className="sticky top-32 px-8 pt-6 pb-10 flex flex-col rounded-2xl bg-my-primary-bg border border-gray-300 shadow-xl md:fixed md:bottom-0 md:left-0 md:top-auto md:w-full md:flex-row md:items-center md:gap-6 md:py-2 md:rounded-none md:z-50">
            <ReservationForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportFacility;
