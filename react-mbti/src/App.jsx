import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Question from "./pages/Question";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/question" element={<Question></Question>}></Route>
      </Routes>
    </>
  );
}

export default App;
