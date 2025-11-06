import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import styles from "./EnterItem.module.css";

export default function EnterItem() {
  return (
    <section className={styles.container}>
      <section>
        <input placeholder="Enter an item here" />
      </section>

      <section>
        <label htmlFor="options" />
        <select id="options">
          <option value="Any" selected>
            Any
          </option>
          <option value="Bakery">Bakery</option>
          <option value="Dairy">Dairy</option>
        </select>
      </section>

      <button>
        <IoMdAddCircleOutline size={24} />
      </button>
    </section>
  );
}
