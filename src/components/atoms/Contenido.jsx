
function Contenido ({img, info}){
    return(
        <>
        <div className='info'>
                    <div className='contenido-img'><img src={img} /></div>
                    <div className='contenido-texto'>{info}</div>
        </div>
        </>

    )
}
export default Contenido;