let coordenadas=[];
window.onmousemove=()=>{
	let x = window.event.clientX;
	let y = window.event.clientY;

	// coordenadas.push(`{x:${x}, y:${y}}`);
	coordenadas=[...coordenadas,{x,y}];
	dibujaCirculo(x,y);
}

const dibujaCirculo=(x,y)=>{

		let lienzo = document.getElementById('principal');
		let context = lienzo.getContext('2d');
		context.strokeStyle='red';
		context.beginPath();
		context.arc(x-7,y-7,1,0,Math.PI*2,false);
		context.fill();
		context.stroke();
	
};
	
//otra manera de llenar un arreglo
// let numeros=[1,2,3];
// numeros=[0,...numeros,4];
// console.log(numeros);
// numeros=[4,...numeros];
// console.log(numeros);

let cuentaClick=0;
let arregloLinea=[];
window.onclick=()=>{
	let x =window.event.clientX;
	let y =window.event.clientY;
	arregloLinea=[...arregloLinea,{x,y}];
	cuentaClick++;
	if(cuentaClick==2){
		dibujamosLinea(arregloLinea);
	}

}

const dibujamosLinea=(arregloLinea)=>{
	let lienzo = document.getElementById('principal');
	let context = lienzo.getContext('2d');
	context.strokeStyle="blue";
	context.beginPath();
	for(let a =0; a < arregloLinea.length; a++){
		context.moveTo(arregloLinea[a].x,
			arregloLinea[a].y);
		for(let j=0; j < arregloLinea.length; j+=2){
			context.lineTo(arregloLinea[j].x,
				arregloLinea[j].y);
		}
	}
	context.stroke();
	cuentaClick=0;
	arregloLinea=[];
};
