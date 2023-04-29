import Logo from '../assets/images/skills.svg'
import html5 from "../assets/images/html5.svg";
import css3 from "../assets/images/css3.svg";
import bootstrap from "../assets/images/bootstrap.svg";
import javascript from "../assets/images/javascript.svg";
import reactjs from "../assets/images/reactjs.svg";
import nodejs from "../assets/images/nodejs.svg";
import mongodb from "../assets/images/mongodb.svg";
import express from "../assets/images/express.png";
import mysql from "../assets/images/mysql.svg";
import git from "../assets/images/git.svg";
import github from "../assets/images/github.png";
import linux from "../assets/images/linux.svg";

function Skills() {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center bg-app-1 vh-100">
      <div className="container p-0 my-5 d-flex">
        <div className="d-flex align-items-center justify-content-center w-50 ">
          <img src={Logo} className="img-fluid" width={400} alt="Tecnologías" title="Tecnologías" />
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center w-50">
          <h3 className="badge rounded-pill bg-title fs-1 fw-600 text-center my-3">Tecnologías</h3>
          <div className='row'>
            <div className="col d-flex flex-column mb-4">
              <img src={html5} className="img-fluid m-3 icon" width={80} alt="Html" title="Html" />
              <img src={css3} className="img-fluid m-3 icon" width={80} alt="Css" title="Css" />
              <img src={bootstrap} className="img-fluid m-3 icon" width={80} alt="Bootstrap" title="Bootstrap" />
              <img src={git} className="img-fluid m-3 icon" width={80} alt="Git" title="Git" />
            </div>
            <div className="col d-flex flex-column">
              <img src={javascript} className="img-fluid m-3 icon" width={80} alt="Javascript" title="Javascript" />
              <img src={reactjs} className="img-fluid m-3 icon" width={80} alt="React Js" title="React Js" />
              <img src={nodejs} className="img-fluid m-3 icon" width={80} alt="Node Js" title="Node Js" />
              <img src={github} className="img-fluid m-3 icon" width={80} alt="Github" title="Github" />
            </div>
            <div className="col d-flex flex-column">
              <img src={express} className="img-fluid  m-3 icon" width={80} alt="Express" title="Express" />
              <img src={mongodb} className="img-fluid m-3 icon" width={80} alt="Mongo Db" title="Mongo Db" />
              <img src={mysql} className="img-fluid m-3 icon" width={80} alt="Mysql" title="Mysql" />
              <img src={linux} className="img-fluid m-3 icon" width={80} alt="Linux" title="Linux" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
