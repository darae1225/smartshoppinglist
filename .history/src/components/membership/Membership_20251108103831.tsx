import styles from "./Membership.module.css";
import { IoMdCard } from "react-icons/io";
import PopupLink from "./PopupLink";

export default function Membership() {
  return (
    <section className={styles.container}>
      <PopupLink className={styles.flybuys}>
        <IoMdCard size={24} /> Flybuys
      </PopupLink>
      <button className={styles.everydayrewards}>
        <IoMdCard size={24} /> Everyday Rewards
      </button>
    </section>
  );
}
