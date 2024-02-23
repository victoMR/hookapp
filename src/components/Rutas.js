import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Counter from "./counter";
// import { Text } from "./text";

import Navbar from "./Navbar";
import Inicio from "./Inicio";
import Nuevo from "./Nuevo";
import EditarUsario from "./EditarUsuario";
import Error from "./Error";
import BorrarUsuario from "./BorrarUsuario";
import Productos from "./Productos";
import NuevoProducto from "./NuevoProducto";
import EditarProducto from "./EditarProducto";
import BorrarProducto from "./BorrarProducto";

export default function Rutas() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>  
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Inicio />} />
          <Route path="/nuevo" element={<Nuevo />} />
          <Route path="/usuarios/editar/:id" element={<EditarUsario />} />
          <Route path="/usuarios/borrar/:id" element={<BorrarUsuario />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/nuevoProd" element={<NuevoProducto />} />
          <Route path="/productos/editar/:id" element={<EditarProducto />} />
          <Route path="/productos/borrar/:id" element={<BorrarProducto />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
