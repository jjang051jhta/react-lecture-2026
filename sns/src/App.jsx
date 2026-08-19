import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import StoryPage from "./pages/StoryPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StoryPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
