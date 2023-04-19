const fetchSportFacilitiesByCategory = async (selectedCategory) => {
  return fetch(
    `${import.meta.env.VITE_HOME_URL}/getBySport?sportID=${selectedCategory}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
};

const fetchSportFacilitiesBySearchQuery = async (query, selectedCategory) => {
  return fetch(
    `${import.meta.env.VITE_HOME_URL}/getBySearchQuery?searchQuery=${query}&sportID=${selectedCategory}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export { fetchSportFacilitiesByCategory, fetchSportFacilitiesBySearchQuery };
