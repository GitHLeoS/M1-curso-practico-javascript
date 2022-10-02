const precioOriginal = 120;
const descuento = 0;
//Calcula precio con descuento
function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100
    return precioConDescuento
}
//Interactúa con el usuario para mostrar precio con descuento
function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;
    if(discountValue > 0){
        // Muestra el descuento y llama a la función de cálculo (si se ingresó un valor en el campo de descuento)
        const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
        const resultP = document.getElementById ("ResultPrice");
        resultP.innerText = "El precio con el "+discountValue+"% de descuento es: $" + precioConDescuento    
    }
    if(discountValue <= 0){
        // valida si no se ingresa descuento y lo pide mostrando el precio sin descuento
        const resultP = document.getElementById ("ResultPrice");
        resultP.innerText = "ingresar algún descuento, el precio es: $" + priceValue;
    }
    }
//Valida ingreso de cupones
function onClickButtonCuponCheck (){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputCupon = document.getElementById("InputCupon");
    const discountCupon = inputCupon.value;
    const resultP = document.getElementById ("ResultPrice");
    var encontrado = 0;
    //Detecta si se ingesó un valor con el indicador "encontrado"
    if (encontrado <= 0){
        const resultP = document.getElementById ("ResultPrice");
        resultP.innerText = "No es un cupón válido, el precio es: $" + priceValue;
    }
    //Recorre array buscando valor ingresado, asigna valor 1 a "encontrado"
    for (i=2; i<8;i++){
        const cupones = ["Wow201","Wow302", "Wow403","Wow504","Wow605","Wow706"];
        const recorreArray = i-2;
        const descuento = i*10;
            if (cupones[recorreArray] === discountCupon) {
            const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
            const resultP = document.getElementById ("ResultPrice");
            resultP.innerText = "El precio con tu cupón de "+descuento+"% "+cupones[recorreArray]+" es: $" + precioConDescuento;
        }
    }
}


//Formas de usar console.log
//console.log("El precio origonarl es " + precioOriginal + "")

//console.log({
//    precioOriginal,
//    descuento,
//    porcentajePrecioConDescuento,
//    precioConDescuento,
//})