function mostrar()
{
  let nombre;
  let tipoCursada;
  let materias;
  let genero;
  let promedio;
  let edad;

  let flagPromedio = true;
  let maxPromedio = 0;
  let maxPromNombre;

  let flagMenor = true;
  let menorEdad = 10000;
  let menorNombre;

  let cantFem = 0;
  let cantMasc = 0;
  let cantNB = 0;
  let acumNotFem = 0;
  let acumNotMasc = 0;
  let acumNotNB = 0;
  let promFem = 0;
  let promMasc = 0;
  let promNB = 0;
  
  let flagMaterias = true;
  let maxMaterias = 0;
  let maxMatNombre;
  let maxMatEdad;

  let respuesta;
  
  do {
    nombre = prompt("Ingrese el nombre del alumno: ");
    
    tipoCursada = prompt("Ingrese el tipo de cursada (libre/ presencial/ remota): ").toLowerCase();
		while (tipoCursada != "libre" && tipoCursada != "presencial" && tipoCursada != "remota"){
		tipoCursada = prompt("Error, ingrese un tipo de cursada válida (libre/ presencial/ remota): ").toLowerCase();
		}

    materias = parseInt(prompt("Ingrese la cantidad de materias (entre 1 y 7): "));
		while(materias <= 0 || isNaN(materias) || materias >= 8) {
		  materias = prompt("Error, ingrese una cantidad válida (entre 1 y 8): ");
		}

    genero = prompt("Ingrese su género (femenino/ masculino/ no binario): ").toLowerCase();
		while (genero != "femenino" && genero != "masculino" && genero != "no binario"){
		genero = prompt("Error, ingrese un género válido para este programa (femenino/ masculino/ no binario): ").toLowerCase();
		}

    promedio = parseFloat(prompt("Ingrese el promedio (entre 0 y 10): "));
		while(promedio < 0 || isNaN(promedio) || promedio > 10) {
		  promedio = prompt("Error, ingrese un promedio válido (entre 1 y 10): ");
		}

    edad = parseInt(prompt("Ingrese su edad: "));
		while(edad <= 0 || isNaN(edad)) {
		  edad = prompt("Error, ingrese una edad válidad: ");
		}

    //A
    if(genero != "masculino" && (flagPromedio || promedio > maxPromedio)){
      flagPromedio = false;
      maxPromedio = promedio;
      maxPromNombre = nombre;
    }

    //B
    if(tipoCursada == "libre" && (flagMenor || edad < menorEdad)){
      flagMenor = false;
      menorEdad = edad;
      menorNombre = nombre;
    }

    //C
    if(genero == "femenino"){
      acumNotFem += promedio;
      cantFem++;
    } else if(genero == "masculino"){
      acumNotMasc += promedio;
      cantMasc++;
    } else {
      acumNotNB += promedio;
      cantNB++;
    }

    //D
    if(tipoCursada != "remota" && (flagMaterias || materias > maxMaterias)){
      flagMaterias = false;
      maxMaterias = materias;
      maxMatNombre = nombre;
      maxMatEdad = edad;
    }

    respuesta = prompt("¿Desea agregar otro alumno?").toLowerCase();
	} while (respuesta == "s");

  //a
  console.log("El nombre del mejor promedio que no es masculino es: " + maxPromNombre + " con un promedio de " + maxPromedio);

  //b
  console.log("El nombre del más joven de los alumnos que dan libre es: " + menorNombre + " con " + menorEdad + " años");

  //c
  if(cantFem > 0){
    promFem = acumNotFem / cantFem;
    console.log("La nota promedio del genero femenino es: " + promFem);
  } else {
    console.log("No se registraron alunas femeninas.");
  }

  if(cantMasc > 0){
    promMasc = acumNotMasc / cantMasc;
    console.log("La nota promedio del genero masculino es: " + promMasc);
  } else {
    console.log("No se registraron alunos masculinos.");
  }

  if(cantNB > 0){
    promNB = acumNotNB / cantNB;
    console.log("La nota promedio del genero no binario es: " + promNB);
  } else {
    console.log("No se registraron alunos no binarios.");
  }

  //d
  console.log("El nombre del alumno que cursa más materias es " + maxMatNombre + " con " + maxMatEdad + " años, que cursa " + maxMaterias + " materia/s.");
}
