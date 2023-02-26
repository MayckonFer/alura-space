import React from "react";
import photosPopulares from "./photos-populares.json";

import styles from "./styles.module.scss";

export function Populares() {
  return (
    <aside className={styles.populares}>
      <h2>Populares</h2>
      <ul className={styles.populares__imagens}>
        {photosPopulares.map((photoPopular) => {
          return (
            <li key={photoPopular.id}>
              <img src={photoPopular.path} alt={photoPopular.alt} />
            </li>
          );
        })}
      </ul>
      <button>Ver mais</button>
    </aside>
  );
}
