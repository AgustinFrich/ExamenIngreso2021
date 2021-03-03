
function mostrar()
{
	let nombre;
	let precio;
	let cantidad;
	let tipo;
	let marca;

	let cantAlcohol;
	let cantIAC;
	let cantQUAT;

	let acumAlc = 0;
	let acumIAC = 0;
	let acumQUAT = 0;

	let promedioCantAlc;
	let promedioCantIAC;
	let promedioCantQUAT;

	let inflamableAlcohol;
	let inflamableIAC;
	let inflamableQUAT;

	let IACbaratos = 0;

	let maxprecio = 0;
	let flagPrecio = true;
	let maxTipo;
	let maxMarca;

	let respuesta = 5;

	do {
		nombre = prompt("Ingrese un producto a comprar (Alcohol/ IAC/ QUAT):").toUpperCase();
		while (nombre != "ALCOHOL" && nombre != "IAC" && nombre != "QUAT"){
		nombre = prompt("Error, ingrese un producto válido a comprar (arena/ cal/ cemento):").toUpperCase();
		}

		precio = prompt("Ingrese el precio por unidad:");
    	while(precio < 100 || isNaN(precio) || precio > 300) {
     	precio = prompt("Error, ingrese un precio existente");
    }

		cantidad = parseInt(prompt("Ingrese la cantidad a comprar:"));
		while(cantidad <= 0 || isNaN(cantidad) || cantidad > 1000) {
		  cantidad = prompt("Error, ingrese una cantidad existente:");
		}
		
		tipo = prompt("Ingrese el tipo del producto (inflamable/ combustible/ explosivo):").toLowerCase();
    	while (tipo != "ignifugo" && tipo != "combustible" && tipo != "explosivo"){
      	tipo = prompt("Error, ingrese un tipo del producto válido (inflamable/ combustible/ explosivo):").toLowerCase();
    	}

		marca = prompt("Ingrese la marca del producto: ");

		//A
		if(nombre == "ALCOHOL"){
			acumAlc += cantidad;
			cantAlcohol++;
		} else if(nombre == "IAC"){
			cantIAC++;
			acumIAC += cantidad;
		} else {
			cantQUAT++;
			acumQUAT += cantidad;
		}

		//B
		if(tipo == "ignifugo"){
			inflamableAlcohol += cantidad;
		} else if(tipo == "combustible"){
			inflamableIAC += cantidad;
		} else {
			inflamableQUAT += cantidad;
		}

		//C
		if(nombre == "IAC" && precio >= 200){
			IACbaratos += cantidad;
		}

		//D
		if(flagPrecio || precio > maxprecio){
			flagPrecio = false;
			maxprecio = precio;
			maxTipo = nombre;
			maxMarca = marca;
		}

		respuesta--;
	} while (respuesta > 0);

	//a
	if(cantAlcohol > 0){
		promedioCantAlc = acumAlc / cantAlcohol;
		console.log("El promedio de compra de cantidad de alcohol es de: " + promedioCantAlc);
	} else {
		console.log("No se realizo la compra de alcohol");
	}

	if(cantIAC > 0){
		promedioCantIAC = acumIAC / cantIAC;
		console.log("El promedio de compra de cantidad de IAC es de: " + promedioCantIAC);
	} else {
		console.log("No se realizo la compra de IAC");
	}

	if(cantQUAT > 0){
		promedioCantQUAT = acumQUAT / cantQUAT;
		console.log("El promedio de compra de cantidad de QUAT es de: " + promedioCantQUAT);
	} else {
		console.log("No se realizo la compra de QUAT");
	}

	//b
	if(inflamableAlcohol > inflamableQUAT && inflamableAlcohol > inflamableIAC){
		console.log("El tipo inflamable con más unidades al final de la compra es: " + inflamableAlcohol);
	} else if(inflamableIAC > inflamableQUAT){
		console.log("El tipo inflamable con más unidades al final de la compra es: " + inflamableIAC);
	} else {
		console.log("El tipo inflamable con más unidades al final de la compra es: " + inflamableQUAT);
	}
	
	//c
	console.log("La cantidad de unidades de IAC a menos de $200 es de: " + IACbaratos);

	//d
	console.log("La marca del producto más caro es " + maxMarca + " y su tipo es " + maxTipo + " con un precio de $" + maxprecio);
}
