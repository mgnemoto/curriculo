import React from "react"
import './resumenTag.css'


const ResumeTag=({id,titulo,descripcion})=>{
    return(
        <div className="d-flex flex-column align-items-center">
            <p className="gap-1 m-2 responsive-width">
                <a className={`font-size-tag btn btn-dark w-100 p-3`} data-bs-toggle="collapse" href={`#${id}`} role="button" aria-expanded="false" aria-controls="collapseExample">
                    {titulo}
                </a>
            </p>
            <div className="collapse responsive-width" id={id}>
                <div className="card card-body font-size-tag">
                    {descripcion}
                </div>
            </div>
        </div> 
    )
}

export default ResumeTag;