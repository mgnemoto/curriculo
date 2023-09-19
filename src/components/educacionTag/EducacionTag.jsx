import "./educacionTag.css"

const EducacionTag = ({titulo,img,date, description}) =>{
    return(
        <div className="texto-background">
            <div>
                <p className="p-1 educacion-texto">{titulo}</p>
                <p className="p-1">{description}</p>
                <p className="p-1">{date}</p>
            </div>
            <img className="w-100 educacion-img" src={img} alt="" />
        </div>
    )
}

export default EducacionTag;