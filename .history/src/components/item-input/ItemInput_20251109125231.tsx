import { useState } from "react";
import DealOptions from "./DealOptions";
import EnterItem from "./EnterItem";

export default function ItemInput({ onAdd }) {
  const [dealOption, setDealOption] = useState("Essentials");

  return (
    <>
      <DealOptions dealOption={dealOption} setDealOption={setDealOption} />
      <EnterItem onAdd={onAdd} dealOption={dealOption} />
    </>
  );
}
