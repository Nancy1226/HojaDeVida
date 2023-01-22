import { information } from "../../data/information";
import Titulo from "../atoms/Titulo";

function Tarjeta({titulo, list, img1, img2, img3}) {
    return (  
    <>
    <Titulo msn={titulo} />
    <div className='info'>
        <div className='contenido-img'><img src={img1} /><img src={img2} /> <img src={img3} />
    </div>
        <div>{list.map(itemSkill => <div className="contenido-texto" key={titulo}>{itemSkill}</div>)}</div>
    </div>
    
  </>
    );
}

export default Tarjeta;