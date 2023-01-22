import Perfil from "../atoms/Perfil";
import "../../assets/styles/Seccion.css";
import Tarjeta2 from "../moleculas/Tarjeta2";
import { information } from "../../data/information";

function Seccion(){
    return(
        <div className="container-Seccion">
        <Perfil />
        <Tarjeta2 imagen={information.iconoPro} titulo={information.titulo4}/>
        </div>
    )
}

export default Seccion;