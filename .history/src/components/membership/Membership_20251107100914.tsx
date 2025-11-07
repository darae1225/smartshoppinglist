import styles from "./Membership.module.css";

export default function Membership() {
  return (
    <section className={styles.container}>
      <button className="flybuys">Flybuys</button>
      <button className="everydayrewards">Everyday Rewards</button>
    </section>
  );
}
