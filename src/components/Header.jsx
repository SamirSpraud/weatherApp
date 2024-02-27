/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import "../css/Header.css";
const Header = ({ setCiudad, hora }) => {
  const [ciudad, setCuidad] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (ciudad !== "") {
      console.log({ ciudad });
    }
    if (ciudad === "" || !ciudad) return;

    setCiudad(ciudad);
  };

  return (
    <>
      <header className="Header">
        <h1>Clima y noticias</h1>
        <form onSubmit={onSubmit}>
          <div className="buscador">
            <input
              type="text"
              placeholder=" Ubicacion:"
              className="form-control busqueda"
              onChange={(e) => setCuidad(e.target.value)}
            />
            <button type="submit" className="ms-1 btn btn-primary btn-buscar">
              Buscar
            </button>
          </div>
        </form>

        <div className="hora">
          <h4>{hora}</h4>
        </div>
      </header>
    </>
  );
};

export default Header;
