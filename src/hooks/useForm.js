import { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';

const useForm = (initialValues, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
  }, [initialValues]);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        console.log('Form data:', values);
        toast.success('Form submitted successfully!');
        resetForm();
        setIsSubmitting(false);
      } else {
        setIsSubmitting(false);
        toast.error('Error! Please check the form for errors');
      }
    }
  }, [errors, isSubmitting, values, resetForm]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox' && name === 'additionalSkills') {
      setValues((prevValues) => ({
        ...prevValues,
        [name]: checked
          ? [...prevValues[name], value]
          : prevValues[name].filter((skill) => skill !== value),
      }));
    } else {
      setValues({
        ...values,
        [name]: type === 'checkbox' ? checked : value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  return {
    values,
    setValues,
    errors,
    handleChange,
    handleSubmit,
    resetForm,
  };
};

export default useForm;
