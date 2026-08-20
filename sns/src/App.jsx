import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import StoryPage from "./pages/StoryPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<StoryPage />} />

          <Route path="/signup" element={<SignupPage />} />

          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
