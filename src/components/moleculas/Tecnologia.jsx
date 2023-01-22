import Encabezado from "../atoms/Encabezado";

function Tecnologia ({imagen, titulo, list,list2, list3,list4}){
    return (  
        <>
            <Encabezado image={imagen} msn={titulo} />
            <div className="flex-container">
                <div>{list.map(item => <div className="flex-text" key={titulo}>{item}</div>)}</div>
                <div>{list2.map(item => <div className="flex-box" key={titulo}>{item}</div>)}</div>
                <div>{list3.map(item => <div className="flex-text" key={titulo}>{item}</div>)}</div>
                <div>{list4.map(item => <div className="flex-box" key={titulo}>{item}</div>)}</div>
            </div>
            
        </>
    );
}
 
export default Tecnologia;