import { useEffect, useState } from "react";
import Productos from '../MisProductos/MisProductos';
import {  useParams } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';


const MenuApi = () => {
    const [productos, setProductos] = useState([]);
    const { categoriaNombre } = useParams();
    const [loading, setLoading] = useState(true)

    const getProducts = () => {
        const db = getFirestore();
        const queryBase = collection(db, 'productos');
        const queryShop = categoriaNombre
            ? query(queryBase, where('categoria', '==', categoriaNombre)) : queryBase;
        getDocs(queryShop)
            .then((response) => {
                const data = response.docs.map((product) => {
                    return { id: product.id, ...product.data() }
                });
                setProductos(data)
            })
            .catch((error) => { console.log(error) });

    }
    useEffect(() => {
        getProducts()
        setLoading(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoriaNombre]);
    return (
        <div
            style={{
                padding: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
            }}> {loading ? (<Spinner animation="border" role="status" />) : (<Productos productos={productos} />)}
        </div>
    )
}
export default MenuApi