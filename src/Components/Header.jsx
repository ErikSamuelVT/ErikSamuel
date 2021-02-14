import React,{useEffect} from "react";
import sr from '../assets/js/Scrollreveal.js';
import Logo from "../assets/images/Logo.png";
function Header() {
  const configReveal= {
    img:{
      duration: 3500,
      origin: 'left',
      distance: '100px'
    },
    text:{
      duration: 3500,
      origin: 'right',
      distance: '100px'
    }
  }
  useEffect(() => {
    sr.reveal('.img', configReveal.img);
    sr.reveal('.text', configReveal.text);
  },)
  return (
    <div className="container-fluid navbar-dark bg-dark">
      <div className="container">
        <div className="row ">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex d-flex align-items-center justify-content-center align-items-lg-center justify-content-lg-end">
            <img
              className="img rounded-circle my-4 mr-custom img-fluid"
              src={Logo}
              alt="imagen"
              title="Logo"
              width="400"
              height="400"
            />
          </div>
          <div className="text-white col-12 col-sm-12 col-md-6 col-lg-6 d-flex align-items-center justify-content-center lign-items-lg-center justify-content-lg-start">
            <div className="text">
              <h1>Hola!</h1>
              <h2>Soy Erik Villarreal</h2>
              <p>Desarrollador Frontend</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
