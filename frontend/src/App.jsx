import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./View/Home";
import GenerateBarcode from "./View/Home/GenerateBarcode";
import ShowBarcode from "./View/Home/ShowBarcode";

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='generate' element={<GenerateBarcode />}/>
        <Route path='show' element={<ShowBarcode />}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
