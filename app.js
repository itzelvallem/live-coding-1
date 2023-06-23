// Escribe tu código aquí.



//Construcción de una función con aprámetros string,  array strings y return.
function obtenerMayorLongitud (string, stringArray) {
    const resultArray = [];

    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i].length > string.length) {
            resultArray.push(stringArray[i]);

        }
    }

    return resultArray;
    
}

const arreglo = ["rosa", "azul", "amarillo", "casa", "jardin"];
const result = obtenerMayorLongitud("blanco", arreglo);
console.log(result);



function printArray (stringArray) {
    const list = document.getElementById('myList'); // Se obtiene la referencia al elemento <ul> en el HTML

    for (let i = 0; i < stringArray.length; i++) {
const listItem = document.createElement('li'); //Crear un nuevo elemnto <li>
listItem.textContent = stringArray [i]; // Establecer el texto del elemento <li> como el string actual del array
list.appendChild(listItem); // Agregar el elemto <li> al elemnto <ul>

}
}

// Se crea una constante que almacena un arreglo
const arreglo2 = ["rosa", "azul", "jardin"];
printArray(arreglo2);
