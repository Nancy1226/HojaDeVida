
function Encabezado ({image, msn}){
    return ( 
        <>
        <div className="container-title"> 
               <div className="image"><img src={image} /></div>
            <div className='sub-container-title'><h1>{msn}</h1></div>
        </div>
        </>
     );
}
 
export default Encabezado;