import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

import styles from "./styles.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.spacing}>
        <div className={styles.card_social}>
          <a href="/" target="_blank">
            <BsFacebook size={32} />
          </a>
          <a href="/" target="_blank">
            <AiFillTwitterCircle size={32} />
          </a>
          <a href="#" target="_blank">
            <AiFillInstagram size={32} />
          </a>
        </div>

        <p>
          Desenvolvido por{" "}
          <a href="https://github.com/MayckonFer" target="_blank">
            Mayckon.
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
