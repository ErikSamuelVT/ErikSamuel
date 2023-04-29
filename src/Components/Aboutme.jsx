import Logo from '../assets/images/aboutme.svg'

function Aboutme() {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center bg-app-2 vh-100">
      <div className="container p-0 d-flex">
        <div className="d-flex flex-column align-items-center justify-content-center w-50 ">
          <h3 className="badge rounded-pill bg-app-1 fs-1 fw-600 text-center my-5 shadow">Sobre mi</h3>
          <p className="fc fs-3 fw-400 text-justify">
            Hola, me llamo Erik Samuel Villarreal Tovar, soy ingeniero en sistemas computacionales con experencia en proyectos de companias y propios. Me gusta seguir aprendiendo tecnologías para seguir reforzando mis conocimientos y darle vida a las ideas con código.
          </p>
        </div>
        <div className="d-flex align-items-center justify-content-center w-50">
          <img src={Logo} className="img-fluid" alt="Sobre mi" title="Sobre mi" />
        </div>
      </div>
    </div>
  );
}

export default Aboutme;

/*  */