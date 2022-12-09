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
            <div key={element.id} className='container-produc'>
                <div className='imagen'><img alt='img' src={`/images/${element.imagen}`} /></div>
                <div className='bodyContent'>
                    <div className='datos'>
                        <p>{element.nombre}</p>
                        <h6>Cantidad: {element.cantidad}</h6>
                        <span>C/U $ {element.precio}</span>
                    </div>
                    <div className='precio'>
                        <span>$ {element.precio * element.cantidad}</span>
                    </div>
                    <div className='iconContent'>
                        <FontAwesomeIcon onClick={() => removeItem(element.id)} className='icon1' icon={faXmark} />
                    </div>
                </div>
            </div>
        )
    });

};


export default CartItem