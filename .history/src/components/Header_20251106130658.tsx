import styles from "./Header.module.css";
import Nav from "./nav";
import ShopOptions from "./ShopOptions";

export default function Header() {
  return (
    <header>
      <Nav />
      <ShopOptions />
    </header>
  );
}
