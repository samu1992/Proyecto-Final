import Contador from '../Contador/Contador';
import { CartContext } from '../../Context/CartProvider';
import { useState, useContext } from 'react';
import Card from 'react-bootstrap/Card'
import './ItemDetalle.css'
import { Button } from 'react-bootstrap';


const ItemDetalle = ({ detalleProduct }) => {
    const [cantidad, setCantidad] = useState(1);
    const { addCart } = useContext(CartContext);

    return (
        <div className='container_item'>
        <Card className='container_item__card'>
                <div className='container_item__card__img'><img src={`../images/${detalleProduct.imagen}`}  alt="img" /></div>
                    <Card.Body className='container_item__card__body'>
                        <Card.Title className='container_item__card__body__title'>{detalleProduct.nombre}</Card.Title>
                        <Card.Subtitle className='container_item__card__body__subtitle'><span>Precio:  USD {detalleProduct.precio}</span></Card.Subtitle>
                        <h6>Cantidad: {cantidad}</h6>
                        <h6> En Stock: {detalleProduct.stock}</h6>
                        <Contador  setCantidad={setCantidad}/>
                        <Button className='container_item__card__body__add' variant='dark' onClick={() => addCart(detalleProduct, cantidad)}>
                            Agregar a Carrito</Button>
                    </Card.Body>
        </Card>
        </div>
    )
};

export default ItemDetalle