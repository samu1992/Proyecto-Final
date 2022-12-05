import './Carrito.css';
import CartItem from '../CartItem/CartItem';
import { CartContext } from '../../Context/CartProvider';
import { useContext, useEffect, useState } from 'react';
import  Button  from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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
        <h2 className="titulo">Carrito</h2>
        <div className='titulos'><h5 className='producto'>PRODUCTO</h5><h5 className='subtotal'>SUBTOTAL</h5></div>
        <hr />
        <ul className='list-group list-group-flush'>
          <CartItem />
        </ul>
        <h3>Total:{total}USD</h3>
        <div className='container-form'>
          <Form>
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
          <Button variant='light' className='boton' onClick={() => clear()}>Vaciar</Button>
          <Button variant='light' className='boton1' onClick={enviarOrden}>Finalizar Compra</Button>
        </div>
      </div>
    </div>
  )
};



export default Carrito