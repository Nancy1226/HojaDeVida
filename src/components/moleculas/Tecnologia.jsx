import Encabezado from "../atoms/Encabezado";

function Tecnologia ({imagen, titulo, list,img1, img2, img3}){
    return (  
        <>
            <Encabezado image={imagen} msn={titulo} />
            <div className="flex-container">
            <div>{list.map(item => <div className="flex-text" key={titulo}>{item}</div>)}</div>
            <div>{list.map(item => <div className="flex-box" key={titulo}>{item}</div>)}</div>
            <div>{list.map(item => <div className="flex-text" key={titulo}>{item}</div>)}</div>
            <div>{list.map(item => <div className="flex-box" key={titulo}>{item}</div>)}</div>
            </div>
        </>
    );
}
 
export default Tecnologia;