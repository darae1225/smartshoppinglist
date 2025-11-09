import ShopOptions from "./ShopOptions";
import EnterItem from "./EnterItem";

export default function ItemInput({ onAdd }) {
  return (
    <>
      {/* <ShopOptions /> */}
      <EnterItem onAdd={onAdd} />
    </>
  );
}
