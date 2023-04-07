import { useEffect, useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { GiTennisCourt, GiGrass } from "react-icons/gi";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { LoadingSpinner } from "../../components/sharedComponents";
import {
  SportFacilityCalendar,
  SportFacilityDetail,
  SportFacilityGallery,
  SportFacilityHeader,
  SportFacilityReservationForm,
} from "./sportFacilityContent";
import Map from "../map/Map";

const SportFacility = ({ id }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [sportFacility, setSportFacility] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_SPORT_FACILITY_URL}/getById?sportFacilityID=${id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setSportFacility(data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="mt-28 px-96 2xl:px-60 xl:px-32 lg:px-6 md:px-4 flex flex-col sm:mt-24">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <SportFacilityHeader
            name={sportFacility.name}
            type={sportFacility.type.name}
          />
          <div className="mt-2 flex justify-between sm:mt-4">
            <div className="flex items-center gap-4 md:gap-2 sm:flex-1 sm:justify-between">
              <SportFacilityDetail
                icon={MdLocationOn}
                text={sportFacility.address}
              />
              <SportFacilityDetail
                icon={GiGrass}
                text={sportFacility.type.surface}
              />
              <SportFacilityDetail
                icon={IoMdTime}
                text={`${sportFacility.openTime.slice(
                  0,
                  -3
                )} - ${sportFacility.closeTime.slice(0, -3)}`}
              />
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
            <SportFacilityGallery images={sportFacility.photos} />
          </div>
          <div className="mt-12 mb-20 grid grid-cols-3 gap-8 md:grid-cols-1">
            <div className="col-span-2">
              <div className="flex flex-col gap-4">
                <h2 className="px-2 text-2xl font-bold">Opis</h2>
                <p className="px-2">{sportFacility.description}</p>
                <h2 className="mt-4 px-2 text-2xl font-bold">Rezerwacje</h2>
                <SportFacilityCalendar />
                <h2 className="mt-4 px-2 text-2xl font-bold">Lokalizacja</h2>
                {/* <Map sportFacilities={sportFacility} homePage={false} />  */}
              </div>
            </div>
            <div className="col-span-1">
              <div className="sticky top-32 px-8 pt-6 pb-10 flex flex-col rounded-2xl bg-my-primary-bg border border-gray-300 shadow-xl md:fixed md:bottom-0 md:left-0 md:top-auto md:w-full md:flex-row md:items-center md:gap-6 md:px-4 md:py-2 md:rounded-none md:z-50">
                <SportFacilityReservationForm />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SportFacility;
