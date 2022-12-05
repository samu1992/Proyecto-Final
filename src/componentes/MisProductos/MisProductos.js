import Items from '../Items/Items';

function Productos({ productos }) {
    return (
        <>
            {
                productos.map((product) => (
                    <Items key={product.id} producto={product}></Items>
                ))}
        </>
    )
}

export default Productos;