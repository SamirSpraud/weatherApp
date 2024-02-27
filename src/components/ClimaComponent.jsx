/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Header from "./Header";
import Spinner from "./Spinner";

import "../css/ClimaComponent.css";
const Clima = () => {
  let urlClima =
    "https://api.openweathermap.org/data/2.5/weather?&appid=1c299f70fa42953b8c69ad407344d4aa&lang=es";
  let urlCiudad = "&q=";
  const [clima, setClima] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ubicacion, setUbicacion] = useState("Santo Domingo");
  const [horas, setHoras] = useState("");
  const [city, setCity] = useState([]);



  useEffect(() => {
    const obtenerClimaInicial = async () => {
      setLoading(true);

      const urlClima =
        "https://api.openweathermap.org/data/2.5/weather?&appid=1c299f70fa42953b8c69ad407344d4aa&lang=es&q=" +
        ubicacion;

      try {
        const response = await fetch(urlClima);
        if (!response.ok) throw { response };
        const climaData = await response.json();
        setClima(climaData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    obtenerClimaInicial();
  }, [ubicacion]);

  const getUbicacion = async (ubi) => {
    setLoading(true);
    setUbicacion(ubi);

    urlClima = urlClima + urlCiudad + ubi;

    await fetch(urlClima)
      .then((response) => {
        if (!response.ok) throw { response };
        return response.json();
      })
      .then((climaData) => {
        setClima(climaData);
        console.log(climaData);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  let n = 3;
  if (loading) {
    return (
      <>
        <div className="spin">
          <Spinner />
        </div>
      </>
    );
  }
  let fecha = new Date();
  let hora = fecha.getHours();
  let minutos = fecha.getMinutes();

  const agregarCero = (valor) => (valor < 10 ? "0" + valor : valor);

  let horaC = agregarCero(hora) + ":" + agregarCero(minutos);

  console.log(horaC);

  function mayusPrimeraLetra(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  if (clima) {
    return (
      <>
        <Header
          className={"Header"}
          setCiudad={getUbicacion}
          hora={horaC}
        ></Header>

        <div className="Clima">
          <div className="sec">
            <h2>{clima.name}</h2>
          </div>
          <div className="sec3">
            <div className="sec2">
              <img src="src\img\soleado.png" alt="" className="imgClima" />
              <h2>
                {clima?.main?.temp
                  ? (clima.main.temp - 273.15).toFixed(1) + "°C"
                  : ""}
              </h2>
            </div>
            <p className="descrip">
              {mayusPrimeraLetra(clima?.weather?.[0]?.description || "")}
            </p>
          </div>
          <div className="sec6">
            <div className="sec4">
              <img src="src\img\gotas.png" alt="" className="imgHumedad" />
              <p>{clima?.main?.humidity}%</p>
            </div>
            <div className="sec5">
              <img src="src\img\viento.png" alt="" className="imgViento" />
              <p>{clima?.wind?.speed} m/s</p>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Clima;
