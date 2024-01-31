import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Error = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20%", fontSize: "40px" }}>
      <h1 style={{ fontSize: "24px", color: "red", marginBottom: "10px" }}>
        Error 404
      </h1>
      <p style={{ fontSize: "18px", fontStyle: "italic" }}>
        Pagina no encontrada
      </p>
      <p style={{ fontSize: "14px", color: "gray" }}>
        Checa la URL y intentalo de nuevo{" "}
      </p>
    </div>
  );
};

export default Error;
