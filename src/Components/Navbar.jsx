import Email from '../assets/images/email.png';
import Linkedin from '../assets/images/linkedin.png';
import Github from '../assets/images/github.png';

function Navbar() {
  return (
    <nav className='navbar container-fluid bg-app-1'>
      <div className='container flex justify-content-between align-items-center sr'>
        <a href="/" className='navbar-brand text-white fw-bold fs-1 sr'>&lt;erik/&gt;</a>
        <ul className='navbar-nav flex-row justify-content-around w-10 mx-5'>
          <li className='navbar-item w-0 '>
            <a href="mailto:eriksamuel76@gmail.com" className='navbar-link' rel="noreferrer" target="_blank">
              <img src={Email} alt="Email" width="30" height="30" title="Email" />
            </a>
          </li>
          <li className='navbar-item w-0 mx-3'>
            <a href="https://www.linkedin.com/in/erik-sv" className='navbar-link' rel="noreferrer" target="_blank">
              <img src={Linkedin} alt="Linkedin" width="30" height="30" title="Linkedin" />
            </a>
          </li>
          <li className='navar-item'>
            <a href="https://www.github.com/ErikVillarreal-bit" className='navbar-link' rel="noreferrer" target="_blank">
              <img src={Github} alt="Github" width="30" height="30" title="Github" />
            </a>
          </li>
        </ul>
      </div>
    </nav>


  )
}
export default Navbar