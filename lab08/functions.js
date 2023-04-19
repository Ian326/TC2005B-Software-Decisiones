function average(arr){
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum = sum+arr[i];
    }
    let avg = sum/arr.length;
    return avg;
}

function strToTxt(str){
    const filesystem = require('fs');
    filesystem.writeFileSync('str.txt', "hola");

}

const arr = [1,2,3,4,5,6,7,8,9,10]
const str = "Hola, esto es un string."
console.log("Ejercicio 1. El promedio del arreglo predefinido es: " + average(arr))
strToTxt(str)
console.log("Ejercicio 2. Se ha generado un archivo de texto con el string: '" + str + "'")
