//Esta variable guarda una referencia al control de resultado, se declara global para no tener que estar ejecutando document.getElementById en cada ocasión que se necesite
let ctrlMostrado = document.getElementById('salida');

function dibujaTarjetas(arreglo) {
	let imprime = "<table id='registro'><tr><th>Habitación <i class='fas fa-sort ordenar' onclick='ordenaPorHabitacion(registro)'></i></th><th>Huesped <i class='fas fa-sort ordenar'onclick='ordenaPorHuesped(registro)'></i></th></tr>";
	//La siguiente estructura de for es casi ya un arcaísmo. Sin embargo, los clásicos nunca mueren.
	for (let i = 0; i < arreglo.length; i++) {
		imprime += "<tr><td>" + arreglo[i].numHabitacion + "</td><td>" + arreglo[i].nombreHuesped + "</td></tr>";
	}
	imprime += "</table>"
	ctrlMostrado.innerHTML = imprime;
}

function ordenaPorHabitacion(arr) {
	let incio = performance.now();
	dibujaTarjetas(qSort(arr))
	let fin = performance.now();
	console.log( "Tiempo de ejecución: ", fin-incio);
}

function qSort(arr) {
	if (arr.length <= 1) {
		return arr;
	} else {
		var pivot = Math.round(Math.random() * (arr.length - 1));
		//console.log("posición", pivot);
		var pivot = arr[pivot];
		//console.log("valor",pivot);
		var max = [];
		var min = [];
		var p = [];
		
		for (var el in arr) {
			var el = arr[el];
			// console.log(el);
			if (parseInt(pivot.numHabitacion) > parseInt(el.numHabitacion)) {
				min.push(el);
			} else if (parseInt(pivot.numHabitacion) < parseInt(el.numHabitacion)) {
				max.push(el);
			} else {
				p.push(el);
			}
		}
	}
	return (qSort(min)).concat(p, qSort(max));
}

function ordenaPorHuesped(arr) {
	//Acá puedes hacer la otra que ordene por el nombre del huesped
	let inicio = performance.now();
	var valor_temporal;
	for (var i = arr.length - 1; i >= 0; i--) {
		var posicion_maximo = find_max(arr, i)
		valor_temporal = arr[posicion_maximo]
		arr[posicion_maximo] = arr[i]
		arr[i] = valor_temporal
	}
	dibujaTarjetas(arr);
	let fin = performance.now();
	console.log("Tiempo de ejecución: ",fin-inicio)
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
