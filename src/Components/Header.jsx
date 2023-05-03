import Logo from "../assets/images/imageHeader.svg"

function Header() {
  return (
    <header className="container-fluid d-flex align-items-center bg-app-1 vh-100">
      <div className="container">
        <div className="row d-flex flex-column flex-sm-row flex-md-row justify-content-center">
          <div className="col col-sm-6 col-md-6 d-flex align-items-sm-center align-items-md-center py-4">
            <img src={Logo} className="img-fluid" alt="Hola!!" title="Hola!!" />
          </div>
          <div className="col col-sm-6 col-md-6 d-flex align-items-sm-center align-items-md-center">
            <div className="text-center w-100">
              <h1 className="fw-900 fs-1 text-white" >Hola, soy <span className="badge rounded-pill bg-title fw-900 fs-1 icon">Erik</span></h1>
              <h3 className="fw-600 fs-1 text-white">Front End Developer</h3>
              <span className="d-block text-center fs-custom-1 mt-3 w-100 emoji">👇</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
