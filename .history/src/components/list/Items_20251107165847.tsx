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
          <div>
            <input
              type="checkbox"
              onChange={(e) => {
                handleChange(e, item);
              }}
            />
            <li key={item.id}> {item.text} </li>
            <span>{item.groceryCategory}</span>
          </div>
        ))
      )}
    </ul>
  );
}
