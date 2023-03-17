import React, { useContext, useRef, useEffect } from "react";
import { IoMdClose } from "react-icons/io";

import { ModalContext } from "../pages/HomePage";

import { Filter, LoginForm, Settings, SignUpForm } from "../containers/index";

const Modal = ({ option }) => {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);
  const modalRef = useRef(null);

  const handleCloseModalClick = () => {
    setIsModalOpen(false);
  };

  const handleModalOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleModalOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleModalOutsideClick);
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-my-modal-overlay z-50">
      <div
        ref={modalRef}
        className={`${
          isModalOpen ? "flex" : "hidden"
        } flex-col min-w-[568px] max-h-[80vh] bg-white absolute top-1/2 left-1/2 rounded-2xl slide-top`}
      >
        <div className="relative flex justify-center py-5 border-b-2 border-my-divider">
          <div
            className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer p-2 rounded-full hover:bg-my-divider"
            onClick={handleCloseModalClick}
          >
            <IoMdClose size={20} />
          </div>
          {option === "login" && <span className="font-bold">Logowanie</span>}
          {option === "signup" && <span className="font-bold">Rejestracja</span>}
          {option === "filter" && <span className="font-bold">Filtruj</span>}
          {option === "settings" && <span className="font-bold">Ustawienia</span>}
        </div>
        <div className="px-6 py-5 overflow-y-auto">
          {option === "login" && <LoginForm />}
          {option === "signup" && <SignUpForm />}
          {option === "filter" && <Filter />}
          {option === "settings" && <Settings />}
        </div>
      </div>
    </div>
  );
};

export default Modal;
