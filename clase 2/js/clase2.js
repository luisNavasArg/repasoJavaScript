// //Template literalrs

// //de la vieja forma
let cartas = document.getElementById('principal');
const colores = ["green", "yellow", "red", "blue", "black"];
const cantCartas = 108;
const cantColor = 25;
let aux = 0;
let cartasDisponibles=0;
const cartEspeciales = ["+2", "&#216;", "<-- -->"];

//funciones flechas
// function agregarCartas(){}
const agregarCartas=(color,numero,otra)=>{
    otra.innerHTML+=`
        <div style='background-color:${color};' 
        class='siz'>${numero}</div>
    `;
}

const agregarEspeciales=(cartEspeciales,color,otra)=>{
    cartas.innerHTML+=`
    <div style='background-color:${color};' class='siz'>${cartEspeciales}</div>
    `;
}

for(let a=0; a < cantCartas; a++){
    agregarCartas(colores[parseInt(a/cantColor)],aux,cartas);
    if(aux < 10){
         aux++;
    }
    if(aux==10){
        aux=1;
    }
    if(a > 18 && a < 26){
        for(let x=0; x < cartEspeciales.length; x++){
            agregarEspeciales(cartEspeciales[x],colores[parseInt(a/cantColor)],cartas);
        }
    }
 
}

