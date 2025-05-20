import React, { useState } from 'react'
import DetailedStep from '../components/DetailedInput/DetailedStep';

const DetailedInput = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 6;

  const goToNextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  return (
    <DetailedStep step={step} totalSteps={totalSteps} onNext={goToNextStep} />
  );
};

export default DetailedInput;
