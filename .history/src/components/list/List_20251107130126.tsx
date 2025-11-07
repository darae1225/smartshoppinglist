import styles from "./List.module.css";
import Filter from "./Filter";
import Items from "./Items";

export default function List({ items }) {
  return (
    <>
      <Filter />
      <Items items={items} />
    </>
  );
}
