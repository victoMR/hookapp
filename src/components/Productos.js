import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Productos() {
    const [dataProductos, setDataProductos] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://ejemlofirebase.onrender.com/productos/productos/api/mostrarProductos"
            )
            .then((respuesta) => {
                console.log(respuesta);
                setDataProductos(respuesta.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const listaProductos = dataProductos.map((producto) => {
        var foto =
            "http://localhost:8080/uploadsProducts/" + producto.foto;
        var editar =
            "http://localhost:8080/productos/productos/editar/" +
            producto.id;
        var eliminar =
            "http://localhost:8080/productos/productos/borrar" +
            producto.id;
        return (
            <tr key={producto.id} className="align-middle">
                <td>{producto.id}</td>
                <td>{producto.nombre}</td>
                <td>{producto.descripcion}</td>
                <td>{producto.precio}</td>
                <td>{producto.cantidad}</td>
                <td>
                    <img
                        src={foto}
                        alt={producto.nombre}
                        style={{ width: "10%", borderRadius: "10%", draggable: "false" }}
                    />
                </td>
                <td>
                    <Link to={editar} className="btn btn-warning">
                        Editar
                    </Link>
                    <Link to={eliminar} className="btn btn-danger">
                        Eliminar
                    </Link>
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
