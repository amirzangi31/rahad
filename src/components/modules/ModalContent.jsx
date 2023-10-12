"use client";

import React from "react";

const ModalContent = ({ open, setOpen }) => {
  
  
  return (
    <div
      className={`${
        open
          ? "fixed top-0 left-0 w-full min-h-screen  z-50 flex justify-center items-center"
          : "hidden"
      }`}
    >
      <div className=" bg-white-main  w-[calc(100%-20px)] sm:w-[500px] mx-auto h-[200px] sm:h-[300px] rounded-sm border border-gray-light px-5 flex justify-center items-center flex-col">
        <p>لطفا آیتم مورد نظر خود را وارد نمایید </p>
        <input type="text" className="input-primary " />
        <div className="flex gap-2 py-4">
          <button type="button" className="btn-success-sm">
            ثبت
          </button>
          <button type="button" className="btn-error-sm outline" onClick={() => setOpen(false)}>
            لغو
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
