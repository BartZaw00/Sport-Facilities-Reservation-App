import React, { useContext, useRef, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { ModalContext } from "../../App";
import {
  ModalFilterForm,
  ModalLoginForm,
  ModalMyReservations,
  ModalPhotosContent,
  ModalProfileForm,
  ModalSettingsForm,
  ModalSignUpForm,
  ModalSportFacilityForm,
} from "./modalContent";
import ModalAddSportFacilityForm from "./modalContent/ModalAddSportFacilityForm";

const Modal = ({ option, images, filters, setIsLoading }) => {
  // Get the state and setState function for the modal from the ModalContext
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);

  // Create a ref to the modal element to check if a click happened inside or outside the modal
  const modalRef = useRef(null);

  // Function to get the modal title based on the type of modal being rendered
  const getModalTitle = (option) => {
    switch (option) {
      case "login":
        return "Logowanie";
      case "signup":
        return "Rejestracja";
      case "filter":
        return "Filtruj";
      case "settings":
        return "Ustawienia";
      case "profile":
        return "Profil";
      case "reservations":
        return "Moje Rezerwacje";
      case "image":
        return "Zdjęcie";
      case "images":
        return "Zdjęcia";
      case "sportFacility":
        return "Edytuj Obiekt";
      case "addSportFacility":
        return "Dodaj Obiekt";
      default:
        return "";
    }
  };

  // Add event listener to handle clicks outside the modal
  useEffect(() => {
    document.addEventListener("mousedown", handleModalOutsideClick);

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleModalOutsideClick);
    };
  }, []);

  // Function to handle closing the modal when the close button is clicked
  const handleCloseModalClick = () => {
    setIsModalOpen(false);
  };

  // Function to handle closing the modal when a click happens outside the modal element
  const handleModalOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      // Checking whether the click was on the element with the class .ant-select-dropdown
      // If it is not a click on this element, then close the modal
      if (!event.target.closest(".ant-select-dropdown")) {
        setIsModalOpen(false);
      }
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-my-modal-overlay z-50">
      <div
        ref={modalRef}
        className={`${
          isModalOpen ? "flex" : "hidden"
        } flex-col min-w-[568px] sm:min-w-[90vw] max-h-[80vh] bg-white fixed top-1/2 left-1/2 rounded-2xl slide-top`}
      >
        <div className="relative flex justify-center py-5 border-b-2 border-my-divider">
          <div
            className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer p-2 rounded-full hover:bg-my-divider"
            onClick={handleCloseModalClick}
          >
            <IoMdClose size={20} />
          </div>
          <span className="font-bold">{getModalTitle(option)}</span>
        </div>
        <div className="px-6 py-5 overflow-y-auto">
          {option === "login" && <ModalLoginForm />}
          {option === "signup" && <ModalSignUpForm />}
          {option === "filter" && (
            <ModalFilterForm filters={filters} setIsLoading={setIsLoading} />
          )}
          {option === "settings" && <ModalSettingsForm />}
          {option === "profile" && <ModalProfileForm />}
          {option === "reservations" && <ModalMyReservations />}
          {(option === "image" || option === "images") && (
            <ModalPhotosContent images={images} />
          )}
          {option === "sportFacility" && <ModalSportFacilityForm />}
          {option === "addSportFacility" && <ModalAddSportFacilityForm />}
        </div>
      </div>
    </div>
  );
};

export default Modal;
