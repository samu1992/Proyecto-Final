import { Link } from 'react-router-dom';
import './Items.css';
import Card from 'react-bootstrap/Card'
import  Button  from 'react-bootstrap/Button';




function Items({ producto }) {
    return (
        <div className='container_list'>
            <Card>
                <Card.Img variant='top' className='img' src={`/images/${producto.imagen}`} />
                <Card.Body>
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Title>USD {producto.precio}</Card.Title>
                    <Link  to={`/ItemDetalle/${producto.id}`}>
                        <Button variant='secondary' >Detalle del producto</Button>
                    </Link>
                </Card.Body>
            </Card> 
            </div>
    )
};


export default Items
