export default function Items({ items }) {
  return (
    <ul>
      {items.length === 0 ? (
        <p>There's no items on the list</p>
      ) : (
        items.map((item) => (
          <div>
            <input type="checkbox" />
            <li key={item.id}> {item.text} </li>
          </div>
        ))
      )}
    </ul>
  );
}
