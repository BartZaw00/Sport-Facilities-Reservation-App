import React, { useContext, useState } from "react";
import { ModalContext } from "../../../App";
import { useNavigate } from "react-router-dom";
import { deleteReservation } from "../../../services/ReservationService";
import moment from "moment";

const ReservationCard = ({ reservation, setIsLoading, user, fetchReservationsByUser, setReservations }) => {

  const { startTime, endTime, sportFacility } = reservation;
  const formattedDate = moment(startTime).format("D MMMM YYYY");
  const formattedStartTime = moment(startTime).format("HH:mm");
  const formattedEndTime = moment(endTime).format("HH:mm");

  const { setIsModalOpen } = useContext(ModalContext);

  const [isDeleting, setIsDeleting] = useState(false);

  const navigate = useNavigate();

  const handleDeleteConfirmation = () => {
    setIsDeleting(true);
  };

  const handleDeleteCancel = () => {
    setIsDeleting(false);
  };

  const handleDelete = () => {
    setIsDeleting(false);

    deleteReservation(reservation.reservationId)
      .then(() => {
        setIsLoading(true);
        setTimeout(() => fetchReservationsByUser(user.id).then((data) => {
            setReservations(data);
            setIsLoading(false);
          }), 800);
      })
      .catch((error) => console.error(error))
      .finally(() => setIsDeleting(false));
  };

  const handleSportFacilityClick = (id) => {
    setIsModalOpen(false);
    navigate(`/sport-facility/${id}`);
  };

  return (
    <div className="flex items-center bg-white rounded-lg shadow-md p-4 mb-4 sm:px-0">
      <div className="mx-5 flex items-center justify-around gap-16 xl:flex-col xl:items-stretch xl:gap-4">
        <div className="w-[150px] min-w-[150px] xl:w-full sm:min-w-[100px] aspect-[3/2] overflow-hidden">
          <img
            className="w-full h-full rounded-lg cursor-pointer"
            src={sportFacility.photos[0].photoUrl}
            alt="Obiekt Sportowy"
            onClick={() =>
              handleSportFacilityClick(sportFacility.sportFacilityId)
            }
          />
        </div>
        <div className="flex justify-around gap-16 xl:justify-between xl:gap-4">
          <div className="min-w-[100px] xl:flex-1 xl:text-center">
            <div className="text-lg text-my-gray mb-1 sm:text-base">Data:</div>
            <span className="text-xs font-bold">{formattedDate}</span>
            <br />
            <span className="text-xs font-bold">
              {formattedStartTime} - {formattedEndTime}
            </span>
          </div>
          <div className="min-w-[105px] xl:flex-1 xl:text-center">
            <div className="text-lg text-my-gray mb-1 sm:text-base">Adres:</div>
            <span className="text-xs font-bold">{sportFacility.address}</span>
            <br />
            <span className="text-xs font-bold">{sportFacility.city}</span>
          </div>
          <div className="xl:flex-1 xl:text-center sm:hidden">
            <div className="text-lg text-my-gray mb-1">Obiekt:</div>
            <span className="text-xs font-bold">{sportFacility.type.name}</span>
          </div>
        </div>
        {isDeleting ? (
          <div className="flex flex-col items-center gap-3 xl:min-h-[80px]">
            <div className="text-center sm:text-sm">
              Czy na pewno chcesz usunąć rezerwację?
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                className="px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 active:bg-red-800 focus:border-red-800"
                onClick={handleDelete}
              >
                Tak
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-gray-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-800 focus:border-gray-800"
                onClick={handleDeleteCancel}
              >
                Cofnij
              </button>
            </div>
          </div>
        ) : (
          <div className="flex gap-3 xl:flex-col">
            <button
              type="button"
              className="px-4 py-2 bg-my-primary border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-my-primary-hover active:bg-my-primary-active"
            >
              Edytuj
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 active:bg-red-800 focus:border-red-800"
              onClick={handleDeleteConfirmation}
            >
              Usuń
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReservationCard;