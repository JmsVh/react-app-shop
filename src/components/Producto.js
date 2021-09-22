import React, { Component } from 'react';

const Producto = ({producto, carrito, agregarProducto, productos}) => {

    const {nombre, precio, id} = producto;

    // Agregar producto al carrito
    const seleccionarProducto = (id) => {
        const producto = productos.filter(producto => producto.id === id)[0];
        agregarProducto([
            ...carrito,
            producto
        ]);
    };

    // Eliminando productos del carrito
    const eliminarProducto = (id) => {
        const productos = carrito.filter( producto => producto.id !== id );
        agregarProducto(productos)
    };

    return ( 
        <div> 
            <h1>{nombre}</h1>
            <p>${precio}MXN</p>
            { productos 
            ?
                (
                <button 
                    type="button"
                    onClick={ () => seleccionarProducto(id) }
                >Agregar</button>
                )
            :
                (
                <button 
                    type="button"
                    onClick={ () => eliminarProducto(id)}
                >Eliminar</button>
                )
            }
        </div>
    );
}
 
export default Producto;
