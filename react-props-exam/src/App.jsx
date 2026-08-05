import Menu from "./Menu";
import Movie from "./Movie";
import ProductList from "./ProductList";
import Student from "./Student";

function App() {
  //배열 서버에서 data로 전송
  const students = [
    { id: 1, name: "장성호", age: 20, major: "컴공", hobby: "야구" },
    { id: 2, name: "장동건", age: 30, major: "화공", hobby: "배구" },
    { id: 3, name: "현빈", age: 40, major: "물리", hobby: "축구" },
  ];
  const menus = [
    { id: 1, title: "짜장면", price: 7000, category: "중식" },
    { id: 2, title: "비빔밥", price: 10000, category: "한식" },
    { id: 3, title: "돈까스", price: 11000, category: "일식" },
  ];
  const movies = [
    {
      id: 1,
      title: "오디세이",
      director: "크리스토퍼 놀란",
      year: 2026,
      rating: 4.5,
    },
    {
      id: 2,
      title: "왕과 사는 남자",
      director: "장항준",
      year: 2026,
      rating: 4.2,
    },
    {
      id: 3,
      title: "인터스텔라",
      director: "크리스토퍼 놀란",
      year: 2023,
      rating: 4.1,
    },
  ];
  const products = [
    {
      id: 1,
      name: "헤드폰",
      price: 100000,
    },
    {
      id: 2,
      name: "운동화",
      price: 200000,
    },
    {
      id: 3,
      name: "카메라",
      price: 500000,
    },
  ];

  return (
    <>
      {/* <Student name="장성호" major="컴공" age={20} hobby="야구"></Student>
      <Student name="장동건" major="화공" age={21} hobby="축구"></Student>
      <Student name="현빈" major="물리" age={22} hobby="배구"></Student> */}
      {students.map((s) => (
        <Student {...s}></Student>
      ))}
      <hr></hr>
      {menus.map((menu) => {
        return <Menu {...menu}></Menu>;
      })}
      <hr></hr>
      {movies.map((movie) => {
        return <Movie {...movie}></Movie>;
      })}
      <hr></hr>
      <ProductList products={products}></ProductList>
    </>
  );
}

export default App;
