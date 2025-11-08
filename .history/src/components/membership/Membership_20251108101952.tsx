import styles from "./Membership.module.css";
import { IoMdCard } from "react-icons/io";
import { NavLink } from "react-router-dom";

export default function Membership() {
  return (
    <section className={styles.container}>
      <NavLink to="/flybuys" className={styles.flybuys}>
        <IoMdCard size={24} /> Flybuys
      </NavLink>
      <button className={styles.everydayrewards}>
        <IoMdCard size={24} /> Everyday Rewards
      </button>
    </section>
  );
}
