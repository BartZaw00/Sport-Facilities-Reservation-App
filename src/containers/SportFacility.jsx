import { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { GiTennisCourt, GiGrass } from "react-icons/gi";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";

import { FacilityDetail, SportFacilityHeader } from "../components";
import { ImageGrid } from "../containers";

const SportFacility = () => {
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor aliquet felis, vel ultrices augue vestibulum at. Proin sodales velit justo, sed facilisis augue molestie ac. Sed rhoncus a est id dapibus. Nulla facilisi. Sed pulvinar nibh quis metus eleifend ullamcorper. Praesent eu sollicitudin quam. Fusce sit amet iaculis elit, sed interdum nisi. Mauris in sapien odio. Nullam feugiat dolor eu metus venenatis, a elementum elit aliquam. Fusce euismod, quam vitae bibendum sagittis, magna mauris vestibulum mauris, ac feugiat dolor nunc id lacus. Nunc vel pharetra lectus. Vivamus et bibendum orci, a laoreet eros.",
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
        <div className="flex items-center gap-4 sm:flex-1 sm:justify-between sm:gap-2">
          <FacilityDetail icon={MdLocationOn} text={facility.address} />
          <FacilityDetail icon={GiGrass} text={facility.surface} />
          <FacilityDetail icon={IoMdTime} text={facility.hours} />
        </div>
        <button
          className="px-3 py-2 bg-slate-200 flex items-center gap-2 rounded-full hover:bg-slate-300 sm:hidden"
          onClick={handleClick}
        >
          Dodaj do ulubionych{" "}
          {isClicked ? <BsSuitHeartFill color="red" /> : <BsSuitHeart />}
        </button>
      </div>
      <div className="mt-4">
        <ImageGrid images={facility.images} />
      </div>
      <div className="flex items-center mt-4">
        <GiTennisCourt className="w-5 h-5 mr-2" />
        <p>{facility.description}</p>
      </div>
      <div className="flex items-center mt-2">
        <MdLocationOn className="w-5 h-5 mr-2" />
        <p>{facility.address}</p>
      </div>
    </div>
  );
};

export default SportFacility;
