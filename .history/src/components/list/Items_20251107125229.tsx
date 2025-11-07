export default function Items({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <input type="checkbox" />
        <li key={item.id}> {item.text} </li>
      ))}
    </ul>
  );
}
