import { useState } from "react";
import Header from "../components/header/Header";
import ItemInput from "../components/item-input/ItemInput";
import Membership from "../components/membership/Membership";
import List from "../components/list/List";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Main() {
  const [items, setItems] = useLocalStorage("items", []);
  const [dealOption, setDealOption] = useState("");

  const handleAdd = (newItem) => {
    setItems((prev) => [...prev, newItem]);
  };

  const handleDelete = (deletedItem) => {
    setItems((prev) => prev.filter((item) => item.id !== deletedItem.id));
  };

  return (
    <>
      <Header />
      <ItemInput
        onAdd={handleAdd}
        dealOption={dealOption}
        setDealOption={setDealOption}
      />
      <Membership />
      <List items={items} onDelete={handleDelete} />
    </>
  );
}
