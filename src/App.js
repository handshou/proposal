import React from "react";
import Mystery from "./components/Mystery";
import WrappedMystery from "./components/WrappedMystery";
import AsyncMystery from "./components/AsyncMystery";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Mystery />
      <WrappedMystery />
      <AsyncMystery />
    </div>
  );
}

export default App;
