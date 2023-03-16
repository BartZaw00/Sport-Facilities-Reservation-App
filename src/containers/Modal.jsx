import React, { useContext } from "react";
import { IoMdClose } from "react-icons/io";

import { ModalContext } from "../pages/HomePage";

const Modal = () => {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);

  const handleCloseModalClick = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-my-black-rgba z-50">
      <div
        className={`${
          isModalOpen ? "flex" : "hidden"
        } flex-col min-w-[568px] bg-white absolute top-1/2 left-1/2 rounded-2xl slide-top`}
      >
        <div className="relative flex justify-center py-5 border-b-2 border-my-divider">
          <div
            className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer p-2 rounded-full hover:bg-my-divider"
            onClick={handleCloseModalClick}
          >
            <IoMdClose size={20} />
          </div>

          <span className="font-bold">Zaloguj się</span>
        </div>
        <div className="px-6 py-5"></div>
      </div>
    </div>
  );
};

export default Modal;
