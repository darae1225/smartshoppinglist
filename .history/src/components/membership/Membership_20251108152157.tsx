import styles from "./Membership.module.css";
import { IoMdCard } from "react-icons/io";
import PopupLink from "./PopupLink";

export default function Membership() {
  console.log(membership);

  return (
    <section className={styles.container}>
      <PopupLink membership={flybuys}>
        <IoMdCard size={24} /> Flybuys
      </PopupLink>
      <PopupLink membership={woolworth}>
        <IoMdCard size={24} /> Everyday Rewards
      </PopupLink>
    </section>
  );
}
