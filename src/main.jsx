import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const backgroundMusic = new Audio("/sounds/music/ballerina.mp3");
backgroundMusic.volume = 0.1;

document.addEventListener("DOMContentLoaded", () => {
  const volumeButton = document.getElementById("volume-button");
  let soundEnabled = false;
  volumeButton.innerHTML = "🔊";

  volumeButton.addEventListener("click", () => {
    if (soundEnabled) {
      volumeButton.innerHTML = "🔊";
      backgroundMusic.pause();
    } else {
      volumeButton.innerHTML = "🔇";
      backgroundMusic.play();
      backgroundMusic.loop = true;
    }
    soundEnabled = !soundEnabled;
  });
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
