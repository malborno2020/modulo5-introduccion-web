let nombre="manuel"
let saludo="hola"
//Ejercicio 1
let n=20
let m= 120
let r=n+m

console.log(r)

//Ejercicio 2
let a=2
let b=8
let c=6
let d=1
let e=5
let f=a*b*c*d*e

console.log(f)

//Ejercicio 3
let x=4
let y=5
let z=6
let w=((x+z)*y*y)

console.log(w)

//Ejercicio 4
a="hola"
b="mundo"
c=a+" "+b

console.log(c)

//Ejercicio 5
a="5"
b="3"
c="7"

console.log(a+ " + "+b+" + "+c+" = "+a+b+c)

//Ejercicio 6

let usuario1 = { nombre: "juan", apellido: "perez" }
let usuario2 = { nombre: "sara", apellido: "aparicio" }
let usuario3 = { nombre: "sebastián", apellido: "gonzales" }
let usuario4 = { nombre: "catalina", apellido: "rodriguez" }
let usuario5 = { nombre: "laura", apellido: "quintanilla" }
let usuario6 = { nombre: "camila", apellido: "lopez" }
let usuario7 = { nombre: "carlos", apellido: "gutierrez" }
let usuario8 = { nombre: "sergio", apellido: "chacon" }

n=100

if(n==1){
    console.log("Hola, "+usuario1.nombre+" "+usuario1.apellido)
}else if(n==2){
    console.log("Hola, "+usuario2.nombre+" "+usuario2.apellido)
}else if(n==3){
    console.log("Hola, "+usuario3.nombre+" "+usuario3.apellido)   
}else if(n==4){
    console.log("Hola, "+usuario4.nombre+" "+usuario4.apellido)
}else if(n==5){
    console.log("Hola, "+usuario5.nombre+" "+usuario5.apellido)
}else if(n==6){
    console.log("Hola, "+usuario6.nombre+" "+usuario6.apellido)
}else if(n==7){
    console.log("Hola, "+usuario7.nombre+" "+usuario8.apellido)
}else if(n==8){
    console.log("Hola, "+usuario8.nombre+" "+usuario8.apellido)
}else{
    console.log("Usuario no registrado")
}

//Ejercicio 6 con Array

let usuarios = [usuario1, usuario2, usuario3, usuario4, usuario5, usuario6, usuario7, usuario8]

if (n <= usuarios.length) {
    console.log("Hola con arreglo, " + usuarios[n-1].nombre + " " + usuarios[n-1].apellido)
}else{
console.log("Usuario con array no registrado")
}

//Estructura IF
//Ejercicio 2

a=15
b=100

if(a<b){
    console.log("b es el mayor")
}
else if(a>b) {
    console.log("a es el mayor")
}


//Ejercicio 3
a=1000
b=1000

if(a<b){
    console.log("b es el mayor y a es el menor")
}
else if(a>b) {
    console.log("a es el mayor y b es el menor")
}
else {
    console.log("son el mismo número")
}



//Ejercicio 4

n=57

if(n%2==0) {
    console.log("n es par")
}else {
    console.log("n es impar")
}

//Ejercicio 5

if(n%2!=0) {
    console.log("n es impar")
}else {
    console.log("n es par")
}

//Ejercicio 6

let edad=8
let categoria="D"

//let edad=prompt("Ingrese la edad")
//let categoria=prompt("Ingrese la categoría A B C o D")


if(categoria=="A") {
    console.log("puede ver la pelicula")    
}else{
    if(categoria=="B" && edad>9) {
        console.log("Puede ver la película")
    }
    if(categoria=="C" && edad>18) {
        console.log("Puede ver la película")
    }
    if(categoria=="D" && edad>25) {
        console.log("Puede ver la película")   
    }else{
        console.log("No puede ver la pelicula")
    }  
}