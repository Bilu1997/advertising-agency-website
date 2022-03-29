export default function validateInfo(values) {
  let errors = {};

  if (!values.firstLast.trim()) {
    errors.firstLast = alert("Name required");
  }

  if (!values.email.trim()) {
    errors.email = alert("E-mail required");
  }

  if (!values.tel.trim()) {
    errors.tel = alert("Telephone required");
  }

  if (!values.description.trim()) {
    errors.description = alert("Description required");
  }

  if (!values.checkbox) {
    errors.checkbox = alert("Fill checkbox required");
  }

  return errors;
}
