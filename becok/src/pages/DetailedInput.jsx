import React, { useReducer, useCallback } from "react";
import DetailedStep from "../components/DetailedInput/DetailedStep";

const initialState = {
  step: 1,
  isNextEnabled: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "NEXT_STEP":
      return {
        ...state,
        step: state.step < 6 ? state.step + 1 : state.step,
        isNextEnabled: false,
      };
    case "PREV_STEP":
      return {
        ...state,
        step: state.step > 1 ? state.step - 1 : state.step,
        isNextEnabled: false,
      };
    case "SET_NEXT_ENABLED":
      return {
        ...state,
        isNextEnabled: action.payload,
      };
    default:
      return state;
  }
}

const DetailedInput = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const goToNextStep = () => {
    dispatch({ type: "NEXT_STEP" });
  };

  const handleBack = () => {
    dispatch({ type: "PREV_STEP" });
  };

  const setIsNextEnabled = useCallback((enabled) => {
    dispatch({ type: "SET_NEXT_ENABLED", payload: enabled });
  }, []);

  return (
    <DetailedStep
      step={state.step}
      totalSteps={6}
      onNext={goToNextStep}
      isNextEnabled={state.isNextEnabled}
      onBack={handleBack}
      setIsNextEnabled={setIsNextEnabled}
      onValidityChange={setIsNextEnabled}
    />
  );
};

export default DetailedInput;
