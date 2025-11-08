import ShopOptions from "./ShopOptions";
import EnterItem from "./EnterItem";

export default function ItemInput({ onAdd: any }) {
  return (
    <>
      <ShopOptions />
      <EnterItem onAdd={onAdd} />
    </>
  );
}
