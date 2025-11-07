export default function Items({ items }) {
  return (
    <ul>
      <div>
        <input type="checkbox" />
        <li>Milk</li>
        <span>label</span>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.text} </li>
        ))}
      </ul>
    </ul>
  );
}
