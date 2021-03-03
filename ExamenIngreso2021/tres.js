function mostrar()
{
	let nombre;
	let estCiv;
	let edad;
	let temperatura;
	let genero;

	let contMayorViudo = 0;

	let flagSolteras = true;
	let masJovenNombre;
	let masJovenEdad;

	let subtotal = 0;
	let total = 0;

	let cantMayores = 0;
	let cantPersonas = 0;

	let respuesta;


	do {
		nombre = prompt("Ingrese el nombre");
	  		while (!isNaN(nombre) || nombre == ""){
				nombre = prompt("Error, Ingrese un nombre correcto");
	  		}

		estCiv = prompt("Ingrese el estado civil (soltero / casado / viudo): ").toLowerCase();
			while(estCiv != "soltero" && estCiv != "casado" && estCiv != "viudo"){
				estCiv = prompt("Error, ingrese un estado civil válido (soltero / casado / viudo): ").toLowerCase();
		  	}
  
	 	edad = parseInt(prompt("Ingrese la edad (debe ser mayor de edad): "));
		  	while(isNaN(edad) || edad < 18) {
				edad = parseInt(prompt("Error, ingrese una edad correcta (debe ser mayor de edad): "));
			}
			
		temperatura = parseFloat(prompt("Ingrese temperatura: "));
			while(temperatura <= 0 && isNaN(temperatura)){
				temperatura = parseFloat(prompt("Error, ingrese una temperatura válida: "));
			}

		genero = prompt("Ingrese genero (F / M / NB): ").toLowerCase();
			while(genero != "f" && genero != "m" && genero != "nb"){
				genero = promt("Error, ingrese un genero correcto (F / M / NB): ").toLowerCase();
			}

		//A
			if(edad > 60 && estCiv == "viudo") {
				contMayorViudo++;
			}

		//B
			if(genero == "f" && estCiv == "soltero" && (flagSolteras || edad < masJovenEdad)){
				flagSolteras = false;
				masJovenEdad = edad;
				masJovenNombre = nombre;
			}

		//C
			subtotal += 600;

		//D
			if(edad > 60){
				cantMayores++;
			}
			cantPersonas++;

			respuesta = prompt("¿Desea agregar otro pasajero?");
	} while (respuesta == "s");

	//a
	console.log("La cantidad de personas mayores a 60 años viudas es de: " + contMayorViudo);

	//b
	console.log("La mujer más joven y soltera es " + masJovenNombre + " con una edad de " + masJovenEdad);

	//c
	console.log("El precio del viaje sin descuento es de $" + subtotal);

	//d
	if((cantMayores * 2) > cantPersonas){
		total = subtotal * 0.75;
		console.log("El total de la compra es de $" + total + " ya que se aplica un descuento.");
	} else {
		console.log("El total de la compra es de $" + subtotal + " ya que no se aplica ningún descuento.");
	}

	
}
