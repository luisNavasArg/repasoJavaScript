const alumnos = [];
const crearFormulario=()=>{
	let formulario = document.getElementById('principal');
	formulario.innerHTML=`
		<form>
			<label>Nombre:
				<input type="text" id="nombre" required/>
			</label><br>
			<label>Apellido:
				<input type="text" id="apellido" required/>
			</label><br>
			<label>DNI:
				<input type="text" id="dni" required/>
			</label><br>
			<label>Curso:
				<input type="text" id="curso" required/>
			</label><br>
			<label>Turno:
				<input type="text" id="turno" required/>
			</label><br>
			<input type="button" value="Enviar" onclick="agregarAlumn()"/>
		</form>	
	`;
};

crearFormulario();
	
const agregarAlumn=()=>{
	let din=document.getElementById('dni').value;
	console.log(alumnos.indexOf("95681062"));
	alumnos.push({
		nombre:document.getElementById('nombre').value,
		apellido:document.getElementById('apellido').value,
		dni:document.getElementById('dni').value,
		curso:document.getElementById('curso').value,
		turno:document.getElementById('turno').value
	});
	mostrarDatos();
};

const mostrarDatos=()=>{
	let tabla = document.getElementById('tabla');
	tabla.innerHTML=`
		<table border="2" >
			<thead>
			<tr>
				<th>Nombre</th>
				<th>Apellido</th>
				<th>DNI</th>
				<th>Curso</th>
				<th>Turno</th>
			</tr>
			</thead>
			<tbody id='datos'>
			</tbody>
		</table>
	`;
	
	for (let i =0 ; i < alumnos.length; i++) {
		let datos = document.getElementById('datos');
			datos.innerHTML+=`<tr>
				<th>${alumnos[i].nombre}</th>
				<th>${alumnos[i].apellido}</th>
				<th>${alumnos[i].dni}</th>
				<th>${alumnos[i].curso}</th>
				<th>${alumnos[i].turno}</th>
			</tr>`;
		}	
};

