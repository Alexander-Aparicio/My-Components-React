const daysContador = (mes, fechaInicial, fechaFinal) => {
  const nameDias = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const age = new Date().getFullYear();
  const diasdelmes = [];
  const resultado = {};
  let ultdia;
  const startingDay = fechaInicial ? fechaInicial : 1;
  const finalDay = fechaFinal ? fechaFinal : ultdia;

  if (mes) {
    switch (mes) {
      case "Enero":
        ultdia = new Date(age, 1, 0).getDate();

        for (let fecha = startingDay; fecha <= finalDay; fecha++) {
          let dia = new Date(age, 0, fecha).getDay();
          let nameDia = nameDias[dia];
          diasdelmes.push(nameDia);
        }

        diasdelmes.forEach((el) => (resultado[el] = resultado[el] + 1 || 1));
        return resultado;

      case "Febrero":
        ultdia = new Date(age, 2, 0).getDate();

        for (let fecha = startingDay; fecha <= finalDay; fecha++) {
          let dia = new Date(age, 1, fecha).getDay();
          let nameDia = nameDias[dia];
          diasdelmes.push(nameDia);
        }
        diasdelmes.forEach((el) => (resultado[el] = resultado[el] + 1 || 1));
        return resultado;

      case "Marzo":
        ultdia = new Date(age, 3, 0).getDate();

        for (let fecha = startingDay; fecha <= finalDay; fecha++) {
          let dia = new Date(age, 2, fecha).getDay();
          let nameDia = nameDias[dia];
          diasdelmes.push(nameDia);
        }
        diasdelmes.forEach((el) => (resultado[el] = resultado[el] + 1 || 1));
        return resultado;

      case "Abril":
        ultdia = new Date(age, 4, 0).getDate();

        for (let fecha = startingDay; fecha <= finalDay; fecha++) {
          let dia = new Date(age, 3, fecha).getDay();
          let nameDia = nameDias[dia];
          diasdelmes.push(nameDia);
        }
        diasdelmes.forEach((el) => (resultado[el] = resultado[el] + 1 || 1));
        return resultado;

      case "Mayo":
        ultdia = new Date(age, 5, 0).getDate();

        for (let fecha = startingDay; fecha <= finalDay; fecha++) {
          let dia = new Date(age, 4, fecha).getDay();
          let nameDia = nameDias[dia];
          diasdelmes.push(nameDia);
        }
        diasdelmes.forEach((el) => (resultado[el] = resultado[el] + 1 || 1));
        return resultado;

      case "Junio":
        ultdia = new Date(age, 6, 0).getDate();

        for (let fecha = startingDay; fecha <= finalDay; fecha++) {
          let dia = new Date(age, 5, fecha).getDay();
          let nameDia = nameDias[dia];
          diasdelmes.push(nameDia);
        }
        diasdelmes.forEach((el) => (resultado[el] = resultado[el] + 1 || 1));
        return resultado;

      case "Julio":
        ultdia = new Date(age, 7, 0).getDate();

        for (let fecha = startingDay; fecha <= finalDay; fecha++) {
          let dia = new Date(age, 6, fecha).getDay();
          let nameDia = nameDias[dia];
          diasdelmes.push(nameDia);
        }
        diasdelmes.forEach((el) => (resultado[el] = resultado[el] + 1 || 1));
        return resultado;

      case "Agosto":
        ultdia = new Date(age, 8, 0).getDate();

        for (let fecha = startingDay; fecha <= finalDay; fecha++) {
          let dia = new Date(age, 7, fecha).getDay();
          let nameDia = nameDias[dia];
          diasdelmes.push(nameDia);
        }
        diasdelmes.forEach((el) => (resultado[el] = resultado[el] + 1 || 1));
        return resultado;

      case "Setiembre":
        ultdia = new Date(age, 9, 0).getDate();

        for (let fecha = startingDay; fecha <= finalDay; fecha++) {
          let dia = new Date(age, 8, fecha).getDay();
          let nameDia = nameDias[dia];
          diasdelmes.push(nameDia);
        }
        diasdelmes.forEach((el) => (resultado[el] = resultado[el] + 1 || 1));
        return resultado;

      case "Octubre":
        ultdia = new Date(age, 10, 0).getDate();

        for (let fecha = startingDay; fecha <= finalDay; fecha++) {
          let dia = new Date(age, 9, fecha).getDay();
          let nameDia = nameDias[dia];
          diasdelmes.push(nameDia);
        }
        diasdelmes.forEach((el) => (resultado[el] = resultado[el] + 1 || 1));
        return resultado;
      case "Noviembre":
        ultdia = new Date(age, 11, 0).getDate();

        for (let fecha = startingDay; fecha <= finalDay; fecha++) {
          let dia = new Date(age, 10, fecha).getDay();
          let nameDia = nameDias[dia];
          diasdelmes.push(nameDia);
        }
        diasdelmes.forEach((el) => (resultado[el] = resultado[el] + 1 || 1));
        return resultado;

      case "Diciembre":
        ultdia = new Date(age, 12, 0).getDate();

        for (let fecha = startingDay; fecha <= finalDay; fecha++) {
          let dia = new Date(age, 11, fecha).getDay();
          let nameDia = nameDias[dia];
          diasdelmes.push(nameDia);
        }
        diasdelmes.forEach((el) => (resultado[el] = resultado[el] + 1 || 1));
        return resultado;

      default:
        break;
    }
  } else {
    const initial = {
      Sunday: "",
      Monday: "",
      Tuesday: "",
      Wednesday: "",
      Thursday: "",
      Friday: "",
      Saturday: "",
    };
    return initial;
  }
};

export default daysContador;
