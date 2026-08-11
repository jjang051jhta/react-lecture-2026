import styles from "../css/Header.module.css";
function Header() {
  return (
    <>
      <header className={styles.header}>
        <button className={styles.button}> PREV </button>
        <h1 className={styles.title}>MOVIE APP</h1>
      </header>
    </>
  );
}
export default Header;
