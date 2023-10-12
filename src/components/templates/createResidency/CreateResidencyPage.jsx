"use client";
import { useState } from "react";
import StepOneRes from "./StepOneRes";
import StepTwoRes from "./StepTwoRes";
import StepThreeRes from "./StepThreeRes";
import StepFourRes from "./StepFourRes";

const CreateResidencyPage = () => {
  const [showStep, setShowStep] = useState(1);

  if (showStep === 1) {
    return <StepOneRes step={showStep} setStep={setShowStep} />;
  }
  if (showStep === 2) {
    return <StepTwoRes step={showStep} setStep={setShowStep} />;
  }
  if (showStep === 3) {
    return <StepThreeRes step={showStep} setStep={setShowStep} />;
  }
  if (showStep === 4) {
    return <StepFourRes step={showStep} setStep={setShowStep} />;
  }
};

export default CreateResidencyPage;
