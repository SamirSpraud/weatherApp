/* eslint-disable no-unused-vars */
import "./App.css";
import ClimaComponent from "./components/ClimaComponent";
import BtnChangeCat from "./components/BtnChange";
export default function App() {



  return (
    <>
      <main>
        <div className="principal">
          <ClimaComponent></ClimaComponent>
          <div className="categorias">
            <BtnChangeCat bg={"tecno"} categoria={"Tecnologia"}></BtnChangeCat>
            <BtnChangeCat bg={"deportes"} categoria={"Deportes"}></BtnChangeCat>
            <BtnChangeCat bg={"farandula"} categoria={"Pop"}></BtnChangeCat>
            <BtnChangeCat bg={"gaming"} categoria={"Gaming"}></BtnChangeCat>
          </div>
        </div>
      </main>
    </>
  );
}
