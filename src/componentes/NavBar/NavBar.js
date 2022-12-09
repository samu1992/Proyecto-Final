import './NavBar.css';
//import CartWidget from '../CartWidget/CartWidget';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../../Context/CartProvider';


function Navbar(){
    const { cart } = useContext(CartContext);
    const Contador = ()=> {
        if (cart.length >= 1) {
            return <p>{cart.length}</p>
        } else {
            return 
        }
    }
    return (
        <div className='contenedorNav'>
            <div className='barraNav'>
                <ul className='content-enlaces'>
                    <li><Link className='enlace' to="/">Home</Link></li>
                    {/* <li><Link className='enlace' to="/MenuApi">Productos</Link></li> */}
                    <li><Link className='enlace' to="/categoria/hombre">Men</Link></li>
                    <li><Link className='enlace' to="/categoria/mujer">Woman</Link></li>
                </ul>
                <div className='cart'>
                    <Link className='enlace' to="/Carrito"><FontAwesomeIcon className='icon' icon={faCartShopping} /></Link>
                    {Contador()}
                </div>
            </div>
        </div>
    )
};

export default Navbar;