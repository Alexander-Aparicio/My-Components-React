export const validations = (form) => {
  const msjError = {};

  const regex = /^[0-9]{1,2}$/;

  if (form.startingDay !== "" && !regex.test(form.startingDay.trim())) {
    msjError.startingDay = "Solo se acepta números de uno o dos dígitos.";
  } else if (
    regex.test(form.startingDay.trim()) &&
    Number(form.startingDay) > 30
  ) {
    msjError.startingDay = "No puede poner un número mayor a 30";
  }
  if (form.finalDay !== "" && !regex.test(form.finalDay.trim())) {
    msjError.finalDay = "Solo se acepta números de uno o dos dígitos.";
  } else if (regex.test(form.finalDay.trim()) && Number(form.finalDay) >= 31) {
    msjError.finalDay = "No puede poner un número mayor a 31";
  }

  return msjError;
};

export const validationsSubmit = (form) => {
  const msjError = {};

  const regex = /^[0-9]{1,2}$/;

  if (form.month === "") {
    msjError.month = "Debe eligir un mes para destructurar.";
  }

  if (form.startingDay.trim() === "") {
    msjError.startingDay = "Este campo es necesario";
  } else if (form.startingDay !== "" && !regex.test(form.startingDay.trim())) {
    msjError.startingDay = "Solo se acepta números de uno o dos dígitos.";
  }

  if (form.finalDay.trim() === "") {
    msjError.finalDay = "Este campo es necesario.";
  } else if (form.finalDay !== "" && !regex.test(form.finalDay.trim())) {
    msjError.finalDay = "Solo se acepta números de uno o dos dígitos.";
  }

  return msjError;
};
