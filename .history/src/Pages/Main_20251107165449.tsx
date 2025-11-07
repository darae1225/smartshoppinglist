import Header from "../components/header/Header";
import Membership from "../components/membership/Membership";
import List from "../components/list/List";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function Main() {
  const [items, setItems] = useState([]);

  const handleAdd = (newItem) => {
    setItems((prev) => [...prev, newItem]);
  };

  const handleDelete = (deletedItem) => {
    setItems(
      items.filter((prev) => {
        prev.id !== deletedItem.id;
      })
    );
  };

  return (
    <>
      <Header onAdd={handleAdd} />
      <Membership />
      <List items={items} onDelete={handleDelete} />
    </>
  );
}
