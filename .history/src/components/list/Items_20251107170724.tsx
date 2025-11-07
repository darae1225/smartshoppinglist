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
        <p>There's nothing in this list! </p>
      ) : (
        items.map((item) => (
          <div className={styles.container}>
            <input
              type="checkbox"
              onChange={(e) => {
                handleChange(e, item);
              }}
            />
            <li key={item.id}> {item.text} </li>
            <p>{item.groceryCategory}</p>
          </div>
        ))
      )}
    </ul>
  );
}
