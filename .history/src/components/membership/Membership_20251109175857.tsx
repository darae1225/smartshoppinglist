import styles from "./Membership.module.css";
import { IoMdCard } from "react-icons/io";
import PopupLink from "./PopupLink";

export default function Membership() {
  return (
    <section className={styles.container}>
      <div>
        <PopupLink membership="flybuys">
          <IoMdCard size={24} className={styles.membershipIcon} /> Flybuys
        </PopupLink>
      </div>
      <div>
        <PopupLink membership="everydayrewards">
          <IoMdCard size={24} className={styles.membershipIcon} /> Everyday
          Rewards
        </PopupLink>
      </div>
    </section>
  );
}
