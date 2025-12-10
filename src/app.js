import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./app/telainicial/Home";
import Ideias from "./app/ideias/page";
import Menu from "./app/componentes/menu";

export default function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ideias" element={<Ideias />} />
      </Routes>
    </BrowserRouter>
  );
}
