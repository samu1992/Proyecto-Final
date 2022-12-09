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
        <div className='itemDetalle'>
        <Card className='contenedor'>
                <div className='container-img'><img src={`../images/${detalleProduct.imagen}`} className="imagen" alt="img" /></div>
                    <Card.Body className='body'>
                        <Card.Title className='titulo'>{detalleProduct.nombre}</Card.Title>
                        <Card.Subtitle className='titulo1'><span>Precio:  USD {detalleProduct.precio}</span></Card.Subtitle>
                        <h6>Cantidad: {cantidad}</h6>
                        <h6> En Stock: {detalleProduct.stock}</h6>
                        <Contador className='contador' setCantidad={setCantidad}/>
                        <Button className='agregar' variant='dark' onClick={() => addCart(detalleProduct, cantidad)}>
                            Agregar a Carrito</Button>
                    </Card.Body>
        </Card>
        </div>
    )
};

export default ItemDetalle