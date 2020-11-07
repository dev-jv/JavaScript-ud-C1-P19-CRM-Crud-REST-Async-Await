import {mostrarAlerta, validar} from './funciones.js';
import {nuevoCliente} from './API.js'; 
(function(){
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarCliente);

    function validarCliente(e){
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        const cliente = {
            nombre, // nombre : nombre,
            email,
            telefono,
            empresa
        }
        // console.log(Object.values(cliente)); // Array con valores de un obj
        // console.log(Object.values(cliente).every( input => input !==''));

        if(validar(cliente)){
            mostrarAlerta('All fields are requiered');
            return;
        }
        nuevoCliente(cliente);
    }
})()































