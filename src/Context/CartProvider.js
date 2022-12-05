import { createContext, useState } from "react";
export const CartContext = createContext([]);


const CartProvider = ({children}) => {
    const [cart, setCart]= useState([]);

    const addCart = (detalleProduct, cantidad) => {
        if (isInCart(detalleProduct.id)) {
            const cartAux = cart.map(p => {
                if (p.id === detalleProduct.id) {
                    const newProduct = { ...p, cantidad: p.cantidad + cantidad }
                    return newProduct
                }
                return p
            })
            setCart(cartAux)
        } else {
            setCart([...cart, { ...detalleProduct, cantidad }]);
        }
    }
    const clear = () => {setCart([])
    }
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }
    const removeItem = (id) => {
        setCart(cart.filter((prod)=> prod.id !== id))
    }
    
    
    return (
        <CartContext.Provider value={{
            cart,
            addCart,
            clear,
            isInCart,
            removeItem,
            alert
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider