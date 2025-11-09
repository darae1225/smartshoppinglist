import DealOptions from "./DealOptions";
import EnterItem from "./EnterItem";

export default function ItemInput({ onAdd }) {
  return (
    <>
      <DealOptions />
      <EnterItem onAdd={onAdd} />
    </>
  );
}
