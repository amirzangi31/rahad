"use cllient"

import React, { useState } from "react";
import HeaderContent from "../../modules/HeaderContent";
import BreadCrumbs from "../../modules/BreadCrumbs";
import FormControlInput from "../../modules/FormControlInput";
import FormControlSelect from "../../modules/FormControlSelect";
import OclackComponentD from "../../modules/OclackComponentD";
import MapComponent from "../../modules/MapComponent";
import PageCount from "../../modules/PageCount";
import ModalContent from "@/components/modules/ModalContent";
import { selectDataRange, selectDataType } from "@/data/selectData";


const breadCrumbs = [
  {
    name: "تنظیمات",
    link: "/settings",
  },
  {
    name: "تعریف اقامتگاه",
    link: "/settings/createresidency",
  },
];



const StepOneRes = ({ step, setStep }) => {
  const [openModal , setOpenModal] = useState(false)


  return (
    <>
      <ModalContent open={openModal} setOpen={setOpenModal}  />
      <HeaderContent>
        <BreadCrumbs data={breadCrumbs} />
      </HeaderContent>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <FormControlInput
          title="نام اقامتگاه "
          placeholder="نام اقامتگاه را وارد کنید"
          type="text"
        />
        <FormControlSelect
          title="نوع اقامتگاه"
          placeholder="انتخاب کنید"
          data={selectDataType}
        />
        <FormControlInput
          title="آدرس وبسایت"
          placeholder="لینک آدرس وبسایت خود را وارد نمایید "
          type="text"
        />
        <FormControlSelect
          title="درجه اقامتگاه"
          placeholder="یک مورد را انتخاب کنید"
          data={selectDataRange}
        />
        <FormControlInput
          title="تاریخ ساخت اقامتگاه"
          placeholder="تاریخ مورد نظر خود را وارد نمایید"
          type="text"
        />
        <FormControlInput
          title="تعداد طبقات اقامتگاه"
          placeholder="تعداد طبقات اقامتگاه خود را وارد نمایید"
          type="text"
        />
      </div>
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8 mt-8">
        <div className="flex justify-between items-start flex-col">
          <label className="text-primary-main text-xl font-[800]">
            ساعت تخلیه اتاق
          </label>
          <div className="input-primary" style={{ padding: "20px 0 " }}>
            <OclackComponentD />
          </div>
        </div>
        <div className="flex justify-between items-start flex-col">
          <label className="text-primary-main text-xl font-[800]">
            ساعت تحویل اتاق
          </label>
          <div className="input-primary" style={{ padding: "20px 0 " }}>
            <OclackComponentD />
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-between items-center gap-2">
          <div className="w-3/12 md:w-4/12 lg:w-3/12 ">
            <FormControlSelect title="کد شهر " placeholder="+98" />
          </div>
          <div className="w-9/12 md:w-8/12 lg:w-9/12 ">
            <FormControlInput
              title="شماره تماس"
              placeholder="شماره تماس اقامتگاه خود را وارد نمایید ."
              type="text"
            />
          </div>
        </div>
        <FormControlInput
          title="شماره تلفن همراه"
          placeholder="لظفا شماره همراه خود را وارد نمایید ."
          type="text"
        />
        <FormControlInput
          title="استان "
          placeholder="لظفا نام استان خود را وارد نمایید"
          type="text"
        />
        <FormControlInput
          title="شهرستان"
          placeholder="لظفا نام شهرستان خود را وارد نمایید"
          type="text"
        />
      </div>
      <div className="mt-8">
        <FormControlInput
          title="آدرس"
          placeholder="لطفا آدرس اقامتگاه خود را وارد نمایید"
          type="text"
        />
      </div>
      <div className="mt-8 input-primary">
        <label className="text-primary-main text-xl font-[800] block mb-8">
          موقعیت مکانی را روی نقشه مشخص کنید.
        </label>
        <div>
          <MapComponent />
        </div>
      </div>
      <div className="mt-8">
        <p className="flex gap-2 text-primary-main text-xl font-[800] cursor-pointer" onClick={() => setOpenModal(true)}> 
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5598 20.94C13.1598 22.34 10.8598 22.34 9.44978 20.94L3.05977 14.55C1.65977 13.15 1.65977 10.85 3.05977 9.44001L9.44978 3.05C10.8498 1.65 13.1498 1.65 14.5598 3.05L20.9498 9.44001C22.3498 10.85 22.3498 13.15 20.9498 14.55L14.5598 20.94Z"
              stroke="#157B96"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.25 6.25L17.75 17.75"
              stroke="#157B96"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.75 6.25L6.25 17.75"
              stroke="#157B96"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          برای افزودن لگو خود اینجا کلیک کنید
        </p>
      </div>
      <div className="my-16 py-10 flex justify-between items-center md:flex-row flex-col gap-2">
        <div>
          <PageCount step={step} setStep={setStep} count={1} pageCount={4} />
        </div>
        <div className="flex justify-center gap-2 items-center">
          <button type="button" className="btn-error outline">
            کنسل
          </button>
          <button type="button" className="btn-success">
            ثبت تغییرات
          </button>
        </div>
      </div>
    </>
  );
};

export default StepOneRes;
