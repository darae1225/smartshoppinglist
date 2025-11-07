import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import styles from "./EnterItem.module.css";
import { v4 as uuidv4 } from "uuid";

export default function EnterItem() {
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  console.log(inputValue);

  return (
    <section className={styles.container}>
      <section>
        <label htmlFor="text" />
        <input
          id="text"
          type="text"
          placeholder="Enter an item here"
          onChange={handleChange}
          value={inputValue}
        />
      </section>

      <section>
        <label htmlFor="options" />
        <select id="options">
          <option value="Any">Any</option>
          <option value="Bakery">Bakery</option>
          <option value="Dairy">Dairy</option>
        </select>
      </section>
      <button>
        <FaPlus size={25} />
      </button>
    </section>
  );
}
