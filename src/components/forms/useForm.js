import { useState, useEffect } from 'react';
import axios from "axios";
const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    message: '',
    email: '',
    package: '',
  });


  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
    axios
      .post(
        "https://getform.io/f/0b2d3fb1-f132-4714-8ce2-b67f4cc4bb6a",
        values,
        { headers: { Accept: "application/json" } }
      )
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors, isSubmitting, callback]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
