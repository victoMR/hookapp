import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Counter from "./counter";
// import { Text } from "./text";

import Navbar from "./Navbar";
import Inicio from "./Inicio";
import Productos from "./Productos";
import Nuevo from "./Nuevo";
import EditarUsario from "./EditarUsuario";
import Error from "./Error";

export default function Rutas() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/nuevo" element={<Nuevo />} />
          <Route path="/usuarios/editar/:id" element={<EditarUsario />} />
          {/* <Route path="/services" element={<Services />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
