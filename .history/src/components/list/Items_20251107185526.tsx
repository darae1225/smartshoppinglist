import styles from "./Items.module.css";
import { MdOutlineSavings } from "react-icons/md";

export default function Items({ items, onDelete }) {
  const handleChange = (e, item) => {
    if (e.target.checked) {
      onDelete(item);
    }
  };

  return (
    <ul>
      {items.length === 0 ? (
        <div className={styles.empty}>
          <p>There's nothing in this list!</p>
          <span>
            <MdOutlineSavings />
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
            <span className={styles.category}>{item.groceryCategory}</span>
          </li>
        ))
      )}
    </ul>
  );
}
