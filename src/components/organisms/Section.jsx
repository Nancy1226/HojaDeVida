import '../../assets/styles/Section.css';
import {information} from '../../data/information.js';
import Tarjeta from '../moleculas/Tarjeta';



function Section (){
    return(
        <>
        <div className='container-principal'>
         <Tarjeta titulo={information.titulo1} list={information.contacto} id="info" img1={information.iconoTel} img2={information.iconoDir} img3={information.iconoCor} />
         <Tarjeta titulo={information.titulo2} list={information.portafolio} id="info" img1={information.iconLin} img2={information.iconYou} img3={information.iconBe}  />
         <Tarjeta titulo={information.titulo3} list={information.intereses} id="info" img1={information.iconCirculo} img2={information.iconCirculo} img3={information.iconCirculo}  />
         </div>
        </>
    )
}
export default Section;