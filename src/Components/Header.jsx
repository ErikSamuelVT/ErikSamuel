import Logo from "../assets/images/imageHeader.svg"

function Header() {
  return (
    <header className="container-fluid d-flex align-items-center justify-content-center bg-app-1 vh-100">
      <div className="container p-0 d-flex">
        <div className="d-flex align-items-center justify-content-center w-50">
          <img src={Logo} className="img-fluid" alt="Hola!!" title="Hola!!" />
        </div>
        <div className="d-flex align-items-center justify-content-center w-50">
          <div>
            <h1 className="fw-900 fs-1 text-white" >Hola, soy <span className="badge rounded-pill bg-title fw-900 fs-1 icon">Erik</span></h1>
            <h3 className="fw-600 fs-1 text-white">Front End Developer</h3>
            <span className="d-block text-center mt-5 w-100 emoji">👇</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
