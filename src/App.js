import './App.css';
import Navbar from './componentes/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuApi from './componentes/MenuApi/MenuApi';
import Carrito from './componentes/Carrito/Carrito';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import DetalleProducto from './componentes/DetalleProducto/DetalleProducto';
import Footer from './componentes/Footer/Footer';
import CartProvider from './Context/CartProvider';
import CartWidget from './componentes/CartWidget/CartWidget';


function App() {
  return (
    <div className="container_shop">
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <CartWidget />
          <Routes>
            <Route path='/' element={<MenuApi />} />
            <Route path="/categoria/:categoriaNombre" element={<MenuApi />} />
            <Route path='/Carrito' element={<Carrito />} />
            <Route path='ItemDetalle/:id' element={<DetalleProducto />} />
          </Routes>
            <Footer />
        </BrowserRouter >
      </CartProvider>

    </div>
  );
}

export default App;