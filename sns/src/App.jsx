import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import StoryPage from "./pages/StoryPage";
import SignupPage from "./pages/SignupPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StoryPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
