import { BsCart3 } from "react-icons/bs";
import { SlShare } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <nav className={styles.header}>
        <section className={styles.container}>
          <section>
            <BsCart3 size={24} />
            SmartList
          </section>
          <section>
            <button className={styles.button}>
              <SlShare size={24} />
            </button>
            <button className={styles.button}>
              <CgProfile size={24} />
            </button>
          </section>
        </section>
      </nav>
    </header>
  );
}
