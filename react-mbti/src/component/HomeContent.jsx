import Cat from "../assets/images/cat.png";
import styles from "./HomeContent.module.css";
import { useNavigate, Link } from "react-router-dom";

function HomeContent() {
  const navigate = useNavigate();
  return (
    <>
      <section className={styles.content}>
        <h2 className={styles.title}>나에게 맞는 집사는 누구?</h2>
        <img src={Cat} alt="cat" className={styles.cat}></img>
        <div>
          {/* <button
            className={styles.button}
            onClick={() => {
              //alert("클릭");
              navigate("/question");
            }}
          >
            START
          </button> */}
          <Link to="/question" className={styles.button}>
            START
          </Link>
        </div>
      </section>
    </>
  );
}
export default HomeContent;
