import styles from "./Membership.module.css";
import { IoMdCard } from "react-icons/io";

export default function Membership() {
  return (
    <section className={styles.container}>
      <button className={styles.flybuys}>
        <IoMdCard /> Flybuys
      </button>
      <button className={styles.everydayrewards}>
        <IoMdCard /> Everyday Rewards
      </button>
    </section>
  );
}
