import './Carrito.css';
import CartItem from '../CartItem/CartItem';
import { CartContext } from '../../Context/CartProvider';
import { useContext, useEffect, useState } from 'react';
import  Button  from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { collection, addDoc, getFirestore, doc, updateDoc } from 'firebase/firestore';
import moment from 'moment/moment';

const Carrito = () => {
  const { clear, cart } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const [formValues, setFormValues] = useState({
    nombre: '',
    email: '',
    telefono: ''
  })
  const totalCantidad = cart.reduce((acc, pro)=> acc + pro.cantidad,0);

  const getTotalPrice = () => {
    setTotal(cart.reduce((acc, pro)=> acc + pro.precio * pro.cantidad,0))  
};
  const enviarOrden = () => {
    const db = getFirestore();
    const query = collection(db, "ordenes");
    const newOrden = {
      buyer: {
        nombre: formValues.nombre,
        telefono: formValues.telefono,
        email: formValues.email
      },
      date: moment().format('DD/MM/YYYY'),
      productos: cart,
      total: total
    };
    addDoc(query, newOrden)
      .then((response) => {
        alert(`Orden Creada Nro: ${response.id}`)
        return(response)
      })
      .then((res)=>{
        cart.forEach(element => {
          const query = doc(db, "productos", element.id);
          updateDoc(query, {
            stock: element.stock - element.cantidad,
          })
        });
        
      })
      .catch((error) => console.log(error))
  };
  useEffect(()=>{
    getTotalPrice();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  const handleInputChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className='contenedor-principal'>
      <div className='container-carro'>
        <h2 className="titulo"><span>Tu Carrito</span></h2>
        <p>TOTAL ({totalCantidad} productos) $ {total} </p>
        <p>Los artículos en tu carrito no están reservados. Terminá el proceso de compra ahora para hacerte<br/> con ellos.</p>
        <hr />
        <ListGroup>
          <CartItem />
        </ListGroup>
        
      </div>
      <div className='contenedor-dos'>
        <div className='accion-pagar'>
          IR A PAGAR
          <FontAwesomeIcon icon={faArrowRight} />
          </div>
          <h4>Resumen de compra</h4>
          <div className='resumen-compra'>
          <div className='resumen-compra-1'>
            <p>{totalCantidad} productos</p>
            <p>ENTREGA</p>
            <span>TOTAL</span>
            </div>
          <div className='resumen-compra-2'>
            <p>$ {total}</p>
            <p>GRATIS</p>
            <span>${total}</span>
          </div>
          </div>
        
      <Form className='formulario'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name='email'
            placeholder="Email"
            value={formValues.email}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name='nombre'
            placeholder="Nombre"
            value={formValues.nombre}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            type="text"
            name='telefono'
            placeholder="Telefono"
            value={formValues.telefono}
            onChange={handleInputChange}
          />
        </Form.Group>
      </Form>
      <div className='container-button'>
          <Button variant='dark' className='boton' onClick={() => clear()}>Vaciar</Button>
          <Button variant='dark' className='boton1' onClick={enviarOrden}>Finalizar Compra</Button>
        </div>
      </div>
    </div>
  )
};



export default Carrito