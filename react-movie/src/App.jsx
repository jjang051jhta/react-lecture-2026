import { Routes, Route } from "react-router-dom";
import MovieHome from "./pages/MovieHome";
import MovieDetail from "./pages/MovieDetail";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MovieHome></MovieHome>}></Route>
        <Route path="/movie/:id" element={<MovieDetail></MovieDetail>}></Route>
      </Routes>
    </>
  );
}

export default App;
