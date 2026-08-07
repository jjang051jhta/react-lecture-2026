import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Question from "./pages/Question";
import Result from "./pages/Result";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/question" element={<Question></Question>}></Route>
        <Route path="/result" element={<Result></Result>}></Route>
      </Routes>
    </>
  );
}

export default App;
