import React, { useState } from "react";

// Custom Hook for handling input validation
const useValidation = (validateValue) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    setError(validateValue(event.target.value));
  };
  
  return { value, error, handleChange };
};

export default useValidation