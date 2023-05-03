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
    <div className="container-fluid d-flex align-items-center bg-app-1 vh-100">
      <div className="container">
        <div className="row p-1">
          <div className="col-sm-6 d-none d-sm-block d-flex align-items-center px-md-5 py-md-0 mt-2">
            <img src={Logo} className="img-fluid" alt="Sobre mi" title="Sobre mi" />
          </div>
          <div className="col col-sm-6 text-center px-md-5 py-md-0 mt-2">
            <h1 className='d-none d-sm-block d-md-none badge rounded-pill fs-4 text-white bg-title'>Tecnologías</h1>
            <h1 className='d-sm-none d-md-block badge rounded-pill fs-1 text-white bg-title mb-5'>Tecnologías</h1>
            <div className="row ">
              <div className='col-4'>
                <img src={html5} className="img-fluid m-1 icon w-75" alt="Html" title="Html" />
                <span className='d-sm-none fw-custom fs-6'>HTML</span>
                <img src={css3} className="img-fluid m-1 icon w-75" alt="Css" title="Css" />
                <span className='d-sm-none fw-custom fs-6'>CSS3</span>
                <img src={bootstrap} className="img-fluid m-1 icon w-75" alt="Bootstrap" title="Bootstrap" />
                <span className='d-sm-none fw-custom fs-6'>Bootstrap</span>
                <img src={git} className="img-fluid m-1 icon w-75" alt="Git" title="Git" />
                <span className='d-sm-none fw-custom fs-6'>Git</span>
              </div>
              <div className="col-4">
                <img src={javascript} className="img-fluid m-1 icon w-75" alt="Javascript" title="Javascript" />
                <span className='d-sm-none fw-custom fs-6'>Javascript</span>
                <img src={reactjs} className="img-fluid m-1 icon w-75" alt="React Js" title="React Js" />
                <span className='d-sm-none fw-custom fs-6'>ReactJs</span>
                <img src={nodejs} className="img-fluid m-1 icon w-75" alt="Node Js" title="Node Js" />
                <span className='d-sm-none fw-custom fs-6'>NodeJs</span>
                <img src={github} className="img-fluid m-1 icon w-75" alt="Github" title="Github" />
                <span className='d-sm-none fw-custom fs-6'>Github</span>
              </div>
              <div className="col-4">
                <img src={express} className="img-fluid  m-1 icon w-75" alt="Express" title="Express" />
                <span className='d-sm-none fw-custom fs-6'>Express</span>
                <img src={mongodb} className="img-fluid m-1 icon w-75" alt="Mongo Db" title="Mongo Db" />
                <span className='d-sm-none fw-custom fs-6'>MongoDb</span>
                <img src={mysql} className="img-fluid m-1 icon w-75" alt="Mysql" title="Mysql" />
                <span className='d-sm-none fw-custom fs-6'>Mysql</span>
                <img src={linux} className="img-fluid m-1 icon w-75" alt="Linux" title="Linux" />
                <span className='d-sm-none fw-custom fs-6'>Linux</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
