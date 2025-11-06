import React from "react";
import styles from "./ShopOptions.module.css";
import { MdOutlineDiscount } from "react-icons/md";

export default function ShopOptions() {
  return (
    <section className={styles.dealSection}>
      <button className={styles.dealButton}>Essentials</button>
      <button className={styles.dealButton}>
        <MdOutlineDiscount size={12} /> Wait for Deals
      </button>
    </section>
  );
}
