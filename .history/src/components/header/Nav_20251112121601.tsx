import { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { SlShare } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import styles from "./Nav.module.css";

export default function Nav() {
  const [shared, setShared] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "SmarList App",
      text: "Check out this awesome SmartList app!",
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      } catch (err) {
        console.error("Share canceleld or failed", err);
      }
    } else {
      navigator.clipboard.writeText(shareData.url);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <nav>
      <section className={styles.container}>
        <section className={styles.navSection}>
          <BsCart3 size={30} className={styles.logo} />
          <p className={styles.logoText}>SmartList</p>
        </section>
        <section className={styles.navSection}>
          <button className={styles.button} onClick={handleShare}>
            <SlShare size={24} />
          </button>
          <button className={styles.button}>
            <CgProfile size={24} />
          </button>
        </section>
      </section>
      {shared && <span className={styles.sharedText}>Thanks for sharing!</span>}
    </nav>
  );
}
