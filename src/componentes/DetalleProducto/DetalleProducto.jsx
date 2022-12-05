import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemDetalle from '../ItemDetalle/ItemDetalle';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const DetalleProducto = () => {
    const [detalleProduct, setDetalleProduct] = useState();
    const { id } = useParams();

    const producto = () => {
        const db = getFirestore();
        const query = doc(db, 'productos', id);
        getDoc(query)
        .then((res) =>{
            setDetalleProduct({ id: res.id, ...res.data() });
        })
        .catch((error)=> console.log(error));
    }
    useEffect(()=>{
        producto()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id])
    return (
        <div>
            {detalleProduct && <ItemDetalle detalleProduct={detalleProduct}/> }
        </div>             
    )
};


export default DetalleProducto 