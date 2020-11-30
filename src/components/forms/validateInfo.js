export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = 'Nombre requerido';
  }
  if (!values.message.trim()) {
    errors.message = 'Mensaje requerido';
  }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

  if (!values.email) {
    errors.email = 'Escribe un email';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Escribe un email válido';
  }

  return errors;
}
