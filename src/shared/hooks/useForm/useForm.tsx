import React, { useState } from 'react';

import { GenericFunction, GenericObject } from '../../types/genericTypes';

const useForm = (defaultInputs: GenericObject, callback: GenericFunction) => {
  const [inputs, setInputs] = useState<GenericObject>(defaultInputs);

  const handleSubmit = (event: React.FormEvent) => {
    if (event) {
      event.preventDefault();
      callback();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setInputs((inputs: GenericObject) => ({ ...inputs, [event.target.name]: event.target.value }));
  };

  return {
    inputs,
    handleSubmit,
    handleInputChange,
  };
};

export default useForm;
