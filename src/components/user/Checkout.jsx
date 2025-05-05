import React, { useState } from "react";
import { CartViewStep } from "./CartViewStep";
import { ShippingStep } from "./ShippingStep";
import { ConfirmationStep } from "./ConfirmationStep";

export const Checkout = () => {
  const [step, setStep] = useState(1);
  const [shippingData, setShippingData] = useState(null);

  const goToNextStep = () => setStep((prev) => prev + 1);
  const goToPreviousStep = () => setStep((prev) => prev - 1);

  return (
    <div className="container mt-5 pt-5">
      {step === 1 && <CartViewStep onNext={goToNextStep} />}
      {step === 2 && (
        <ShippingStep
          onNext={(data) => {
            setShippingData(data);
            goToNextStep();
          }}
          onBack={goToPreviousStep}
        />
      )}
      {step === 3 && <ConfirmationStep shippingData={shippingData} />}
    </div>
  );
};
