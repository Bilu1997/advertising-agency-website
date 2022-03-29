import { useState } from "react";

const FooterFormFunctions = (validate) => {
  const [values, setValues] = useState({
    firstLast: "",
    email: "",
    tel: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

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
  };

  return { handleChange, values, handleSubmit, errors };
};

export default FooterFormFunctions;
