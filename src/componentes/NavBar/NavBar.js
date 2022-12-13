import './NavBar.css';
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
        <div className='container_nav'>
            <div className='container_nav__body'>
                    <input type="checkbox" id="check" />
                    <label for="check" class="checkbtn">
                        <i class="fa-solid fa-bars"></i>
                    </label>
                <ul className='container_nav__body__links'>
                    <li><Link className='links' to="/">Home</Link></li>
                    <li><Link className='links' to="/categoria/hombre">Men</Link></li>
                    <li><Link className='links' to="/categoria/mujer">Woman</Link></li>
                </ul>
                    <ul className='container_links--responsive'>
                        <li><Link className='links' to="/">Home</Link></li>
                        <li><Link className='links' to="/categoria/hombre">Men</Link></li>
                        <li><Link className='links' to="/categoria/mujer">Woman</Link></li>
                    </ul>
                <div className='container_nav__body__cart'>
                    <Link className='links' to="/Carrito"><FontAwesomeIcon className='icon' icon={faCartShopping} /></Link>
                    {Contador()}
                </div>
            </div>
        </div>
    )
};

export default Navbar;