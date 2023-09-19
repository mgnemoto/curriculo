import React from "react";
import "./educacion.css"
import EducacionTag from "../../components/educacionTag/EducacionTag"
import ingenieria from "../../assets/cebolla USB.jpg"
import react from "../../assets/Certificado React.png"
import javascript from "../../assets/Certificado Javascript.png"
import desarrollo from "../../assets/Certificado Desarrollo web.png"
import pc from "../../assets/Armado y reparacion de computadoras.PNG.jpg"


const Educacion = ()=>{
    return(
        <div className="educacion-background">
            <EducacionTag titulo="Ingenieria de Materiales" img={ingenieria} description="Cursé 2 años de la carrera de ingeniería de materiales en la universidad Simón Bolívar en Caracas, en ese tiempo pude aprobar 3 matemáticas, 2 físicas, 2 químicas, todas las materias del ciclo básico y varias extracurriculares. Lo abandoné por la situación del país." date="2013 / 2016"/>
            <EducacionTag titulo="Desarrollo web (HTML y CSS)" img={desarrollo} description="Hice el curso de desarrollo web de Coderhouse, donde aprendí a usar HTML, CSS (vanilla, SCSS y Bootstrap), GIT y GitHub. Obtuve un reconocimiento por quedar en el TOP 10 de mejores estudiantes." date="08-06-21 / 10-08-21"/>
            <EducacionTag titulo="Desarrollo en Javascript" img={javascript} description="Hice el curso de Javascript de Coderhouse, donde aprendí a usar javascript (vanilla y jQuery), además de reforzar el conocimiento del curso anterior. Obtuve un reconocimiento por quedar en el TOP 10 de mejores estudiantes." date="27-09-21 / 17-11-21"/>
            <EducacionTag titulo="Desarrollo en React" img={react} description="Hice el curso de React de Coderhouse, donde aprendí a usar react y algunas funciones de firebase, además de reforzar el conocimiento de los cursos anteriores. Obtuve un reconocimiento por quedar en el TOP 10 de mejores estudiantes." date="20-12-21 / 14-02-22"/>
            <EducacionTag titulo="Armado y reparación de computadoras" img={pc} description="Hice el curso de Armado y reparación de computadoras de Comunidad Reparando, donde aprendí sobre desarmar, armar, limpiar y actualizar computadoras de escritorio y laptops, tanto en la parte de hardware como la de software." date="15-03-23 / 15-04-23"/>
        </div>
    )
    
}

export default Educacion;