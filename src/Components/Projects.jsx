import React,{useEffect} from "react";
import Github from "../assets/images/github.png";
import TabMusic from "../assets/images/TabMusic.svg";
import TextEditor from "../assets/images/TextEditor.svg";
import Login from "../assets/images/Login.svg";
import SearchImage from "../assets/images/SearchImage.svg";
import sr from '../assets/js/Scrollreveal.js';

function Projects() {
  const configReveal= {
    title:{
      duration: 3500,
      origin: 'top',
      distance: '100px'
    },
    card1:{
      duration: 3500,
      origin: 'top',
      distance: '100px'
    },
    card2:{
      duration: 3500,
      origin: 'bottom',
      distance: '100px'
    },
    card3:{
      duration: 3500,
      origin: 'top',
      distance: '100px'
    },
    card4:{
      duration: 3500,
      origin: 'bottom',
      distance: '100px'
    },
    info:{
      duration: 3500,
      origin: 'bottom',
      distance: '100px'
    }
  }
  useEffect(() => {
    sr.reveal('.title', configReveal.title);
    sr.reveal('.card1', configReveal.card1);
    sr.reveal('.card2', configReveal.card2);
    sr.reveal('.card3', configReveal.card3);
    sr.reveal('.card4', configReveal.card4);
    sr.reveal('.info', configReveal.info);
  },)
  return (
    <div className="container-fluid bg-dark my-3">
      <div className="container text-white">
        <div className="title text-center text-white">
          <h1 >Proyectos</h1>
          <div className="d-flex justify-content-center">
            <hr className="mt-0 w-25 bg-white"/>
          </div>
        </div>
        <div className="row my-5">
          <div className="card1 col col-md-6 col-lg-3 mb-3 d-flex justify-content-center">
            <div className="card text-white bg-custom border border-secondary" style={{ width: "14rem" }}>
              <img src={TabMusic} className="card-img-top p-1 img-fluid" alt="TabMusic" />
              <div className="card-body">
                <h5 className="card-title text-center">TabMusic</h5>
                <p className="card-text text-justify">
                Este proyecto permite mediante clics reproducir sonidos y hacer una animación.
                </p>
                <div className="d-flex justify-content-center">
                  <a href="https://github.com/ErikVillarreal-bit/TabMusic" rel="noreferrer" target="_blank" className="btn btn-outline-warning w-50 pt-0">
                    <img src={Github} alt="Github" width="32" height="32"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card2 col col-md-6 col-lg-3 mb-3 d-flex justify-content-center">
            <div className="card text-white bg-custom border border-secondary" style={{ width: "14rem" }}>
              <img src={Login} className="card-img-top p-1" alt="TabMusic" />
              <div className="card-body">
                <h5 className="card-title text-center">Login</h5>
                <p className="card-text text-justify">
                  Este proyecto permite realizar un login básico haciendo uso del localstorage.
                </p>
                <div className="d-flex justify-content-center">
                  <a href="https://github.com/ErikVillarreal-bit/React-Redux-LocalStorage" rel="noreferrer" target="_blank" className="btn btn-outline-warning w-50 pt-0">
                    <img src={Github} alt="Github" width="32" height="32"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card3 col col-md-6 col-lg-3 mb-3 d-flex justify-content-center">
          <div className="card text-white bg-custom border border-secondary" style={{ width: "14rem" }}>
              <img src={TextEditor} className="card-img-top p-1 img-fluid rounded-2" alt="TabMusic" />
              <div className="card-body">
                <h5 className="card-title text-center">TextEditor</h5>
                <p className="card-text text-justify">
                  Este proyecto permite emula un editor de texto en consola con funciones básicas.
                </p>
                <div className="d-flex justify-content-center">
                  <a href="https://github.com/ErikVillarreal-bit/text-editor-nodeJs" rel="noreferrer" target="_blank" className="btn btn-outline-warning w-50 pt-0">
                    <img src={Github} alt="Github" width="32" height="32"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card4 col col-md-6 col-lg-3 mb-3 d-flex justify-content-center">
          <div className="card text-white bg-custom border border-secondary" style={{ width: "14rem",}}>
              <img src={SearchImage} className="card-img-top p-1" alt="TabMusic" />
              <div className="card-body">
                <h5 className="card-title text-center">SearchImages</h5>
                <p className="card-text text-justify">
                Este proyecto permite hacer una búsqueda de imágenes consumiendo una api con reactjs.
                </p>
                <div className="d-flex justify-content-center">
                  <a href="https://github.com/ErikVillarreal-bit/React-Search-Images" rel="noreferrer" target="_blank" className="btn btn-outline-warning w-50 pt-0">
                    <img src={Github} alt="Github" width="32" height="32"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="info">
          <p className="text-justify">
            En mí Github tengo más trabajos que he realizado de forma autodidacta
            para seguir aprendiendo sobre las tecnologías más recientes, además de
            mí Curriculum en PDF.
          </p>
          <div>
            <div className="row">
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 my-2 ">
                <div className="d-flex justify-content-center justify-content-lg-center">
                  <a className="btn btn-outline-warning" href="https://github.com/ErikVillarreal-bit" rel="noreferrer" target="_blank">
                    Github
                  </a>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 my-2">
                <div className="d-flex justify-content-center justify-content-lg-center">
                  <a className="btn btn-outline-danger" href="https://drive.google.com/file/d/1XlES1jl9HcjAoC4iI6YbfCAG_cllOgyv/view?usp=sharing" rel="noreferrer" target="_blank">
                    Curriculum
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
