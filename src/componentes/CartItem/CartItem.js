import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from '../../Context/CartProvider';
import { useContext } from 'react';
import './CartItem.css';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const CartItem = () => {
    const { cart, removeItem } = useContext(CartContext);
    console.log(cart)
    return cart.map(element => {
        console.log(element);
        return (
            <div key={element.id} className='container-produc'>
                <div><span>{element.cantidad}</span></div>
                <li>{element.nombre}</li>
                <div className='precio'><span>${element.precio * element.cantidad}</span></div>
                <FontAwesomeIcon onClick={() => removeItem(element.id)} className='icon1' icon={faTrash}/>
            </div>
        )
    });

};


export default CartItem