import React from "react";
import '../App.css'
import ResumeTag from "../components/ResumeTag";

const Home = ()=>{
    return(
        <div className="background-gradient">
            <ResumeTag id="resumen" titulo="Resumen" descripcion="Soy desarrollador frontend con estudios hechos en diversos bootcamps. Estoy en búsqueda de mi primer empleo tecnológico. Tengo conocimientos en HTML, CSS, Bootstrap, Javascript, React, Git, GitHub, Firebase, entre otros; También en armado, reparación y optimización de computadoras; Y un nivel de inglés funcional."/>

            <ResumeTag id="educacion" titulo="Educación" descripcion="Estudié dos años ingeniería en la universidad. Tengo varios cursos de programación, algunos culminados y otros abandonados. Mis conocimientos más fuertes son HTML, CSS, Bootstrap, Javascript, React, Git y Github."/>

            <ResumeTag id="trabajo" titulo="Experiencia laboral" descripcion="He hecho varios sitios web a modo de práctica con HTML, CSS, SCSS, Bootstrap, Javascript, JQuery, React, Firebase, Git y Github. De manera formal, he trabajado como supervisor, cajero y repartidor."/>

            <ResumeTag id="idiomas" titulo="Idiomas y conocimientos generales" descripcion="Mi idioma nativo es castellano y tengo un nivel funcional de inglés. Tengo conocimientos en Office, Photoshop, Filmora, hardware, manejo de software en general, redacción, ortografía, primeros auxilios."/>

            <ResumeTag id="habilidades" titulo="Habilidades" descripcion="Pensamiento analítico - Proactividad - Facilidad de aprendizaje - Responsabilidad - Creatividad - Disciplina - Trabajo en equipo - Adaptabilidad"/>

            <ResumeTag id="contacto" titulo="Contacto" descripcion="Teleléfono: +54 9 11 6665 5714 - Correo: mgescobarnemoto@gmail.com"/>

            <ResumeTag id="referencias" titulo="Referencias" descripcion="Edith Zabala - Propietaria de Tatilandia - Tel: +54 9 11 6203 3787 / Carlos Veliz - Encargado de Neko Sushi - Tel: +54 9 11 3813 8002 / Valeria Caferri - Propietaria de Caferris - Tel: 11 5047 3452"/>
        </div>

        
       

        //         <li className="m-3 w-50">
        //             <p class="gap-1 m-0">
        //                 <a class="btn btn-dark fs-5 w-100 p-3" data-bs-toggle="collapse" href="#habilidades" role="button" aria-expanded="false" aria-controls="collapseExample">
        //                 Habilidades
        //                 </a>
        //             </p>
        //             <div class="collapse" id="habilidades">
        //                 <div class="card card-body container">
        //                     <ul className="habilidades row">
        //                         <li className="col">Pensamiento analítico</li>
        //                         <li className="col">Proactividad</li>
        //                         <li className="col">Facilidad de aprendizaje</li>
        //                         <li className="col">Responsabilidad</li>
        //                     </ul>
        //                     <ul className="habilidades row">
        //                         <li className="col">Creatividad</li>
        //                         <li className="col">Disciplina</li>
        //                         <li className="col">Trabajo en equipo</li>
        //                         <li className="col">Adaptabilidad</li>
        //                     </ul>
        //                 </div>
        //             </div>
        //         </li>

        //         <li className="m-3 w-50">
        //             <p class="gap-1 m-0">
        //                 <a class="btn btn-dark fs-5 w-100 p-3" data-bs-toggle="collapse" href="#contacto" role="button" aria-expanded="false" aria-controls="collapseExample">
        //                 Contacto
        //                 </a>
        //             </p>
        //             <div class="collapse" id="contacto">
        //                 <div class="card card-body">
        //                     <p>Teleléfono: +54 9 11 6665 5714</p>
        //                     <p>Correo: mgescobarnemoto@gmail.com</p>
        //                 </div>
        //             </div>
        //         </li>

        //         <li className="marginBot mt-3 w-50">
        //             <p class="gap-1 m-0">
        //                 <a class="btn btn-dark fs-5 w-100 p-3" data-bs-toggle="collapse" href="#refrencias" role="button" aria-expanded="false" aria-controls="collapseExample">
        //                 Referencias
        //                 </a>
        //             </p>
        //             <div class="collapse" id="refrencias">
        //                 <div class="card card-body">
        //                     <p>Edith Zabala - Propietaria de Tatilandia - Tel: +54 9 11 6203 3787</p>
        //                     <p>Carlos Veliz - Encargado de Neko Sushi - Tel: +54 9 11 3813 8002</p>
        //                     <p>Valeria Caferri - Propietaria de Caferris - Tel: 11 5047 3452</p>
        //                 </div>
        //             </div>
        //         </li>
        //     </ul>
        // </div>
    )
}

export default Home;