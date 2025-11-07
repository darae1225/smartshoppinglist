import styles from "./Membership.module.css";

export default function Membership() {
  return (
    <section className={styles.container}>
      <button className={styles.flybuys}>Flybuys</button>
      <button className={styles.everydayrewards}>Everyday Rewards</button>
    </section>
  );
}
