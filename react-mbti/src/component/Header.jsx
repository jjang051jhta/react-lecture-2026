import styles from "./Header.module.css";
function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>고양이 집사</h1>
      </header>
    </>
  );
}
export default Header;
