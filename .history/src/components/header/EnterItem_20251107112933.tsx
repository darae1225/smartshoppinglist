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
      dealOption: "waitForDeal",
    },
    {
      id: uuidv4(),
      text: "new item 3",
      status: "completed",
      dealOption: "essential",
    },
    {
      id: uuidv4(),
      text: "new item 4",
      status: "completed",
      dealOption: "waitForDeal",
    },
  ]);
  function handleChange(e) {
    const list = e.target.value;
    console.log(list);
  }

  return (
    <section className={styles.container}>
      <section>
        <label htmlFor="text" />
        <input
          id="text"
          type="text"
          placeholder="Enter an item here"
          onChange={handleChange}
        />
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
        <FaPlus size={25} />
      </button>
      <section>
        <ul>
          {text.map((item) => {
            return <li>{item.text}</li>;
          })}
        </ul>
      </section>
    </section>
  );
}
