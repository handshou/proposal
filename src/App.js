import React from "react";
import Mystery from "./components/Mystery";
import WrappedMystery from "./components/WrappedMystery";
import AsyncMystery from "./components/AsyncMystery";
import MysteryWithPromise from "./components/MysteryWithPromise";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Mystery />
      <WrappedMystery />
      <AsyncMystery />
      <MysteryWithPromise />
    </div>
  );
}

export default App;
