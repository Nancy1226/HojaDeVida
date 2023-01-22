import Encabezado from "../atoms/Encabezado";

function Tarjeta2 ({imagen, titulo, list,img1, img2, img3}){
    return (  
        <>
            <Encabezado image={imagen} msn={titulo} />
            <div className="informacion">
                <div className="contenido-image"><img src={img1} /> <img src={img2} /><img src={img3} /></div>
                <div>{list.map(item => <div className="contenido-textos" key={titulo}>{item}</div>)}</div>
            </div> 
        </>
    );
}
 
export default Tarjeta2;
