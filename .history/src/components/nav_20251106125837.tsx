export default function Nav() {
  return;
  <nav className={styles.header}>
    <section className={styles.container}>
      <section>
        <BsCart3 size={24} />
        <p>SmartList</p>
      </section>
      <section>
        <button className={styles.button}>
          <SlShare size={24} />
        </button>
        <button className={styles.button}>
          <CgProfile size={24} />
        </button>
      </section>
    </section>
  </nav>;
}
