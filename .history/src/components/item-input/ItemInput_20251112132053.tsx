import { useState } from "react";
import DealOptions from "./DealOptions";
import EnterItem from "./EnterItem";
import type { DealOption, Item } from "../../type/item";

type ItemInputProps = {
  onAdd: (item: Item) => void;
  dealOption: DealOption;
  setDealOption: 
}

export default function ItemInput({ onAdd, dealOption, setDealOption }: ItemInputProps) {
  return (
    <>
      <DealOptions dealOption={dealOption} setDealOption={setDealOption} />
      <EnterItem onAdd={onAdd} dealOption={dealOption} />
    </>
  );
}
