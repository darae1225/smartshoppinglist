import Header from "../components/header/Header";
import Membership from "../components/membership/Membership";
import List from "../components/list/List";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function Main() {
  const [items, setItems] = useState([
    {
      id: uuidv4(),
      text: "new item 1",
      status: "active",
      dealOption: "essential",
    },
    {
      id: uuidv4(),
      text: "new item 2",
      status: "active",
      dealOption: "waitForDeal",
    },
    {
      id: uuidv4(),
      text: "new item 3",
      status: "completed",
      dealOption: "essential",
    },
    {
      id: uuidv4(),
      text: "new item 4",
      status: "completed",
      dealOption: "waitForDeal",
    },
  ]);

  const handleAdd = (newItem) => {
    setItems((prev) => [...prev, newItem]);
  };

  return (
    <>
      <Header onAdd={handleAdd} />
      <Membership />
      <List />
      <ul>
        {items.map((item) => (
          <li key={item.id}> {item} </li>
        ))}
      </ul>
    </>
  );
}
