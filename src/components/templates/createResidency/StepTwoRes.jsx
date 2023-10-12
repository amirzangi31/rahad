import BreadCrumbs from "@/components/modules/BreadCrumbs";
import HeaderContent from "@/components/modules/HeaderContent";
import PageCount from "@/components/modules/PageCount";
import React from "react";
const breadCrumbs = [
    {
      name: "تنظیمات",
      link: "/settings",
    },
    {
      name: "تعریف اقامتگاه",
      link: "/settings/createresidency",
    },
    {
      name: "افزودن امکانات",
      link: "/settings/createresidency",
    },
  ];
const StepTwoRes = ({ step, setStep }) => {
  return (
    <>
     <HeaderContent>
        <BreadCrumbs data={breadCrumbs} />
      </HeaderContent>
      <div className="my-16 py-10 flex justify-between items-center md:flex-row flex-col gap-2">

        <div>
          <PageCount step={step} setStep={setStep} count={2} pageCount={4} />
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

export default StepTwoRes;
