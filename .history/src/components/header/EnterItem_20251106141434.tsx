import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import styles from "./EnterItem.module.css";

export default function EnterItem() {
  return (
    <section className={styles.container}>
        <input placeholder="Enter an item here" />
        <label htmlFor="options" />
        <select id="options">
          <option value="Any" selected>
            Any
          </option>
          <option value="Bakery">Bakery</option>
          <option value="Dairy">Dairy</option>
      <button>
        <IoMdAddCircleOutline />
      </button>
    </section>
  );
}
