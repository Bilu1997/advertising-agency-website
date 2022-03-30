import { useEffect, useState } from "react";

const FooterFormFunctions = (validate, callback) => {
  const [values, setValues] = useState({
    firstLast: "",
    email: "",
    tel: "",
    description: "",
    checkbox: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors, isSubmitting };
};

export default FooterFormFunctions;
