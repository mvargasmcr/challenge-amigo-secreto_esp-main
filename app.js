// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Declaracion de variables
let vListaNombres = [];
let vnumeroseleccionado = 0;
let vcantnombres = 0;
let lista = document.getElementById('listaAmigos');
let listaResultado = document.getElementById('resultado');
let vmensaje = '';

// Función para agregar un elemento a la lista
function agregarAmigo() {
var input = document.getElementById('amigo');
var nuevoTexto = input.value;
 // Valida que se haya digitado el nombre
    if (nuevoTexto !== '') {
        if (vListaNombres.length == 0){
            // Limpiar el campo
            lista.innerHTML = '';
        }
        // Crear un nuevo elemento de lista (ul)
        var nuevoElemento = document.createElement('ul');
        nuevoElemento.textContent = nuevoTexto;
        // Añadir el nuevo elemento a la lista
        lista.appendChild(nuevoElemento);
        // Crea el elemento en la lista de nombres para el sorteo
        if (vcantnombres == 0){
            // asigna el nomnre la primera vez
            vListaNombres.unshift(nuevoTexto);
        }else {
            // Agrega el nombre a la lista de valores
            vListaNombres.push(nuevoTexto);
        }
        // Limpiar el campo de texto
        input.value = '';
        // Aumenta el contador de Elementos
        vcantnombres++;
    } else {
        alert('Por favor, ingrese un nombre.');
    }
}

// Genera un numero random para escoger el numero del nombre
function generaNumeroSecreto() {
    return Math.floor(Math.random()*vcantnombres)+1;
}

// Eliminar la lista de elementos del arreglo de 
function eliminarLista() {
    var lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
  };

// Inicializa las variables del sistema luego de realizar el sorteo
function iniciaVariables(){
    // Se limpian variables generales para el proceso
    vcantnombres = 0;
    vnumeroseleccionado = 0;
    vmensaje = '';
    // Elimina los valores del arreglo de datos de los nombres
    while (vListaNombres.length > 0) {
        vListaNombres.shift();
    }
}

// Realiza el Sorteo de las personas 
function sortearAmigo(){
    // Generar el numero seleccionado de la lista de participantes
    vnumeroseleccionado = generaNumeroSecreto();
    // Mensajes de prueba para la ejecución del programa, parte del QA
    //alert(`El numero seleccionado es ${vnumeroseleccionado}`);
    //alert(`El nombre seleccionado es ${vListaNombres[vnumeroseleccionado-1]}`);
    // Mensaje anunciando el nombre seleccionado
    vmensaje = `El nombre seleccionado es ${vListaNombres[vnumeroseleccionado-1]}`;

    // Se limpia la lista de elementos de nombres
    lista.innerHTML = '';

    // Se crea el nuevo elemento con el mensaje del ganador
    var elementoResultado = document.createElement('ul');
    elementoResultado.textContent = vmensaje;

    // Añadir el nuevo elemento a la lista Resultado
    lista.appendChild(elementoResultado);
    
    // Inicializa las variables utilizadas en el proceso
    iniciaVariables();
}