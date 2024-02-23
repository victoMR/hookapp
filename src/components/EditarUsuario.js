import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { URL_API2 } from "../config/rutas";

export default function EditarUsuario() {
  const params = useParams();
  const [id] = useState(params.id);
  const [nombre, setNombre] = useState("");
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [foto, setFoto] = useState("");
  const [curp, setCurp] = useState("");
  const [direccionEmpresa, setDireccionEmpresa] = useState("");
  const [admin, setAdmin] = useState(false);
  const [nombreEmpresa, setNombreEmpresa] = useState("");
  const [rfc, setRfc] = useState("");
  const [viejoPassword, setViejoPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    obtenerUsuario();

    async function obtenerUsuario() {
      const respuesta = await axios.get(
        URL_API2+`buscarUsuarioPorId/${params.id}`
      );
      console.log(respuesta.data);
      setNombre(respuesta.data.nombre);
      setUsuario(respuesta.data.usuario);
      setPassword(respuesta.data.password);
      setEmail(respuesta.data.email);
      setTelefono(respuesta.data.telefono);
      setFoto(respuesta.data.foto);
      setCurp(respuesta.data.curp);
      setDireccionEmpresa(respuesta.data.direccionEmpresa);
      setAdmin(respuesta.data.admin);
      setNombreEmpresa(respuesta.data.nombreEmpresa);
      setViejoPassword(respuesta.data.password);
      setRfc(respuesta.data.rfc);
    }
  }, [params.id]);

  const actualizarUsuario = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("usuario", usuario);
    
    if (password !== "") {
      formData.append("password", password);
    } else {
      formData.append("password", viejoPassword);
    }
    
    formData.append("email", email);
    formData.append("telefono", telefono);
    formData.append("foto", foto);
    formData.append("curp", curp);
    formData.append("direccionEmpresa", direccionEmpresa);
    formData.append("admin", admin);
    formData.append("nombreEmpresa", nombreEmpresa);
    formData.append("rfc", rfc);
    formData.append("id", id);

    const res = await axios.post(
      URL_API2+"editarUsr",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    
    console.log(res.data);
    setNombre("");
    setUsuario("");
    setEmail("");
    setTelefono("");
    setFoto(null);
    setCurp("");
    setAdmin(false);
    setNombreEmpresa("");
    setRfc("");
    setPassword("");
    setDireccionEmpresa("");
    setMensaje(res.data);
    
    setTimeout(() => {
      setMensaje("");
      // Redirect to the main route
      window.location.href = "/";
    }, 1000);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFoto(selectedFile);
  };

  function handleInputChange(e) {
    const { name, value } = e.target;
    
    if (name === "nombre") {
      setNombre(value);
    } else if (name === "usuario") {
      setUsuario(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "telefono") {
      setTelefono(value);
    } else if (name === "foto") {
      setFoto(value);
    } else if (name === "curp") {
      setCurp(value);
    } else if (name === "direccionEmpresa") {
      setDireccionEmpresa(value);
    } else if (name === "admin") {
      setAdmin(value);
    } else if (name === "nombreEmpresa") {
      setNombreEmpresa(value);
    } else if (name === "rfc") {
      setRfc(value);
    } else {
      console.log("Error en el handleInputChange");
    }
  }

  var rutafoto = `https://ejemlofirebase.onrender.com/uploads/${foto}`;

  return (
    <div className="container mt-4 mb-4">
      {mensaje && (
        <div className="alert alert-success" role="alert">
          {mensaje}
        </div>
      )}
      <form onSubmit={actualizarUsuario}>
        <div className="card">
          <div className="card-header">
            <h3>Editar</h3>
          </div>
          <div className="card-body">
            <div className="form-group">
              <input
                type="text"
                id="id"
                name="id"
                className="form-control"
                value={id}
                readOnly
                hidden
              />
              <input
                id="admin"
                name="admin"
                type="text"
                value={admin}
                hidden
                readOnly
              ></input>
              <input
                id="viejoPassword"
                name="viejoPassword"
                type="text"
                value={viejoPassword}
                hidden
                readOnly
              ></input>
            </div>

            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className="form-control"
                value={nombre}
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
                maxLength={18}
                value={curp}
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
                value={direccionEmpresa}
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
                value={nombreEmpresa}
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
                maxLength={13}
                value={rfc}
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
                value={usuario}
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
                placeholder="Ingresa tu nueva contraseña o deja en blanco para no cambiarla"
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
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Telefono</label>
              <input
                type="text"
                id="telefono"
                name="telefono"
                className="form-control"
                value={telefono}
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
            </div>

          <div className="card-footer">
            <button type="submit" className="btn btn-primary">
              Guardar
            </button>
            <a href="/" className="btn btn-warning m-2">
              Regresar
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
