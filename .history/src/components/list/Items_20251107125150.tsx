export default function Items({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.text} </li>
      ))}
    </ul>
  );
}
