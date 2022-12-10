import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from '../../Context/CartProvider';
import { useContext } from 'react';
import './CartItem.css';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const CartItem = () => {
    const { cart, removeItem } = useContext(CartContext);
    console.log(cart)
    return cart.map(element => {
        console.log(element);
        return (
            <div key={element.id} className='container_product'>
                <div className='container_product__image'><img alt='img' src={`/images/${element.imagen}`} /></div>
                <div className='container_product__body'>
                    <div className='container_product__body__data'>
                        <p>{element.nombre}</p>
                        <h6>Cantidad: {element.cantidad}</h6>
                        <span>C/U $ {element.precio}</span>
                    </div>
                    <div className='container_product__body__price'>
                        <span>$ {element.precio * element.cantidad}</span>
                    </div>
                    <div className='container_product__body__icon'>
                        <FontAwesomeIcon onClick={() => removeItem(element.id)} className='icon' icon={faXmark} />
                    </div>
                </div>
            </div>
        )
    });

};


export default CartItem