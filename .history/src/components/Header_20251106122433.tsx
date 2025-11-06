import { BsCart3 } from "react-icons/bs";
import { SlShare } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <nav className={styles["header-nav"]}>
        <section>
          <BsCart3 />
          <h1>SmartList</h1>
        </section>
        <section>
          <button>
            <SlShare />
          </button>
          <button>
            <CgProfile />
          </button>
        </section>
      </nav>
    </header>
  );
}
