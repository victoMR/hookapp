import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Counter from "./counter";
// import { Text } from "./text";
import Error from "./Error";
import Inicio from "./Inicio";
import Productos from "./Productos";
import Navbar from "./Navbar";

export default function Rutas() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          {/* <Route path="/services" element={<Services />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
