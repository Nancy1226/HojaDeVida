import Perfil from "../atoms/Perfil";
import "../../assets/styles/Seccion.css";
import Tarjeta2 from "../moleculas/Tarjeta2";
import { information } from "../../data/information";
import Tecnologia from "../moleculas/Tecnologia";

function Seccion(){
    return(
        <div className="container-Seccion">
        <Perfil />
        <Tarjeta2 imagen={information.iconoPro} titulo={information.titulo4} list={information.proyectos} id="informacion" img1={information.iconCirculo} img2={information.iconCirculo} img3={information.iconCirculo} />
        <Tecnologia imagen={information.iconTra} titulo={information.titulo5}  list={information.tecnologias} list2={information.espacio} list3={information.tec} list4={information.espacio} />
        </div>
    )
}

export default Seccion;