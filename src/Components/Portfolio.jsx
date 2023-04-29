import Card from './Cards/Card'

import ticTacToe from '../assets/images/tic-tac-toe.png'
import pokercard from "../assets/images/pokecard.png";
import todo from "../assets/images/app-tareas-react.png";
import darkMode from "../assets/images/dark-mode.jpeg";
import tabMusic from "../assets/images/TabMusic.png";

const imgs = [ticTacToe, pokercard, todo, darkMode, tabMusic]

function Portfolio() {
  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center bg-app-2">
      <div className="container p-5 d-flex flex-column align-items-center justify-content-center">
        <h3 className="badge rounded-pill bg-app-1 fs-1 fw-600 text-center my-5">Portafolio</h3>
        <div className="row">
          {imgs.map((img, i) => (
            <div className='col-4'>
              <Card img={img} alt={img.split('/')[3].split('.')[0]} link={img.split('/')[3].split('.')[0]} title={img.split('/')[3].split('.')[0]} key={i} tags={['HTML', 'CSS', 'JAVASCRIPT', 'REACT JS']} />
            </div>
          ))}
        </div>
      </div>
      <footer className='d-flex justify-content-center align-items-center'>
        <p className='badge rounded-pill bg-app-1 fs-6 fw-300'>Hecho con ❤️ by Erik</p>
      </footer>
    </div>
  );
}

export default Portfolio;
