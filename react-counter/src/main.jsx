import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ChangeName from "./ChangeName.jsx";
import LoginState from "./LoginState.jsx";
import LikeState from "./LikeState.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <hr />
    <ChangeName />
    <hr />
    <LoginState />
    <hr />
    <LikeState />
  </StrictMode>,
);
