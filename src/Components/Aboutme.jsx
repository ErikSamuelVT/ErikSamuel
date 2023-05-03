import Logo from '../assets/images/aboutme.svg'

/* Hola, me llamo Erik Samuel Villarreal Tovar, soy ingeniero en sistemas computacionales con experencia en proyectos de companias y propios. Me gusta seguir aprendiendo tecnologías para seguir reforzando mis conocimientos y darle vida a las ideas con código. */


function Aboutme() {
  return (
    <div className="container-fluid d-flex align-items-center bg-app-2 vh-100" >
      <div className="container">
        <div className="row d-flex flex-column flex-sm-row">
          <div className="col col-sm-6">
            <div className="d-sm-none d-lg-block text-center m-0 p-0">
              <h1 className='badge rounded-pill fs-1 text-white text-center bg-app-1'>Sobre mi</h1>
              <p className='text-justify fc fs-3'>
              Hola, me llamo Erik Samuel Villarreal Tovar, soy ingeniero en sistemas computacionales con experencia en proyectos de companias y propios. Me gusta seguir aprendiendo tecnologías para seguir reforzando mis conocimientos y darle vida a las ideas con código.
              </p>
            </div>
            <div className="d-none d-sm-block d-md-block d-lg-none text-center m-0 p-0">
              <h1 className='badge rounded-pill fs-3 text-white text-center bg-app-1'>Sobre mi</h1>
              <p className='text-justify fc fs-6'>
              Hola, me llamo Erik Samuel Villarreal Tovar, soy ingeniero en sistemas computacionales con experencia en proyectos de companias y propios. Me gusta seguir aprendiendo tecnologías para seguir reforzando mis conocimientos y darle vida a las ideas con código.
              </p>
            </div>
          </div>
          <div className="col col-sm-6 d-flex align-items-center">
            <img src={Logo} className="img-fluid" alt="Sobre mi" title="Sobre mi" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;

/*  */