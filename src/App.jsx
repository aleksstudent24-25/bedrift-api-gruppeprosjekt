import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import fetchData from "./components/datafetch";
import "./App.css";

function App() {
  return fetchData();
}

export default App;
