import styles from "./Items.module.css";
import { FaRegFaceSmileBeam } from "react-icons/fa6";

export default function Items({ items, onDelete, filteredCategory }) {
  const handleChange = (e, item) => {
    if (e.target.checked) {
      onDelete(item);
    }
  };

  const filtered = items.filter(
    (item) => item.groceryCategory === item.groceryCategory
  );

  return (
    <ul className={styles.ul}>
      {items.length === 0 ? (
        <div className={styles.empty}>
          <p className={styles.emptyText}>There's nothing in this list!</p>
          <span className={styles.saving}>
            <FaRegFaceSmileBeam size={30} className={styles.icon} />
          </span>
        </div>
      ) : (
        items.map((item) => (
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
