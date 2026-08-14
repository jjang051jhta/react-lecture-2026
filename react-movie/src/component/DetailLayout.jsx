import Footer from "./Footer";
import Header from "./Header";

function DetailLayout({ children }) {
  return (
    <>
      <Header></Header>
      <main>
        <h1>여기는 공통 요소들이 모여 있는 곳입니다.</h1>
        {children}
      </main>
      <Footer></Footer>
    </>
  );
}
export default DetailLayout;
