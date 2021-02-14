import React,{useEffect} from "react";
import Correo from '../assets/images/correo.svg';
import Twitter from '../assets/images/twitter.svg';
import Messenger from '../assets/images/messenger.svg';
import sr from '../assets/js/Scrollreveal.js';

function Contact() {
  const configReveal= {
    info:{
      duration: 3500,
      origin: 'top',
      distance: '50px'
    },
    btn1:{
      duration: 3500,
      origin: 'top',
      distance: '50px'
    },
    btn2:{
      duration: 3500,
      origin: 'top',
      distance: '50px'
    },
    btn3:{
      duration: 3500,
      origin: 'top',
      distance: '50px'
    }
  }
  useEffect(() => {
    sr.reveal('.info', configReveal.info);
    sr.reveal('.btn1', configReveal.btn1);
    sr.reveal('.btn2', configReveal.btn2);
    sr.reveal('.btn3', configReveal.btn3);
  },)
  return (
    <div className="container-fluid bg-dark my-5">
      <div className="container text-white">
        <div className="info text-center text-white">
          <h1 >Contacto</h1>
          <div className="d-flex justify-content-center">
            <hr className="mt-0 mb-3 w-25 bg-white"/>
          </div>
          <p className="text-justify text-center">
          Si te gusta mi trabajo y te gustaría contactarme puedes hacerlo mediante las siguientes plataformas.
        </p>
        </div>
        
        <div className="d-flex justify-content-center">
          <a href="mailto:eriksamuel76@gmail.com?Subject=Me%20interesa%20tu%20trabajo" rel="noreferrer" target="_blank" className="btn1 btn btn-outline-success w-md">
              <div className="row">
                <div className="col-3 d-flex justify-content-center">
                    <img src={Correo} className="mx-2" alt="Correo" width="40" height="40"/>
                </div>
                <div className="col-9 d-flex justify-content-center">
                  Correo electronico
                </div>
              </div>
            </a>
        </div>
        <div className="d-flex justify-content-center my-3">
            <a href="https://twitter.com/eriksamuel00" rel="noreferrer" target="_blank" className="btn2 btn btn-outline-info w-md">
              <div className="row">
                <div className="col-3 d-flex justify-content-center">
                    <img src={Twitter} className="mx-2" alt="Twitter" width="40" height="40"/>
                </div>
                <div className="col-9 d-flex justify-content-center">
                  Twitter
                </div>
              </div>
            </a>
        </div>
        <div className="d-flex justify-content-center">
            <a href="https://m.me/ErikSamuel00" rel="noreferrer" target="_blank" className="btn3 btn btn-outline-info w-md">
              <div className="row">
                <div className="col-3 d-flex justify-content-center">
                    <img src={Messenger} className="mx-2" alt="Messenger" width="40" height="40"/>
                </div>
                <div className="col-9 d-flex justify-content-center">
                  Messenger
                </div>
              </div>
            </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;