const fetchReservationsBySportFacility = async (id) => {
  return fetch(`${import.meta.env.VITE_RESERVATION_URL}/getBySportFacility?sportFacilityID=${id}`)
    .then((response) => response.json())
    .then((data) => {
      const events = data.map((reservation) => ({
        start: new Date(reservation.startTime),
        end: new Date(reservation.endTime),
        title: `Rezerwujący: ${reservation.user.username}`,
      }));
      return events;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};

const fetchReservationsByUser = async (userID) => {
  return fetch(`${import.meta.env.VITE_RESERVATION_URL}/getByUser?userID=${userID}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};

const deleteReservation = async (reservationId) => {
  return fetch(
    `${import.meta.env.VITE_RESERVATION_URL}/deleteUserReservation?reservationID=${reservationId}`,
    {
      method: "DELETE",
    }
  );
};

export { fetchReservationsBySportFacility, fetchReservationsByUser, deleteReservation };
