import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import styles from "./EnterItem.module.css";
import { v4 as uuidv4 } from "uuid";
import { MdOutlineDiscount } from "react-icons/md";

export default function EnterItem({ onAdd }) {
  const [dealOption, setDealOption] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [groceryCategory, setGroceryCategory] = useState("");
  const category = [
    "Any",
    "Dairy",
    "Bakery",
    "Meat",
    "Seafood",
    "Asian",
    "Drinks",
  ];

  const handleDealOption = (e) => {
    if (e.target.value === "essentials") {
      setDealOption("essentials");
    } else if (e.target.value === "waitfordeals") {
      setDealOption("waitfordeals");
    }
  };

  const handleChangeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleChangeGroceryCategory = (e) => {
    setGroceryCategory(e.target.value);
  };

  const handleClick = () => {
    if (inputValue.trim() === "") return;
    onAdd({
      id: uuidv4(),
      text: inputValue,
      status: "active",
      groceryCategory: groceryCategory,
      dealOption: { dealOption },
    });
    setInputValue("");
    setGroceryCategory("");
  };

  return (
    <section>
      <section className={styles.dealSection}>
        <button
          className={styles.dealButton}
          value="essentials"
          onClick={handleDealOption}
        >
          Essentials
        </button>
        <button
          className={styles.dealButton}
          onClick={handleDealOption}
          value="waitfordeals"
        >
          <MdOutlineDiscount size={12} /> Wait for Deals
        </button>
      </section>

      <section className={styles.container}>
        <section className={styles.inputCont}>
          <label htmlFor="text" />
          <input
            className={styles.inputValue}
            id="text"
            type="text"
            placeholder="Enter an item here"
            onChange={handleChangeInputValue}
            value={inputValue}
          />
        </section>

        <section className={styles.inputCont}>
          <label htmlFor="grocery-category" />
          <select
            className={styles.groceryCategory}
            id="grocery-category"
            value={groceryCategory}
            onChange={handleChangeGroceryCategory}
          >
            {category.map((category) => {
              return <option value={category}>{category}</option>;
            })}
          </select>
        </section>
        <button className={styles.button} onClick={handleClick}>
          <FaPlus size={20} />
        </button>
      </section>
    </section>
  );
}
