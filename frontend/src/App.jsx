import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./View/Home";
import GenerateBarcode from "./View/Home/GenerateBarcode";
import ShowBarcode from "./View/Home/ShowBarcode";

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
