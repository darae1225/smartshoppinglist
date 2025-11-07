import styles from "./Items.module.css";

export default function Items({ items, onDelete }) {
  const handleChange = (e, item) => {
    if (e.target.checked) {
      onDelete(item);
    }
  };

  return (
    <ul>
      {items.length === 0 ? (
        <p className={styles.empty}>There's nothing in this list! </p>
      ) : (
        items.map((item) => (
          <li key={item.id} className={styles.item}>
            <div className={styles.itemTop}>
              <input type="checkbox" onChange={(e) => handleChange(e, item)} />
              <span className={styles.text}>{item.text}</span>
            </div>
            <span className={styles.category}>{item.groceryCategory}</span>
          </li>
        ))
      )}
    </ul>
  );
}
