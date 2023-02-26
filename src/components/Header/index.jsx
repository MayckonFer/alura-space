import Logo from "../../assets/imagesHeader/logo.png";
import Search from "../../assets/imagesHeader/search.png";

import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <section className={styles.spacing}>
        <div>
          <img src={Logo} alt="Logo do Alura Space" />
          <div className={styles.header_container}>
            <input
              className={styles.header_input}
              type="text"
              placeholder="O que você procura?"
              id="search"
            />
            <label htmlFor="search">
              <img src={Search} alt="ícone de lupa" />
            </label>
          </div>
        </div>
      </section>
    </header>
  );
}
