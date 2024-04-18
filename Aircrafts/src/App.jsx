import "./App.css";
import Home from "./pages/home/Home";
import Creations from "./pages/creations/Creations";
import Records from "./pages/records/Records";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home/>} />
        <Route path="/creations" element={<Creations/>} />
        <Route path="/records" element={<Records/>} />
      </Routes>
    </BrowserRouter> 
  )
}

export default App
