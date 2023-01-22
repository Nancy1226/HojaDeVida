import Encabezado from "../atoms/Encabezado";

function Tarjeta2 ({imagen, titulo}){
    return (  
        <>
            <Encabezado image={imagen} msn={titulo} />
        </>
    );
}
 
export default Tarjeta2;
