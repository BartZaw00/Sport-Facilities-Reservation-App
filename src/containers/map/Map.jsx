import React, { useEffect, useState } from "react";
import { GoogleMap, MarkerF, InfoBox, useLoadScript } from "@react-google-maps/api";
import MapSportFacilityBox from "./mapContent/MapSportFacilityBox";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { LoadingSpinner } from "../../components/sharedComponents";

const Map = ({ sportFacilities, location }) => {
  // Accessing user object from the useAuth hook
  const { user } = useAuth();

  // Using the useNavigate hook to navigate to different pages
  const navigate = useNavigate();

  // Initializing the Google Maps API using the useLoadScript hook
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  // Initializing state variables for markers, selected marker and center of the map
  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [center, setCenter] = useState({ lat: 51.763, lng: 19.457 });

  // Setting the container style for the Google Maps API
  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  // When Sport Facilities change -> update the markers
  useEffect(() => {
    createMarkers();
  }, [sportFacilities]);

  // Setting the center of the map to the marker when the there is only one marker
  useEffect(() => {
    if (markers.length > 0 && !Array.isArray(sportFacilities)) {
      setCenter({ lat: markers[0].lat, lng: markers[0].lng });
    }
  }, [markers, sportFacilities]);

  // Function to create markers from the list of Sport Facilities
  const createMarkers = () => {
    let facilities = sportFacilities;
    if (!Array.isArray(sportFacilities)) {
      facilities = [sportFacilities];
    }
    const newMarkers = facilities.map((facility) => {
      const id = facility.sportFacilityId;
      const lat = facility.latitude;
      const lng = facility.longitude;
      const name = facility.address;
      return { id, lat, lng, name };
    });
    setMarkers(newMarkers);
  };

  // Function to handle clicking on a marker
  const onMarkerClick = (marker) => {
    if (markers.length > 0 && !Array.isArray(sportFacilities)) {
      return;
    }
    setSelectedMarker(marker);
    setCenter({ lat: marker.lat - 0.03, lng: marker.lng });
  };

  // Function to handle clicking on a Sport Facility in the InfoBox
  const handleSportFacilityClick = (id) => {
    navigate(`/sport-facility/${id}`);
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12.3}
      onClick={() => setSelectedMarker(null)}
      onDrag={() => setSelectedMarker(null)}
    >
      {location && (
        <MarkerF
          position={{ lat: location.latitude, lng: location.longitude }}
          icon={{
            url:
              user?.photoUrl ||
              "https://res.cloudinary.com/dbkm7uvzx/image/upload/v1681637945/abstract-user-flat-1_dzkydg.svg",
            scaledSize: new window.google.maps.Size(40, 40),
          }}
        />
      )}
      {markers.map((marker) => (
        <MarkerF
          key={marker.id}
          position={{ lat: marker.lat, lng: marker.lng }}
          onClick={() => onMarkerClick(marker)}
        />
      ))}
      {selectedMarker && (
        <InfoBox
          position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
          options={{ closeBoxURL: "", enableEventPropagation: true }}
        >
          <MapSportFacilityBox
            sportFacility={sportFacilities.find(
              (facility) => facility.sportFacilityId === selectedMarker.id
            )}
            location={location}
            selectedMarker={selectedMarker}
            handleSportFacilityClick={() => handleSportFacilityClick(selectedMarker.id)}
          />
        </InfoBox>
      )}
    </GoogleMap>
  ) : (
    <LoadingSpinner />
  );
};

export default Map;
