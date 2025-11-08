import { useState } from "react";
import Header from "../components/header/Header";
import Membership from "../components/membership/Membership";
import ItemInput from "../components/item-input/ItemInput";
import List from "../components/list/List";

export default function Main() {
  const [items, setItems] = useState([]);

  const handleAdd = (newItem) => {
    setItems((prev) => [...prev, newItem]);
  };

  const handleDelete = (deletedItem) => {
    setItems((prev) => prev.filter((item) => item.id !== deletedItem.id));
  };

  return (
    <>
      <Header />
      <ItemInput onAdd={handleAdd} />
      <Membership />
      <List items={items} onDelete={handleDelete} />
    </>
  );
}
