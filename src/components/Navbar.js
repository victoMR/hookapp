import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src="https://i.pinimg.com/originals/0f/21/7d/0f217d0189f841ae794500966ab1845a.jpg"
            alt="Inicio"
            width="30"
            height="30"
            className="d-inline-block align-text-top"
            style={{ borderRadius: "12px" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto"> {/* Use "ml-auto" to push the items to the right */}
            <li className="nav-item">
              <a className="nav-link" href="/">
                Usuarios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/nuevo" >
                Nuevo Usuario
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/productos">
                Productos
              </a>
            </li>
            <li className="nav-item" >
              <a className="nav-link" href="/nuevoProd">
                Nuevo Producto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
