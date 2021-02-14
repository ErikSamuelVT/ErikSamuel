import React,{useEffect} from "react";
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
import sr from '../assets/js/Scrollreveal.js';

function Skills() {
  const configReveal= {
    ft:{
      duration: 3500,
      origin: 'top',
      distance: '50px'
    },
    bk:{
      duration: 3500,
      origin: 'top',
      distance: '50px'
    },
    vs:{
      duration: 3500,
      origin: 'top',
      distance: '50px'
    },
  }
  useEffect(() => {
    sr.reveal('.ft', configReveal.ft);
    sr.reveal('.bk', configReveal.bk);
    sr.reveal('.vs', configReveal.vs);
  },)
  return (
    <div className="container-fluid navbar-dark bg-dark my-lg-custom">
      <div className="container text-white">
        <div className="ft text-center text-white">
          <h1 className="m-0">Conocimiento</h1>
          <div className="d-flex justify-content-center">
            <hr className="mt-0 mb-5 w-25 bg-white"/>
          </div>
        </div>
        <div className="row ft">
          <div className="col-12 col-sm-12 col-md-2 col-lg-2 ">
            <div className="d-flex flex-column align-items-center p-2">
              <h3>Frontend</h3>
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-2 col-lg-2 ">
            <div className="d-flex flex-column align-items-center mb-2">
              <img
                className="img-fluid"
                src={html5}
                alt="Html5"
                width="32"
                height="32"
              />
              <span className="fw-bold">HTML5</span>
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-2 col-lg-2 ">
            <div className="d-flex flex-column align-items-center mb-2">
              <img
                className="img-fluid"
                src={css3}
                alt="Css3"
                width="32"
                height="32"
              />
              <span className="fw-bold">CSS3</span>
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-2 col-lg-2 ">
            <div className="d-flex flex-column align-items-center mb-2">
              <img
                className="img-fluid"
                src={bootstrap}
                alt="Bootstrap"
                width="32"
                height="32"
              />
              <span className="fw-bold">BOOTSTRAP</span>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-2 col-lg-2 ">
            <div className="d-flex flex-column align-items-center mb-2">
              <img
                className="img-fluid"
                src={javascript}
                alt="Javascript"
                width="32"
                height="32"
              />
              <span className="fw-bold">JAVASCRIPT</span>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-2 col-lg-2 ">
            <div className="d-flex flex-column align-items-center mb-2">
              <img
                className="img-fluid"
                src={reactjs}
                alt="ReactJS"
                width="32"
                height="32"
              />
              <span className="fw-bold">REACTJS</span>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <hr className="w-100 bg-white"/>
        </div>
        <div className="row bk">
          <div className="col-12 col-sm-12 col-md-2 col-lg-2 ">
            <div className="d-flex flex-column align-items-center p-2">
              <h3>Backend</h3>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-2 col-lg-2 ">
            <div className="d-flex flex-column align-items-center mb-2">
              <img
                className="img-fluid"
                src={nodejs}
                alt="Nodejs"
                width="32"
                height="32"
              />
              <span className="fw-bold">NODEJS</span>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-2 col-lg-2 ">
            <div className="d-flex flex-column align-items-center mb-2">
              <img
                className="img-fluid"
                src={mongodb}
                alt="Mongodb"
                width="32"
                height="32"
              />
              <span className="fw-bold">MONGODB</span>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-2 col-lg-2 ">
            <div className="d-flex flex-column align-items-center mb-2">
              <img
                className="img-fluid"
                src={express}
                alt="Express"
                width="32"
                height="32"
              />
              <span className="fw-bold">EXPRESS</span>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-2 col-lg-2 ">
            <div className="d-flex flex-column align-items-center mb-2">
              <img
                className="img-fluid"
                src={mysql}
                alt="Mysql"
                width="32"
                height="32"
              />
              <span className="fw-bold">MYSQL</span>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <hr className="w-100 bg-white" />
        </div>
        <div className="row vs">
          <div className="col-12 col-sm-12 col-md-2 col-lg-2 mb-2">
            <div className="d-flex flex-column align-items-center p-2">
              <h3 className="fs-4">Versionado</h3>
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-2 col-lg-2 mb-2">
            <div className="d-flex flex-column align-items-center">
              <img
                className="img-fluid"
                src={git}
                alt="Git"
                width="32"
                height="32"
              />
              <span className="fw-bold">GIT</span>
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-2 col-lg-2 ">
            <div className="d-flex flex-column align-items-center mb-2">
              <img
                className="img-fluid"
                src={github}
                alt="Github"
                width="32"
                height="32"
              />
              <span className="fw-bold">GITHUB</span>
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-2 col-lg-2 ">
            <div className="d-flex flex-column align-items-center mb-2">
              <img
                className="img-fluid"
                src={linux}
                alt="Linux"
                width="32"
                height="32"
              />
              <span className="fw-bold">LINUX</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
