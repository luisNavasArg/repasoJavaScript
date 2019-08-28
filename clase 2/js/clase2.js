//Template literalrs

//de la vieja forma
let cartas = document.getElementById('principal');
const colores = ["green", "yellow", "red", "blue", "black"];
const cantCartas = 108;
const cantColor = 25;
let aux = 0;
const cartEspeciales = ["+2", "&#216;", "<-- -->"];

for (let i = 0; i < cantCartas; i++) {
    if (aux <= 9) {
        cartas.innerHTML += "<div style='background-color:" + colores[parseInt(i / 25)] + ";' class='siz'>" + aux + "</div>";

    }
    if (aux == 10) {
        aux = 0;
    }
    if (i == 20) {
        for (let x = 0; x < 2; x++) {
            for (let a = 0; a < cartEspeciales.length; a++) {
                cartas.innerHTML += "<div style='background-color:" +
                    colores[parseInt(i / 25)] + ";' class='siz'>" +
                    cartEspeciales[a] + "</div>";
            }
        }

    }
    if (i == 24) {
        cartas.innerHTML +=
            "<div style='background-color:white;' class='siz'></div>";
    }
    aux++;

}