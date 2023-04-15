import React, { useContext, useEffect, useState } from "react";
import moment from "moment";
import { LoadingSpinner } from "../../../components/sharedComponents";
import useAuth from "../../../hooks/useAuth";
import { ModalContext } from "../../../App";
import { useNavigate } from "react-router-dom";

const ReservationCard = ({ reservation, onEdit, onDelete }) => {
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
    onDelete();
    setIsDeleting(false);
  };

  const handleSportFacilityClick = (id) => {
    setIsModalOpen(false);
    navigate(`/sport-facility/${id}`);
  };

  return (
    <div className="flex items-center bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="mx-5 flex items-center justify-around gap-16">
        <div className="w-[150px] min-w-[150px] aspect-[3/2] overflow-hidden">
          <img
            className="w-full h-full rounded-lg cursor-pointer"
            src={sportFacility.photos[0].photoUrl}
            alt="Obiekt Sportowy"
            onClick={() =>
              handleSportFacilityClick(sportFacility.sportFacilityId)
            }
          />
        </div>
        <div className="flex justify-around gap-16">
          <div className="min-w-[100px]">
            <div className="text-lg text-my-gray mb-1">Data:</div>
            <div className="text-xs font-bold">{formattedDate}</div>
            <div className="text-xs font-bold">
              {formattedStartTime} - {formattedEndTime}
            </div>
          </div>
          <div className="min-w-[105px]">
            <div className="text-lg text-my-gray mb-1">Adres:</div>
            <div className="text-xs font-bold">{sportFacility.address}</div>
            <div className="text-xs font-bold">{sportFacility.city}</div>
          </div>
          <div className="">
            <div className="text-lg text-my-gray mb-1">Obiekt:</div>
            <div className="text-xs font-bold">{sportFacility.type.name}</div>
          </div>
        </div>
        {isDeleting ? (
          <div className="flex flex-col items-center gap-3">
            <div className="text-center">
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
          <div className="flex gap-3">
            <button
              type="button"
              className="px-4 py-2 bg-my-primary border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-my-primary-hover active:bg-my-primary-active"
              onClick={onEdit}
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

const ModalMyReservations = () => {
  const { user } = useAuth();

  const [reservations, setReservations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setIsLoading(true);
      setTimeout(() => fetchReservationsByUser(), 800);
    }
  }, [user?.id]);

  const fetchReservationsByUser = async () => {
    setIsLoading(true);

    fetch(`${import.meta.env.VITE_RESERVATION_URL}/getByUser?userID=${user.id}`)
      .then((response) => response.json())
      .then((data) => {
        setReservations(data);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="flex items-center justify-center">
      {isLoading ? (
        <LoadingSpinner />
      ) : reservations.length > 0 ? (
        <div className="p-6 w-full sm:w-5/6 md:w-3/4 lg:w-1/2">
          {reservations.map((reservation) => (
            <ReservationCard
              key={reservation.reservationId}
              reservation={reservation}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Nie masz jeszcze żadnych rezerwacji.</p>
      )}
    </div>
  );
};

export default ModalMyReservations;
