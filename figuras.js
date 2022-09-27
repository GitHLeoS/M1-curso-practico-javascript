// Código del cuadrado:

console.group ("Cuadrado")

function perimetroCuadrado (lado){
    return lado * 4;
} 

function areaCuadrado (lado) {
    return lado * lado;
}

console.groupEnd();

console.group ("Triángulo")

function perimetroTriangulo (lado1,lado2,base) {
    return lado1 + lado2 + base;
}

function areaTriangulo (base,altura) {
   return (base * altura) / 2; 
} 

function esIsosceles(lado1,lado2,base){
    
}
console.groupEnd();

// Código del círculo: necesitamos Radio - Diámetro - PI - Circunsferencia

console.group ("Círculo");

const PI = Math.PI; 

function diametroCirculo (radio){
    return radio * 2;
}

function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 
function areaCirculo (radio) {
    return PI * (radio * radio);
}

console.groupEnd();

// Interacción con HTML CUADRADO //

function calcularPerimetroCuadrado (){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    perimetro = perimetroCuadrado(value);
    alert (perimetro);
}

function calcularAreaCuadrado (){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert (area);
}

// Interacción con HTML TRIANGULO //

function calcularPerimetroTriangulo (){
    const value = parseInt(document.getElementById("InputTriangulo1").value);
    const value2 = parseInt(document.getElementById("InputTriangulo2").value);
    const value3 = parseInt(document.getElementById("InputTriangulo3").value);
    const perimetro = value + value2 + value3;
    alert (perimetro);
}

function calcularAreaTriangulo (){
    const value3 = parseInt(document.getElementById("InputTriangulo3").value);
    const value4 = parseInt(document.getElementById("InputTriangulo4").value);
    const area = areaTriangulo (value3,value4);
    alert (area);
}

function calcularIsosceles (){
    const value = parseInt(document.getElementById("InputTriangulo1").value);
    const lado1= value;
    const value2 = parseInt(document.getElementById("InputTriangulo2").value);
    const lado2= value2;
    const value3 = parseInt(document.getElementById("InputTriangulo3").value);
    const base= value3;
        if (lado1 == lado2){
            altura = Math.sqrt(Math.pow(lado1, 2) - (Math.pow(base, 2) / 4)).toFixed(2)
            alert("Es un isosceles y la atura es de " + altura + " cm")
        }else{
            alert("No es un isosceles")
        }
}

// Interacción con HTML CICULO //

function calcularDiametroCirculo (){
    const value = parseInt(document.getElementById("InputCirculo").value);
    const diametro = diametroCirculo (value)
    alert (diametro);
}

function calcularPerimetroCirculo (){
    const value = parseInt(document.getElementById("InputCirculo").value);
    const perimetro = perimetroCirculo (value)
    alert (perimetro);
}

function calcularAreaCirculo (){
    const value = parseInt(document.getElementById("InputCirculo").value);
    const area = areaCirculo (value)
    alert (area + " cm^2");
}
