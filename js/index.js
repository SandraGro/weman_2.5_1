//Esta variable guarda una referencia al control de resultado, se declara global para no tener que estar ejecutando document.getElementById en cada ocasión que se necesite
let ctrlMostrado = document.getElementById('salida');

function dibujaTarjetas(arreglo) {
	let imprime = "<table id='registro'><tr><th>Habitación</th><th>Huesped</th></tr>";
	//La siguiente estructura de for es casi ya un arcaísmo. Sin embargo, los clásicos nunca mueren.
	for (let i = 0; i < arreglo.length; i++) {
		imprime += "<tr><td>" + arreglo[i].numHabitacion + "</td><td>" + arreglo[i].nombreHuesped + "</td></tr>";
	}
	imprime += "</table>"
	ctrlMostrado.innerHTML = imprime;
}

function ordenaPorHabitacion(arr) {
	//En esta función escribe la función que ordenará el arreglo por habitación
	var valor_temporal;
	for (var i = arr.length - 1; i >= 0; i--) {
		var posicion_maximo = findMax(arr, i)
		valor_temporal = arr[posicion_maximo] 
		arr[posicion_maximo] = arr[i] 
		arr[i] = valor_temporal 
	}
	dibujaTarjetas(arr);
}

function findMax(arr, end) {
	var max = 0;

	for (var i = 0; i <= end; i++) {
		if (parseInt(arr[i].numHabitacion) > parseInt(arr[max].numHabitacion)) {
			max = i;
		}
	}

	return max;
}


function ordenaPorHuesped(arr) {
	//Acá puedes hacer la otra que ordene por el nombre del huesped

	var valor_temporal;
	for (var i = arr.length - 1; i >= 0; i--) {
		var posicion_maximo = find_max(arr, i)
		valor_temporal = arr[posicion_maximo] 
		arr[posicion_maximo] = arr[i] 
		arr[i] = valor_temporal 
	}
	dibujaTarjetas (arr);
}

function find_max(arr, end) {
	var max = 0;

	for (var i = 0; i <= end; i++) {
		if (arr[i].nombreHuesped > arr[max].nombreHuesped) {
			max = i;
		}
	}

	return max;
}



