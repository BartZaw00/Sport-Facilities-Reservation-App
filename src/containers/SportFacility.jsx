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
            <p className="px-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit culpa repudiandae libero amet voluptatum. Quia aliquid consequatur unde quidem voluptates maxime sint veniam, dolore, fuga recusandae ullam corrupti non. Velit iusto dolorem est dolorum obcaecati molestias odit magni quidem aliquam delectus reprehenderit saepe error mollitia numquam voluptatum expedita adipisci incidunt, sapiente cumque deserunt repudiandae sint? Eum quia officia officiis beatae, saepe laboriosam dolorem possimus quam accusantium atque maiores id? Aliquam cumque, a, in velit optio consectetur autem perspiciatis quidem suscipit nam ad maiores molestias ipsa. Voluptatem, corporis ipsa alias cumque enim deleniti fugit ducimus qui reiciendis exercitationem ea dolore sequi velit eaque cupiditate modi saepe deserunt autem sint tenetur corrupti sed, odio laborum tempora! Amet nisi quae maiores suscipit consequuntur porro libero dolorem repellendus nostrum ad aliquid, eum sunt fugit explicabo quod accusamus, ut velit debitis ullam illum! Animi architecto delectus officia quaerat. Ducimus sunt tempora enim totam in accusantium non asperiores sequi similique modi cupiditate, nostrum quae, aperiam natus sint deleniti eligendi velit vitae alias illum amet tenetur reiciendis beatae! Saepe ratione dolor nostrum rerum magni quaerat ut et natus similique cum excepturi ipsa autem doloribus eos perferendis porro alias ex, dicta beatae? Dignissimos, ratione eligendi ex fuga est earum accusamus, laborum, modi rem excepturi fugit quisquam ipsa vero commodi nam? Exercitationem totam est quasi ex cumque inventore, vitae nesciunt iure obcaecati. Quisquam fugit tempore mollitia cumque suscipit maxime dolore rem sint, esse voluptates expedita sapiente praesentium! Quia sequi, ex quaerat perferendis quasi error qui, corporis nihil a quod ipsam? Vero voluptatibus dolor sit eveniet, in unde labore deleniti nihil delectus! Dolore, asperiores. Recusandae, accusantium earum dolore tempora cumque illo fuga perspiciatis ipsa explicabo ad, blanditiis iusto minus vero hic, deserunt ipsum voluptatum praesentium dolor quidem non placeat minima vitae. Asperiores itaque dignissimos fugiat, a officia magnam tempore dicta nulla quibusdam quam perspiciatis facere quasi vitae, voluptatem eveniet nostrum, cum ipsum rerum illum! Perferendis non repellendus aliquam ipsa, libero omnis cumque itaque eveniet et? Labore autem praesentium natus animi doloribus a reiciendis magni possimus hic odit, provident exercitationem obcaecati explicabo, quia nisi! Perspiciatis, vitae exercitationem. Ab excepturi delectus minus velit saepe voluptates exercitationem eligendi provident, tempore dolore? Similique et consequuntur qui sequi perferendis nulla enim sed, nemo fugiat vel, aperiam alias nihil. Deleniti delectus in aliquam at quibusdam ratione voluptate odio omnis cum, ipsam architecto voluptas maxime esse laborum doloremque libero dolorem illum quas ipsum, totam itaque sed adipisci? Voluptas quasi, laborum inventore illum ratione numquam quis eveniet excepturi doloremque dicta, aliquid eum. Est dolore quae unde quaerat? Ea error vel cupiditate voluptatem fuga, ipsum nesciunt, ratione architecto nemo reprehenderit dolores ullam debitis. Aspernatur aut magnam molestias! Consectetur mollitia, provident delectus iste consequuntur est nam itaque adipisci, incidunt esse odit ducimus commodi, temporibus amet laudantium at similique dignissimos inventore ad. Esse aperiam facilis suscipit ducimus minima quo illo nisi eius ipsa optio fuga debitis rerum, obcaecati sapiente in porro libero officia est dignissimos dicta ipsum impedit! Quam facilis fugiat enim nobis a! Exercitationem nemo consequuntur est recusandae accusantium asperiores.</p>
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
