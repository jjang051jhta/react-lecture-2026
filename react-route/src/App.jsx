import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Board from "./pages/Board";
import Home from "./pages/Home";
import Member from "./pages/Member";
import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/member" element={<Member></Member>}></Route>
          <Route path="/board" element={<Board></Board>}></Route>
          <Route path="/board/:id" element={<Board></Board>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
