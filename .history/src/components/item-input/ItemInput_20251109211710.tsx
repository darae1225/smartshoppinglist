import { useState } from "react";
import DealOptions from "./DealOptions";
import EnterItem from "./EnterItem";

export default function ItemInput({ onAdd, dealOption, setDealOption }) {
  return (
    <>
      <DealOptions dealOption={dealOption} setDealOption={setDealOption} />
      <EnterItem onAdd={onAdd} dealOption={dealOption} />
    </>
  );
}
