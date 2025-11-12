import styles from "./Items.module.css";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import type { Item } from "../../type/item";
import type { ChangeEvent } from "react";

type ItemsProps = {
  items: Item[];
  onDelete: (item: Item) => void;
  filteredCategory: string;
};
export default function Items({
  items,
  onDelete,
  filteredCategory,
}: ItemsProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>, item: Item) => {
    if (e.target.checked) {
      onDelete(item);
    }
  };

  const filtered =
    filteredCategory && filteredCategory !== "All"
      ? items.filter((item) => item.groceryCategory === filteredCategory)
      : items;
  const essentials = filtered.filter(
    (item) => item.dealOption === "Essentials"
  );
  const waitForDeals = filtered.filter(
    (item) => item.dealOption !== "Essentials"
  );

  const sortedItems = [...essentials, ...waitForDeals];

  return (
    <ul className={styles.ul}>
      {sortedItems.length === 0 ? (
        <div className={styles.empty}>
          <p className={styles.emptyText}>There's nothing in this list!</p>
          <span className={styles.saving}>
            <FaRegFaceSmileBeam size={30} className={styles.icon} />
          </span>
        </div>
      ) : (
        sortedItems.map((item) => (
          <li key={item.id} className={styles.item}>
            <div className={styles.itemTop}>
              <input
                type="checkbox"
                className={styles.checkbox}
                onChange={(e) => handleChange(e, item)}
              />
              <span className={styles.text}>{item.text}</span>
            </div>
            <span className={styles.category}>
              {item.groceryCategory}
              <span
                className={
                  item.dealOption === "Essentials"
                    ? styles.essentials
                    : styles.waitfordeals
                }
              >
                - {item.dealOption}
              </span>
            </span>
          </li>
        ))
      )}
    </ul>
  );
}
