import React, { useEffect } from "react";
import sr from "../assets/js/Scrollreveal.js";
function Aboutme() {
  const configReveal = {
    duration: 3500,
    origin: "bottom",
    distance: "100px",
  };
  useEffect(() => {
    sr.reveal(".text", configReveal);
  });
  return (
    <div className="text container-fluid bg-dark my-sm-custom">
      <div className="container text-white">
        <div className="text-center text-white">
          <h1>Sobre mi</h1>
          <div className="d-flex justify-content-center">
            <hr className="mt-0 mb-5 w-25 bg-white" />
          </div>
        </div>
        <p className="text-justify">
          Me presento, me llamo Erik Samuel Villarreal Tovar, soy ingeniero en
          sistemas computacionales, apasionado de la informática en general pero
          más enfocado en el mundo del desarrollo web, para seguir aprendiendo
          tengo proyectos personales para mantenerme al día y seguir obteniendo
          el conocimiento de nuevas tecnologías tanto del front-end como del
          back-end principalmente, sin embargo también me gusta aprender nuevos
          lenguajes de programación, frameworks, librerías, etc.
        </p>
      </div>
    </div>
  );
}

export default Aboutme;
