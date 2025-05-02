"use client";

import React from "react";

interface ModalProps {
  isOpenModal: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal = ({ isOpenModal, onClose, children }: ModalProps) => {
  if (!isOpenModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl p-6 shadow-lg relative w-[90%] max-w-lg">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl w-8 h-8"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
