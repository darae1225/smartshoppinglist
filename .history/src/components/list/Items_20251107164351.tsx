export default function Items({ items }) {
  const handleChange = (e, id) => {};

  return (
    <ul>
      {items.length === 0 ? (
        <p>There's nothing in this list! </p>
      ) : (
        items.map((item) => (
          <div>
            <input
              type="checkbox"
              onChange={() => {
                handleChange(e, item.id);
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
