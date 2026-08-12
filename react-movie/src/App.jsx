import { Routes, Route } from "react-router-dom";
import MovieHome from "./pages/MovieHome";
import MovieDetail from "./pages/MovieDetail";
import ActorDetail from "./pages/ActorDetail";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MovieHome></MovieHome>}></Route>
        <Route path="/movie/:id" element={<MovieDetail></MovieDetail>}></Route>
        <Route path="/actor/:id" element={<ActorDetail></ActorDetail>}></Route>
      </Routes>
    </>
  );
}

export default App;
