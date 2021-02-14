import React,{useEffect} from "react";
import sr from '../assets/js/Scrollreveal.js';
import Correo from '../assets/images/correo.svg';
import Twitter from '../assets/images/twitter.svg';
import Messenger from '../assets/images/messenger.svg';
function Navbar() {
  const title = '<Erik/>';
  const configReveal= {
    duration: 3500,
    origin: 'top',
    distance: '100px'
  }
  useEffect(() => {sr.reveal('.navbar', configReveal);},)
  return (
    <div className="container-fluid navbar-dark bg-dark">
      <nav className="navbar navbar-expand-md container">
        <a className="navbar-brand" href="/">
          <strong> {title} </strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="d-flex justify-content-end w-100">
            <ul className="navbar-nav mr-custom">
              <li className="nav-item" >
                <a className="nav-link" href="https://twitter.com/eriksamuel00" rel="noreferrer" target="_blank">
                  <img src={Twitter} alt="Twitter" width="32" height="32" title="Twitter"/>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://m.me/ErikSamuel00" rel="noreferrer" target="_blank">
                  <img src={Messenger} alt="Twitter" width="32" height="32" title="Messenger"/>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="mailto:eriksamuel76@gmail.com?Subject=Me%20interesa%20tus%20trabajo" rel="noreferrer" target="_blank">
                  <img src={Correo} alt="Twitter" width="32" height="32" title="Correo"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
