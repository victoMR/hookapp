import axios from "axios";
import { useEffect } from "react";
import { json, useNavigate, useParams } from "react-router-dom";
import { URL_API2 } from "../config/rutas";

export default function BorrarUsuario() {
  const params = useParams();
  const navegate = useNavigate();

    const handleDelete = () => {
    navegate("/");
    };
    
  useEffect(() => {
    async function borrar() {
      const response = await axios.get(URL_API2 + "borrarUsr/" + params.id);
      const responseFormat = json(response);
      console.log(responseFormat);
      navegate("/");
    }
    borrar();
  }, [navegate, params.id]);

  return (
    <div className="container">
      <h1 className="mt-4">Borrar Usuario {params.name}</h1>
      <button className="btn btn-primary mt-4" onClick={handleDelete}>
        Borrar
      </button>
      <button className="btn btn-secondary mt-4" onClick={() => navegate("/")}>
        Regresar
      </button>
    </div>
  );
}
