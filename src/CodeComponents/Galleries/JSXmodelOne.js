export const JsxGallery = `
import styles from "./Gallery.module.css";
import { imgs } from "./imgs/images"; 
// Importa tus propias imágenes en un arreglo.

const Gallery = () => {
  return (
    <section className={styles.gallery}>
      {imgs.length > 0
        ? imgs.map((el) => (
            <figure key={el.id} className={styles.card}>
              <img src={heroImages(el.url)} alt={el.name} />
              <figcaption>
                <h3>{el.name}</h3>
                <p>{el.age} años</p>
                <span>
                  {el.emoji}
                  <br />
                  {el.sport}
                </span>
              </figcaption>
            </figure>
          ))
        : null}
    </section>
  );
};

export default Gallery;
`;
