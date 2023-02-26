import React from "react";

import Home from "../../assets/icones/home-ativo.png";
import maisCurtidas from "../../assets/icones/mais-curtidas-inativo.png";
import maisVistas from "../../assets/icones/mais-vistas-inativo.png";
import Novas from "../../assets/icones/novas-inativo.png";
import Surpreenda_me from "../../assets/icones/surpreenda-me-inativo.png";

import styles from "./styles.module.scss";

export function Menu() {
  return (
    <nav className={styles.menu}>
      <ul>
        <li>
          <img src={Home} alt="ícone Home" />
          <a href="/">Ínicio</a>
        </li>
        <li>
          <img src={maisCurtidas} alt="ícone Mais curtidas" />
          <a href="/">Mais curtidas</a>
        </li>
        <li>
          <img src={maisVistas} alt="ícone Mais vistas" />
          <a href="/">Mais vistas</a>
        </li>
        <li>
          <img src={Novas} alt="ícone Novas" />
          <a href="/">Novas</a>
        </li>
        <li>
          <img src={Surpreenda_me} alt="ícone Surpreenda-me" />
          <a href="/">Surpreenda-me</a>
        </li>
      </ul>
    </nav>
  );
}
