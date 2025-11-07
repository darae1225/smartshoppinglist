import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import styles from "./EnterItem.module.css";
import { v4 as uuidv4 } from "uuid";

export default function EnterItem() {
  const [text, setText] = useState([
    {
      id: uuidv4(),
      text: "new item 1",
      status: "active",
      dealOption: "essential",
    },
    {
      id: uuidv4(),
      text: "new item 2",
      status: "active",
      dealOption: "essential",
    },
    {
      id: uuidv4(),
      text: "new item 2",
      status: "active",
      dealOption: "essential",
    },
  ]);
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
      <p>{text}</p>

      <button>
        <FaPlus size={25} />
      </button>
    </section>
  );
}
