import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import StoryPage from "./pages/StoryPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
          style: {
            background: "#222",
            color: "#fff",
          },
          success: {
            style: {
              background: "#006cc5",
              color: "#fff",
            },
          },
          error: {
            style: {
              background: "#e40303",
              color: "#fff",
            },
          },
        }}
      ></Toaster>
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
