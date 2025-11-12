import DealOptions from "./DealOptions";
import EnterItem from "./EnterItem";
import type { DealOption, Item } from "../../type/item";
import type { Dispatch, SetStateAction } from "react";

type ItemInputProps = {
  onAdd: (item: Item) => void;
  dealOption: DealOption;
  setDealOption: Dispatch<SetStateAction<DealOption>>;
};

export default function ItemInput({
  onAdd,
  dealOption,
  setDealOption,
}: ItemInputProps) {
  return (
    <>
      <DealOptions dealOption={dealOption} setDealOption={setDealOption} />
      <EnterItem onAdd={onAdd} dealOption={dealOption} />
    </>
  );
}
