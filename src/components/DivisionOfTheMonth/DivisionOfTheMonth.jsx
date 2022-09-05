import styles from "./DivisionOfTheMonth.module.css";
import useDivisionOfTheMonth from "./hook/useDivisionOfTheMonth";

const DivisionOfTheMonth = () => {
  const {
    handlerChange,
    handlerSubmit,
    handlerBlur,
    form,
    weekdays,
    title,
    error,
  } = useDivisionOfTheMonth();

  console.log(weekdays);
  console.log(error, "MSJ:");

  return (
    <section className={styles.component}>
      <div>
        <form onSubmit={(e) => handlerSubmit(e)} className={styles.form}>
          <div className={styles.monthSelect}>
            <label>Mes</label>
            <select
              name="month"
              onChange={(e) => handlerChange(e.target)}
              value={form.month}
              onBlur={() => handlerBlur()}
            >
              <option value="">----</option>
              <option value="Enero">Enero</option>
              <option value="Febrero">Febrero</option>
              <option value="Marzo">Marzo</option>
              <option value="Abril">Abril</option>
              <option value="Mayo">Mayo</option>
              <option value="Junio">Junio</option>
              <option value="Julio">Julio</option>
              <option value="Agosto">Agosto</option>
              <option value="Setiembre">Setiembre</option>
              <option value="Octubre">Octubre</option>
              <option value="Noviembre">Noviembre</option>
              <option value="Diciembre">Diciembre</option>
            </select>
            {error.month ? (
              <div className={styles.error}>
                <p>{error.month}</p>
              </div>
            ) : null}
          </div>

          <div className={styles.startingDay}>
            <label>Fecha de inicio</label>
            <input
              type="text"
              name="startingDay"
              onChange={(e) => handlerChange(e.target)}
              value={form.startingDay}
              onBlur={() => handlerBlur()}
            />
            {error.startingDay ? (
              <div className={styles.error}>
                <p>{error.startingDay}</p>
              </div>
            ) : null}
          </div>
          <div className={styles.finalDay}>
            <label>Fecha de Fin</label>
            <input
              type="text"
              name="finalDay"
              onChange={(e) => handlerChange(e.target)}
              value={form.finalDay}
              onBlur={() => handlerBlur()}
            />
            {error.finalDay ? (
              <div className={styles.error}>
                <p>{error.finalDay}</p>
              </div>
            ) : null}
          </div>

          <div className={styles.btnSubmit}>
            <input type="submit" value={"Destructurar"} />
          </div>
        </form>
      </div>
      <div>
        <article className={styles.res}>
          <h2>{title !== "" ? title : "Días de la semana"}</h2>
          <ul>
            <li>
              <h3>Domingos</h3>
              <span>
                : <strong>{weekdays.days.Sunday | "0"}</strong>
              </span>
            </li>
            <li>
              <h3>Lunes</h3>
              <span>
                : <strong>{weekdays.days.Monday | "0"}</strong>
              </span>
            </li>
            <li>
              <h3>Martes</h3>
              <span>
                : <strong> {weekdays.days.Tuesday | "0"}</strong>
              </span>
            </li>
            <li>
              <h3>Miércoles</h3>
              <span>
                : <strong> {weekdays.days.Wednesday | "0"}</strong>
              </span>
            </li>
            <li>
              <h3>Jueves</h3>
              <span>
                : <strong> {weekdays.days.Thursday | "0"}</strong>
              </span>
            </li>
            <li>
              <h3>Viernes</h3>
              <span>
                : <strong> {weekdays.days.Friday | "0"}</strong>
              </span>
            </li>
            <li>
              <h3>Sábados</h3>
              <span>
                : <strong> {weekdays.days.Saturday | "0"}</strong>
              </span>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default DivisionOfTheMonth;
