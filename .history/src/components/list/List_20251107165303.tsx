import styles from "./List.module.css";
import Filter from "./Filter";
import Items from "./Items";

export default function List({ items, handleDelete }) {
  return (
    <>
      <Filter />
      <Items items={items} />
    </>
  );
}
