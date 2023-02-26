import React from "react";
import styles from "./styles.module.scss";

import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Gallery } from "../../components/Gallery";
import { Populares } from "../../components/Populares";
import Footer from "../../components/Footer";

import Banner from "../../assets/banner.png";

export function Home() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.spacing}>
          <div className={styles.menu_and_banner}>
            <Menu />
            <img src={Banner} alt="" />
          </div>
          <div className={styles.content_gallery}>
            <Gallery />
            <Populares />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
