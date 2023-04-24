import React, { useEffect, useState } from "react";
import { LoadingSpinner } from "../../../components/sharedComponents";
import useAuth from "../../../hooks/useAuth";
import ReservationCard from "./ReservationCard";
import { fetchReservationsByUser } from "../../../services/ReservationService";

const ModalMyReservations = () => {
  // Get the currently logged in user from the useAuth hook
  const { user } = useAuth(); 

  // State to hold the user's reservations
  const [reservations, setReservations] = useState([]);
  // State to track if reservations are currently being fetched
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setIsLoading(true);
      setTimeout(() => {
        fetchReservationsByUser(user.id).then((data) => {
          setReservations(data);
          setIsLoading(false);
        });
      }, 800);
    }
  }, [user?.id]);

  return (
    <div className="flex items-center justify-center">
      {isLoading ? (
        <LoadingSpinner />
      ) : reservations.length > 0 ? (
        <div className="p-6 w-full sm:p-2">
          {reservations.map((reservation) => (
            <ReservationCard
              key={reservation.reservationId}
              reservation={reservation}
              setIsLoading={setIsLoading}
              user={user}
              fetchReservationsByUser={fetchReservationsByUser}
              setReservations={setReservations}
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
