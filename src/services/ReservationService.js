const fetchReservationsBySportFacility = async (id) => {
  return fetch(`${import.meta.env.VITE_RESERVATION_URL}/getBySportFacility?sportFacilityID=${id}`
  )
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
    });
};

export { fetchReservationsBySportFacility };
