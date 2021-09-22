import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Fragment, useState } from 'react';


function App() {

// State para productos
const [productos, guardarProductos] = useState([
  {"id":1, "nombre":"Healix-UVC", "precio":1200},
  {"id":2, "nombre":"Lámpara-UVC", "precio":1300},
  {"id":3, "nombre":"Lámpara de Techo", "precio":1400},
  {"id":4, "nombre":"Lámpara de piso", "precio":1500},
  {"id":5, "nombre":"Reflector", "precio":1600}
]);


// State para carrito de productos
const [carrito, agregarProducto] = useState([]);

//Obtener la fecha
const fecha = new Date().getFullYear();

  return (
    <Fragment>
        <Header titulo="Titulo del sitio web"/>
        <h2>Lista de productos:</h2>
            {productos.map(producto => (
                <Producto
                    key={producto.id}
                    producto={producto}
                    productos={productos}
                    carrito={carrito}
                    agregarProducto={agregarProducto}
                />
            ))}
        <Carrito
          carrito={carrito}
          agregarProducto={agregarProducto}
        />
        <Footer fecha={fecha}/>
    </Fragment>
  );
}

export default App;
