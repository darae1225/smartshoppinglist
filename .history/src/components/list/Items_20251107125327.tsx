export default function Items({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <div>
          <input type="checkbox" />
          <li key={item.id}> {item.text} </li>
        </div>
      ))}
    </ul>
  );
}
