import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL_API_PRODUCTOS } from "../config/rutas";

export default function NuevoProducto() {
  const navegate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    foto: "",
    categoria: "",
    cantidad: "",
    iva: "",
    descuento: "",
    reserva: "",
  });

  const [mensaje, setMensaje] = useState("");

  async function guardarProducto(e) {
    e.preventDefault();

    const response = await axios.post(
      URL_API_PRODUCTOS + "nuevoproducto",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(response);
    // reset form
    setFormData({
      nombre: "",
      descripcion: "",
      precio: "",
      foto: null,
      cantidad: "",
      categoria: "",
      iva: "",
      descuento: "",
      reserva: "",
    });

    // alert("Usuario Guardado");
    setMensaje(response.data);
    setTimeout(() => {
      setMensaje("");
      navegate("/productos");
    }, 2000);
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  return (
    <div>
      <div className="card m-5 bg-dark-subtle">
        <div className="card-header">
          <h1>Nuevo Producto</h1>
        </div>
        <div className="card-body">
          <form onSubmit={guardarProducto}>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Descripcion</label>
              <input
                type="text"
                className="form-control"
                name="descripcion"
                value={formData.descripcion}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Precio</label>
              <input
                type="number"
                className="form-control"
                name="precio"
                value={formData.precio}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Cantidad</label>
              <input
                type="number"
                className="form-control"
                name="cantidad"
                value={formData.cantidad}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Foto</label>
              <input
                type="file"
                className="form-control"
                name="foto"
                onChange={(e) =>
                  setFormData({ ...formData, foto: e.target.files[0] })
                }
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Categoria</label>
              <input
                type="text"
                className="form-control"
                name="categoria"
                value={formData.categoria}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">IVA</label>
              <input
                type="number"
                className="form-control"
                name="iva"
                value={formData.iva}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Descuento</label>
              <input
                type="number"
                className="form-control"
                name="descuento"
                value={formData.descuento}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">En Reserva</label>
              <input
                type="number"
                className="form-control"
                name="reserva"
                value={formData.reserva}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary m-1">
              Guardar
            </button>
            <button
              onClick={() => navegate("/productos")}
              className="btn btn-secondary m-1">
              Regresar
            </button>
          </form>
          <div>{mensaje}</div>
        </div>
      </div>
    </div>
  );
}
