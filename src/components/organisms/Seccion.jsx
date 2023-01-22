import Perfil from "../atoms/Perfil";
import "../../assets/styles/Seccion.css";
import Tarjeta2 from "../moleculas/Tarjeta2";
import { information } from "../../data/information";

function Seccion(){
    return(
        <div className="container-Seccion">
        <Perfil />
        <Tarjeta2 imagen={information.iconoPro} titulo={information.titulo4} list={information.proyectos} id="informacion" img1={information.iconCirculo} img2={information.iconCirculo} img3={information.iconCirculo} />
        <Tarjeta2 imagen={information.iconTra} titulo={information.titulo5}  id="informacion" list={information.proyectos}  img3={information.iconRe} />
        </div>
    )
}

export default Seccion;