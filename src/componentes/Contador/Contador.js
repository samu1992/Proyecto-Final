import { Button } from 'react-bootstrap';
import './Contador.css';

const Contador = ({setCantidad}) => {
    const agregar =()=>{
        setCantidad((valor)=> valor +1)
    }
    const quitar = () => {
        setCantidad((valor)=> 
            valor === 1 ? 1 : 1
        )
    }
    return (
        <div className='container_amount'>
            <Button id='amount' variant='secondary' onClick={agregar}>Agregar</Button>
            <Button  id='amount' variant='secondary' onClick={quitar}>Quitar</Button>
        </div>
    )
}

export default Contador