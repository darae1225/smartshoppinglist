export default function Items({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <input type="checkbox"></input>
        <li key={item.id}> {item.text} </li>
      ))}
    </ul>
  );
}
