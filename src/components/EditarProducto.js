import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { URL_API_PRODUCTOS } from "../config/rutas";

export default function EditarProducto() {
  const params = useParams();
  const navegate = useNavigate();
  const [id, setId] = useState(params.id);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [foto, setFoto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [iva, setIva] = useState("");
  const [descuento, setDescuento] = useState("");
  const [reserva, setReserva] = useState("");
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    obtenerProducto();
    async function obtenerProducto() {
      try {
        const response = await axios.get(
          URL_API_PRODUCTOS + "buscarPorIdProducto/" + params.id
        );
        console.log(response.data); // Asegúrate de que la respuesta se esté imprimiendo correctamente
        const producto = response.data; // Guarda la respuesta en una variable
        setId(producto.id);
        setNombre(producto.nombre);
        setDescripcion(producto.descripcion);
        setPrecio(producto.precio);
        setFoto(producto.foto);
        setCategoria(producto.categoria);
        setCantidad(producto.cantidad);
        setIva(producto.iva);
        setDescuento(producto.descuento);
        setReserva(producto.reserva);
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    }
  }, [params.id]);

  const guardarProducto = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", id);
    formData.append("nombre", nombre);
    formData.append("descripcion", descripcion);
    formData.append("precio", precio);
    formData.append("foto", foto);
    formData.append("categoria", categoria);
    formData.append("cantidad", cantidad);
    formData.append("iva", iva);
    formData.append("descuento", descuento);
    formData.append("reserva", reserva);
    console.log(
      " Datos guardados " +
        "id: " +
        id +
        " nombre: " +
        nombre +
        " descripcion: " +
        descripcion +
        " precio: " +
        precio +
        " foto: " +
        foto +
        " categoria: " +
        categoria +
        " cantidad: " +
        cantidad +
        " iva: " +
        iva +
        " descuento: " +
        descuento +
        " reserva: " +
        reserva
    );
    try {
      const response = await axios.post(
        URL_API_PRODUCTOS + "editarProducto",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("respuesta del server "+response.data);
      setId("");
      setNombre("");
      setDescripcion("");
      setPrecio("");
      setFoto(null);
      setCategoria("");
      setCantidad("");
      setIva("");
      setDescuento("");
      setReserva("");
      setMensaje(response.data);
      setTimeout(() => {
        setMensaje("");
        navegate("/productos");
      }, 1000);
    } catch (error) {
      console.error("Error al guardar el producto:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "id") {
      setId(value);
    } else if (name === "nombre") {
      setNombre(value);
    } else if (name === "descripcion") {
      setDescripcion(value);
    } else if (name === "precio") {
      setPrecio(value);
    } else if (name === "foto") {
      setFoto(value);
    } else if (name === "categoria") {
      setCategoria(value);
    } else if (name === "cantidad") {
      setCantidad(value);
    } else if (name === "iva") {
      setIva(value);
    } else if (name === "descuento") {
      setDescuento(value);
    } else if (name === "reserva") {
      setReserva(value);
    } else {
      console.log("No se encontro el campo");
    }
  };

  var rutafoto = `https://ejemlofirebase.onrender.com/uploadsProducts/${foto}`;

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFoto(selectedFile);
  };

  return (
    <div className="card m-5 bg-dark-subtle">
      <div className="card-header">
        <h2>Editar Producto : {nombre}</h2>
      </div>
      <form onSubmit={guardarProducto}>
        <div className="card-body">
          <div className="mb-1">
            <input
              type="text"
              className="form-control"
              id="id"
              name="id"
              value={id}
              onChange={handleInputChange}
              disabled
              hidden
            />
          </div>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              value={nombre}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="descripcion" className="form-label">
              Descripcion
            </label>
            <input
              type="text"
              className="form-control"
              id="descripcion"
              name="descripcion"
              value={descripcion}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="precio" className="form-label">
              Precio
            </label>
            <input
              type="text"
              className="form-control"
              id="precio"
              name="precio"
              value={precio}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <div className="container m-2">
              <img
                src={rutafoto}
                alt={foto}
                style={{
                  width: "10%",
                  borderRadius: "10%",
                  draggable: "false",
                }}
              />
            </div>
            <label htmlFor="foto">Foto</label>
            <input
              type="file"
              id="foto"
              name="foto"
              className="form-control"
              placeholder={foto}
              text={foto}
              onChange={handleFileChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="categoria" className="form-label">
              Categoria
            </label>
            <input
              type="text"
              className="form-control"
              id="categoria"
              name="categoria"
              value={categoria}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="cantidad" className="form-label">
              Cantidad
            </label>
            <input
              type="text"
              className="form-control"
              id="cantidad"
              name="cantidad"
              value={cantidad}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="iva" className="form-label">
              IVA
            </label>
            <input
              type="text"
              className="form-control"
              id="iva"
              name="iva"
              value={iva}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="descuento" className="form-label">
              Descuento
            </label>
            <input
              type="text"
              className="form-control"
              id="descuento"
              name="descuento"
              value={descuento}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="reserva" className="form-label">
              Reserva
            </label>
            <input
              type="text"
              className="form-control"
              id="reserva"
              name="reserva"
              value={reserva}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="card-footer">
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
          <button
            onClick={() => navegate("/productos")}
            className="btn btn-warning m-2">
            Regresar
          </button>
        </div>
      </form>
      {mensaje && <div className="alert alert-success">{mensaje}</div>}
    </div>
  );
}
