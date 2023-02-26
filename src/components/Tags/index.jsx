import React from "react";

import styles from "./styles.module.scss";

import photos from "../Gallery/photos.json";

export function Tags({ tags, filterPhotos, setItens }) {
  return (
    <div className={styles.container_tags}>
      <p>Filtre por tags:</p>
      <ul>
        <li onClick={() => setItens(photos)}>Todos</li>
        {tags.map((tag) => {
          return (
            <li key={tag} onClick={() => filterPhotos(tag)}>
              {tag}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
