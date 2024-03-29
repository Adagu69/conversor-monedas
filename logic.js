var spanInicio = document.querySelector('#inicio span');
var spanFinal = document.querySelector('#final span');
var img = document.querySelector('#change');
var divInicio = document.querySelector('#inicio');
var divFinal = document.querySelector('#final');

var inputInicio = document.querySelector('#valini');
var inputFinal = document.querySelector('#valfin');
var valorCompra = parseFloat(document.querySelector('#valcompra').textContent);
var valorVenta = parseFloat(document.querySelector('#valventa').textContent);

// Función para girar la imagen
function rotateImage() {
    var currentRotation = parseInt(img.style.transform.replace(/\D/g,'')) || 0;
    var newRotation = currentRotation + 180;
    img.style.transform = 'rotate(' + newRotation + 'deg)';
}

// Función para cambiar el texto de los divs
function changeText() {
    if (divInicio.getAttribute('cambio') === 'usd') {
        divInicio.setAttribute('cambio', 'pen');
        spanInicio.textContent = 'Soles';
        divFinal.setAttribute('cambio', 'usd');
        spanFinal.textContent = 'Dólares';
    } else {
        divInicio.setAttribute('cambio', 'usd');
        spanInicio.textContent = 'Dólares';
        divFinal.setAttribute('cambio', 'pen');
        spanFinal.textContent = 'Soles';
    }
}

// Agrega controladores de eventos de clic a los elementos span
spanInicio.addEventListener('click', function() {
    rotateImage();
    changeText();
});
spanFinal.addEventListener('click', function() {
    rotateImage();
    changeText();
});



// Función para realizar la conversión de moneda
function convertCurrency() {
    if (divInicio.getAttribute('cambio') === 'usd') {
        // Convierte de dólares a soles
        var amount = parseFloat(inputInicio.value);
        inputFinal.value = (amount * valorVenta).toFixed(2);
    } else {
        // Convierte de soles a dólares
        var amount = parseFloat(inputFinal.value);
        inputInicio.value = (amount / valorCompra).toFixed(2);
    }
}

// Agrega controladores de eventos de entrada a los campos de entrada
inputInicio.addEventListener('input', convertCurrency);
inputFinal.addEventListener('input', convertCurrency);

// Agrega controladores de eventos de clic a los elementos span
spanInicio.addEventListener('click', function() {
    rotateImage();
    changeText();
    convertCurrency();
});
spanFinal.addEventListener('click', function() {
    rotateImage();
    changeText();
    convertCurrency();
});



