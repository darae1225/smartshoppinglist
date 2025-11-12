import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import styles from "./EnterItem.module.css";
import { v4 as uuidv4 } from "uuid";
import { category } from "../../data/category";
import { Item } from "../../type/item";

type EnterItemProps = {
  onAdd: (item: Item) => void;
  dealOption: "Essentials" | "Wait for deals" | "";
};
export default function EnterItem({ onAdd, dealOption }) {
  const [inputValue, setInputValue] = useState("");
  const [groceryCategory, setGroceryCategory] = useState("Any");

  const handleChangeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleChangeGroceryCategory = (e) => {
    const selectedCategory = e.target.value;
    setGroceryCategory(selectedCategory);
  };

  const handleClick = () => {
    if (inputValue.trim() === "") return;
    onAdd({
      id: uuidv4(),
      text: inputValue,
      status: "active",
      groceryCategory,
      dealOption,
    });
    setInputValue("");
    setGroceryCategory("Any");
  };

  return (
    <section>
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
