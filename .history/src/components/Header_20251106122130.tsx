import { BsCart3 } from "react-icons/bs";
import { SlShare } from "react-icons/sl";

export default function Header() {
  return (
    <header>
      <nav>
        <section>
          <BsCart3 />
          <h1>SmartList</h1>
        </section>
        <section>
          <button>
            <SlShare />
          </button>
          <button></button>
        </section>
      </nav>
    </header>
  );
}
