import Footer from "./Footer";
import Header from "./Header";
import styles from "../css/MovieDetail.module.css";

function DetailLayout({ children, backgroundImage }) {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
      <div
        className={styles.bg}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>
    </>
  );
}
export default DetailLayout;
