import styles from "./Header.module.css";
import Nav from "./nav";
import ShopOptions from "./ShopOptions";
import EnterItem from "./EnterItem";

export default function Header() {
  return (
    <header>
      <Nav />
      <ShopOptions />
      <EnterItem onAdd={onAdd} />
    </header>
  );
}
