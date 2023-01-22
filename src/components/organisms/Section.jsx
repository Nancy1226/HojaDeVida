import '../../assets/styles/Section.css';
import {information} from '../../data/information.js';
import Tarjeta from '../moleculas/Tarjeta';
import img1 from "../../assets/imgs/Telefono.svg";
import img2 from "../../assets/imgs/Ubicacion.svg";
import img3 from "../../assets/imgs/Correo.svg";
import img4 from "../../assets/imgs/Linkedin.svg";
import img5 from "../../assets/imgs/Youtube.svg";
import img6 from "../../assets/imgs/Be.svg";
import img7 from "../../assets/imgs/Bola.svg";


function Section (){
    return(
        <>
        <div className='container-principal'>
         <Tarjeta titulo={information.titulo1} list={information.contacto} id="info" img1={img1} img2={img2} img3={img3} />
         <Tarjeta titulo={information.titulo2} list={information.portafolio} id="info" img1={img4} img2={img5} img3={img6}  />
         <Tarjeta titulo={information.titulo3} list={information.intereses} id="info" img1={img7} img2={img7} img3={img7}  />
         </div>
        </>
    )
}
export default Section;