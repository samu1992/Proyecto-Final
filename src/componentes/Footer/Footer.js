import './Footer.css'
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
//import {faBong} from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <div className="container_footer__legal">
      <ul>
        <li>Nuestros Datos</li>
        <li>Terminos y Condiciones</li>
        <li>Politica de Cookies</li>
        <li>Politica de Privacidad</li>
        <li>Seleccionar Pais</li>
        <li id='container_footer__legal__6'>Reclamos</li>
      </ul>
      <div className='container_footer__legal__networks'>
      <a href="."><i className=" fab fa-instagram"></i></a>
      <a href="."><i className=" fab fa-facebook"></i></a>
      <a href="."><i className=" fab fa-twitter"></i></a>
      </div>
    </div>
  )
}

export default Footer