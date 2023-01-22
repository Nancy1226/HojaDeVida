import Perfil from "../atoms/Perfil";
import "../../assets/styles/Seccion.css";
import Tarjeta2 from "../moleculas/Tarjeta2";
import { information } from "../../data/information";
import Tecnologia from "../moleculas/Tecnologia";
import img1 from "../../assets/imgs/Trabajo.svg";
import img2 from "../../assets/imgs/Proyecto.svg";
import Circulo from "../../assets/imgs/Bola.svg";
function Seccion(){
    return(
        <div className="container-Seccion">
        <Perfil />
        <Tarjeta2 imagen={img2} titulo={information.titulo4} list={information.proyectos} id="informacion" img1={Circulo} img2={Circulo} img3={Circulo} />
        <Tecnologia imagen={img1} titulo={information.titulo5}  list={information.tecnologias} list2={information.espacio} list3={information.tec} list4={information.espacio} />
        </div>
    )
}

export default Seccion;