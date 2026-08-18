import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import StoryList from "./pages/StoryList";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StoryList />}></Route>
      </Routes>
    </>
  );
}

export default App;
