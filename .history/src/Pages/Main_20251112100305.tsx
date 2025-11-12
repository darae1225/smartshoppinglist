import { useState, useEffect } from "react";
import Header from "../components/header/Header";
import ItemInput from "../components/item-input/ItemInput";
import Membership from "../components/membership/Membership";
import List from "../components/list/List";

export default function Main() {
  const [items, setItems] = useState([]);
  const [dealOption, setDealOption] = useState("");

  const handleAdd = (newItem) => {
    setItems((prev) => [...prev, newItem]);
  };

  const handleDelete = (deletedItem) => {
    setItems((prev) => prev.filter((item) => item.id !== deletedItem.id));
  };

  useEffect(() => {
    const saveItems = localStorage.getItem("items");
    if (saveItems) {
      setItems(saveItems);
    }
  });
  useEffect(() => {
    localStorage.setItem("items", items);
  }, [items]);

  return (
    <>
      <Header />
      <ItemInput
        onAdd={handleAdd}
        dealOption={dealOption}
        setDealOption={setDealOption}
      />
      <Membership />
      <List items={items} onDelete={handleDelete} dealOption={dealOption} />
    </>
  );
}
