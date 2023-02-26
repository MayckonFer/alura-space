import React, { useState } from "react";
import photos from "./photos.json";
import { Tags } from "../../components/Tags";

import styles from "./styles.module.scss";

import Cards from "./Cards";

export function Gallery() {
  const [itens, setItens] = useState(photos);

  const tags = [...new Set(photos.map((valor) => valor.tag))];

  const filterPhotos = (tag) => {
    const newPhotos = photos.filter((photo) => {
      return photo.tag === tag;
    });

    setItens(newPhotos);
  };

  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} filterPhotos={filterPhotos} setItens={setItens} />
      <Cards itens={itens} styles={styles} />
    </section>
  );
}
