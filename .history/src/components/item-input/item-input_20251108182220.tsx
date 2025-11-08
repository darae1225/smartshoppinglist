import ShopOptions from "./ShopOptions"
import EnterItem from "./EnterItem"

export default function Item-input ({ onAdd }) {
  return (
    <>
      <ShopOptions />
      <EnterItem onAdd={onAdd} />
    </>
  );
}
