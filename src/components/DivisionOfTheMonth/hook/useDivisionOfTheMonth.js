import { useState } from "react";
import daysContador from "../helpers/daysContador";
import { validations, validationsSubmit } from "../helpers/validations";

const initial = {
  month: "",
  startingDay: "",
  finalDay: "",
};

const useDivisionOfTheMonth = () => {
  const [form, setForm] = useState(initial);
  const [weekdays, setWeekdays] = useState({ state: false, days: {} });
  const [title, setTitle] = useState("");

  const [error, setError] = useState({});

  const handlerChange = (input) => {
    setForm({
      ...form,
      [input.name]: input.value,
    });
  };

  const handlerBlur = () => {
    setError(validations(form));
  };

  const handlerSubmit = (e) => {
    e.preventDefault();

    const msj = validationsSubmit(form);
    setError(validationsSubmit(form));
    console.log(error);
    console.log(Object.keys(msj).length);
    if (Object.keys(msj).length === 0) {
      const days = daysContador(
        form.month,
        Number(form.startingDay),
        Number(form.finalDay)
      );
      setWeekdays({ state: true, days: days });
      setTitle(`Del ${form.startingDay} al ${form.finalDay} de ${form.month}`);
      if (weekdays) {
        setForm(initial);
      }
    }
  };

  return {
    handlerChange,
    handlerBlur,
    handlerSubmit,
    form,
    weekdays,
    title,
    error,
  };
};

export default useDivisionOfTheMonth;
