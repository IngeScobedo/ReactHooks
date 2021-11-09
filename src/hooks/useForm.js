import { useState } from "react";

export const useForm = (initialState = {}) => {
    
  const [values, setValues] = useState(initialState);

  let handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, handleInputChange];
};
