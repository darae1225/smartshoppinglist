export default function Items({ items }) {
  const handleCheck = (e) => {
    console.log(e.target.value);
    console.log(e);
  };

  return (
    <ul>
      {items.length === 0 ? (
        <p>There's nothing in this list! </p>
      ) : (
        items.map((item) => (
          <div>
            <input type="checkbox" checked={handleCheck} />
            <li key={item.id}> {item.text} </li>
            <span>{item.groceryCategory}</span>
          </div>
        ))
      )}
    </ul>
  );
}
