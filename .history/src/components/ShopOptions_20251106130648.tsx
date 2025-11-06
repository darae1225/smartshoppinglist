import React from "react";
import styles from "./ShopOptions.module.css";

export default function ShopOptions() {
  return (
    <section className={styles.dealSection}>
      <button className={styles.dealButton}>Essentials</button>
      <button className={styles.dealButton}>Wait for Deals</button>
    </section>
  );
}
