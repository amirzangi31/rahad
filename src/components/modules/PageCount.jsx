"use client";

import React from "react";

const PageCount = ({ count, pageCount, step, setStep }) => {
  const nextHandler = () => {
    if (step === pageCount) return;
    setStep((prev) => prev + 1);
  };
  const prevHandler = () => {
    if (step === 1) return;

    setStep((prev) => prev - 1);
  };

  return (
    <div className="flex justify-center items-center gap-2">
      <button
        type="button"
        className={`${pageCount === count ? "btn-next" : "btn-next active"}`}
        onClick={nextHandler}
      >
        بعدی
      </button>
      <button type="button" className="btn-count">
        {count}
      </button>
      <button
        type="button"
        className={`${count === 1 ? "btn-prev " : "btn-prev active"}`}
        onClick={prevHandler}
      >
        قبلی
      </button>
    </div>
  );
};

export default PageCount;
