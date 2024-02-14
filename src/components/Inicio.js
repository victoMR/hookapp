import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Inicio() {
  const [dataUsuarios, setDataUsuarios] = useState([]);

  useEffect(() => {
    axios
      .get("https://ejemlofirebase.onrender.com/usuarios//api/mostrarusr")
      .then((respuesta) => {
        console.log(respuesta);
        setDataUsuarios(respuesta.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const listaUsuarios = dataUsuarios.map((usuario) => {
    var foto = "https://ejemlofirebase.onrender.com/uploads/" + usuario.foto;
    // var editar = "https://ejemlofirebase.onrender.com/usuarios/usuarios/editar/" + usuario.id;
    var eliminar = "https://ejemlofirebase.onrender.com/usuarios/usuarios/borrar/" + usuario.id;
    return (
      <tr key={usuario.id} className="align-middle">
        <td>{usuario.id}</td>
        <td>{usuario.nombre}</td>
        <td>{usuario.usuario}</td>
        <td>{usuario.curp}</td>
        <td>{usuario.rfc}</td>
        <td>{usuario.telefono}</td>
        <td>{usuario.email}</td>
        <td>{usuario.nombreEmpresa}</td>
        <td>{usuario.direccionEmpresa}</td>
        <td>
          <img
            src={foto}
            alt={usuario.nombre}
            style={{ width: "50%", borderRadius: "10%", draggable: "false" }}
          />
        </td>
        <td>
          {/* <Link to={editar} className="btn btn-warning">Editar</Link> */}
          <Link to={`/usuarios/editar/${usuario.id}`} className="btn btn-warning">Editar</Link>
          <Link to={eliminar} className="btn btn-danger">Eliminar</Link>
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
            <th>Usuario</th>
            <th>CURP</th>
            <th>RFC</th>
            <th>Telefono</th>
            <th>Email</th>
            <th>Nombre Empresa</th>
            <th>Direccion Empresa</th>
            <th>Foto</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>{listaUsuarios}</tbody>
      </table>
    </>
  );
}
