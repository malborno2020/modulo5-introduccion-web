//Ejercicio 3 Estructura For
//Ejercicio i

let n=10
lista=""

for (let index = 0; index < n+1; index++) {
    if(index==n+1) {
        lista=lista+index;
    }else{
        lista=lista+index+"- ";
    }
}
console.log(lista)

//Ejercicio ii

n=20
lista=""

for (let index = 0; index < n; index++) {
    if(index == n) {
        lista=lista+index*-1;
    }else{
        lista=lista+index*-1+"; ";
    }
}
console.log(lista)

//Ejercicio iii

let suma_total=0
n=1000

for (let index = 0; index < n+1; index++) {
    suma_total+= index;
}
console.log("Suma Total = "+ suma_total)

//Ejercicio iv

n=20
lista=""

for (let index = 0; index < n+1; index++) {
    if(index%2==0 ) {
        lista+=index+"; ";
    }
}
console.log(lista)

//Ejercicio v

n=20
lista=""

for (let index = 0; index < n+1; index++) {
    if(index%2!=0 ) {
        lista+=index+"; ";
    }
}
console.log(lista)

//Ejercicio visual

n=10
factorial=1

for (let index = 1; index < n+1; index++) {
    factorial = index*factorial
}
console.log(factorial)

//Ejercicio 4 Estructura WHILE

//Ejercicio i

texto=""

while (texto!="salir") {
    texto = prompt("Ingrese una palabra")
    console.log(texto)
}

//Ejercicio ii

n=185
lista=[]

while (n > 0) {
    if(n%2!=0){
        operacion=n-1
        n=n-1
    }else{
        operacion=n/2
        n=n-1
    }
    lista[n]=operacion
}
console.log("Operaciones realizadas:"+lista)

//Ejercicio iii

n=134
lista=[]

while (n > 0) {
    if(n%2!=0){
        operacion=n-1
        n=n-1
    }else{
        operacion=n/2
        n=n-1
    }
    lista[n]=operacion
}
console.log("Número de Operaciones realizadas:"+lista.length)

//Ejercicio iv

let sum_total=0
let numero=0

while (numero!=-1) {
    sum_total+= numero
    numero = Number(prompt("Ingrese un número"))
}
console.log(sum_total)