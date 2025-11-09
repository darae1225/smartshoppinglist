import { MdOutlineDiscount } from "react-icons/md";
import styles from "./DealOptions.module.css";

export default function DealOptions({ dealOption, setDealOption }) {
  const handleDealOption = (e) => {
    const selected = e.target.value;
    setDealOption((prev) => (prev === selected ? "" : selected));
  };

  return (
    <section className={styles.dealSection}>
      <button
        className={styles.dealButton}
        value="Essentials"
        onClick={handleDealOption}
        style={{
          backgroundColor:
            dealOption === "Essentials"
              ? "var(--color-accent)"
              : "var(--color-text)",
          color:
            dealOption === "Essentials"
              ? "var(--color-text)"
              : "var(--color-accent)",
        }}
      >
        Essentials
      </button>
      <button
        className={styles.dealButton}
        onClick={handleDealOption}
        value="Wait for deals"
        style={{
          backgroundColor:
            dealOption === "Wait for deals"
              ? "var(--color-text)"
              : "var(--color-accent)",
          color:
            dealOption === "Wait for deals"
              ? "var(--color-accent)"
              : "var(--color-text)",
        }}
      >
        <MdOutlineDiscount size={12} /> Wait for Deals
      </button>
    </section>
  );
}
