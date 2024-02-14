import axios from "axios";
import { useState } from "react";

export default function Nuevo() {
  const [formData, setFormData] = useState({
    nombre: "",
    usuario: "",
    password: "",
    email: "",
    telefono: "",
    foto: "",
    curp: "",
    direccionEmpresa: "",
    nombreEmpresa: "",
    rfc: "",
  });

  const [mensaje, setMensaje] = useState("");

  async function guardarUsuario(e) {
    e.preventDefault();

    const response = await axios.post(
      "http://localhost:8080/usuarios/api/nuevousuario",
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
      usuario: "",
      password: "",
      email: "",
      telefono: "",
      foto: null,
      curp: "",
      direccionEmpresa: "",
      nombreEmpresa: "",
      rfc: "",
    });

    // alert("Usuario Guardado");
    setMensaje(response.data);
    setTimeout(() => {
      setMensaje("");
    }, 3000);


  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  return (
    <div className="container mt-4 mb-4">
        {/* mesaje de que se guuardo coreectamente el usuario solo debe aparecewr cuando da respuesta  */}
        {mensaje && (
            <div className="alert alert-success" role="alert">
                {mensaje}
            </div>
        )}
      <form onSubmit={guardarUsuario}>
        <div className="card">
          <div className="card-header">
            <h3>Nuevo Usuario</h3>
          </div>
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className="form-control"
                value={formData.nombre}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="curp">CURP</label>
              <input
                type="text"
                id="curp"
                name="curp"
                className="form-control"
                value={formData.curp}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="direccionEmpresa">Dirección de la Empresa</label>
              <input
                type="text"
                id="direccionEmpresa"
                name="direccionEmpresa"
                className="form-control"
                value={formData.direccionEmpresa}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="nombreEmpresa">Nombre de la Empresa</label>
              <input
                type="text"
                id="nombreEmpresa"
                name="nombreEmpresa"
                className="form-control"
                value={formData.nombreEmpresa}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="rfc">RFC</label>
              <input
                type="text"
                id="rfc"
                name="rfc"
                className="form-control"
                value={formData.rfc}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="usuario">Usuario</label>
              <input
                type="text"
                id="usuario"
                name="usuario"
                className="form-control"
                value={formData.usuario}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="text"
                id="telefono"
                name="telefono"
                className="form-control"
                value={formData.telefono}
                onChange={handleInputChange}
              />
            </div>  
            <div className="form-group">
              <label htmlFor="foto">Foto</label>
              <input
                type="file"
                id="foto"
                name="foto"
                className="form-control"
                onChange={(e) =>
                  setFormData({ ...formData, foto: e.target.files[0] })
                }
              />
            </div>
          </div>
          <div className="card-footer">
            <button className="btn btn-primary">Guardar</button>
          </div>
        </div>
      </form>
    </div>
  );
}
