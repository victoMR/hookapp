import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { URL_API_PRODUCTOS, URL_API_PRODUCTOS_IMG } from "../config/rutas";

export default function Productos() {
  const [dataProductos, setDataProductos] = useState([]);

  useEffect(() => {
    axios
      .get(URL_API_PRODUCTOS + "mostrarProductos")
      .then((respuesta) => {
        console.log(respuesta);
        setDataProductos(respuesta.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const listaProductos = dataProductos.map((producto) => {
    var foto = URL_API_PRODUCTOS_IMG + producto.foto;
    // var editar = "http://localhost:8080/productos/productos/editar/" + producto.id;
    // var eliminar = "http://localhost:8080/productos/productos/borrar" + producto.id;
    return (
      <tr key={producto.id} className="align-middle">
        <td>{producto.id}</td>
        <td>{producto.nombre}</td>
        <td>{producto.descripcion}</td>
        <td>${producto.precio}</td>
        <td>${producto.iva}</td>
        <td>{producto.categoria}</td>
        <td>${producto.descuento}</td>
        <td>#{producto.cantidad}</td>
        <td>
          <img
            src={foto}
            alt={producto.nombre}
            style={{ width: "10%", borderRadius: "10%", draggable: "false" }}
          />
        </td>
        <td>
          <Link
            to={`/productos/editar/${producto.id}`}
            className="btn btn-warning p-1 m-1">
            Editar
          </Link>
          <Link
            to={`/productos/borrar/${producto.id}`}
            className="btn btn-danger p-1 m-1">Borrar</Link>
        </td>
      </tr>
    );
  });

  return (
    <>
      <table className="table table-dark table-striped table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Precio</th>
            <th>Iva</th>
            <th>Categoria</th>
            <th>Descuento</th>
            <th>Cantidad</th>
            <th>Foto</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>{listaProductos}</tbody>
      </table>
    </>
  );
}
