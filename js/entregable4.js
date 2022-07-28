/* El proyecto consiste en un logaritmo académico para promediar notas. 
El sistema tiene una contraseña; Claeve: 2277.  
El sistema tiene registrado un alumno.
1. Inicia con la clave. 
2. Si la clave es incorrecta, vuelve al inicio. 
3. Si la clave es correcta, sigue el proceso. 
4. Cargar alumno no está habilitado.
5. Cargar notas está habilitado. 
6. Salir suspende el proceso. 
7. Al seleccionar cargar notas, le da tres opciones... elegir entre dos materias y salir.
8. La materia Plantas 1, no está habilitada.
9. Salir suspende el proceso.
10. La materia Estructura 1 está habilitada, y da la opción de ingresar alumno. 
11. Si ingresa alumno incorrecto, no lo reconoce y vuele al bucle de ingresar nombre
12. si ingresa nombre correcto,lo reconoce como alumno. 
13. Solicita cantidad de notas a promediar. 
14. luego, solicita ingresar notas. 
15. Finalmente larga el promedio y alerta "Alumno Aprobado / No Aprobado".  
*/


// SECCION CONTRASEÑA

 let clave = "2277"; // La contraseña establecida es 2277

 document.querySelector(".clave_boton").addEventListener("click", function() { // Linkeo el click del botón para ocasionar el evento
     let claveIngresada = document.querySelector(".clave_ingreso").value; // Creo la variable y le asigno el valor que se ingrese

     if(claveIngresada === clave) { // Si la clave coincide...
        Toastify({
            text: "Clave Correcta",
            duration: 3000
        }).showToast();

         document.querySelector(".login").style.display = "none";
         document.querySelector(".materia").style.display = "inline-block";
         document.querySelector(".alumno").style.display = "inline-block";
         document.querySelector(".notas").style.display = "inline-block";
         document.querySelector(".nuevo_alumno").style.display = "inline-block";
         document.querySelector(".fetch").style.display = "inline-block";
     } else {
        document.querySelector(".clave_ingreso").value = "";
     }
 });    


//  SELECCION MATERIA 
document.querySelector(".materia_boton").addEventListener("click", function() {
    let materiaIngresada = document.querySelector("#materia_selector").value;
    console.log(materiaIngresada);
    
    if (materiaIngresada === "plantas") { // Si se elige Plantas...
        document.querySelector(".plantas").style.display = "inline-block";
    } else if (materiaIngresada === "estructura") { 
        document.querySelector(".estructura").style.display = "inline-block";
    }
})


//  SELECCION ALUMNO 
document.querySelector(".alumno_boton").addEventListener("click", function() {
    let alumnoSeleccionado = document.querySelector(".alumno_seleccion-alumno").value;
    console.log(alumnoSeleccionado);
    
    if (alumnoSeleccionado === "1") {
        document.querySelector(".notas").style.display = "inline-block";
    } else {

    }
});
// INGRESO DE NOTAS
// ESTABLEZCO ALUMNOS
const alumnos = {
    nombre: "Marcelino",
    apellido: "Ceballos",
    notas: [],
    calcularPromedio: function () {
        let sumaNotas = 0;
        for (i = 0; i < this.notas.length; i++) {
            sumaNotas += this.notas[i];
        }
        return (this.promedioFinal = sumaNotas / this.notas.length);
    },
};

document.querySelector(".notas_boton").addEventListener("click", function () { 
    let notaIngresada = Number(document.querySelector(".notas_ingresar").value);
    console.log("notaIngresada");

    alumnos.notas.push(notaIngresada);
    alumnos.calcularPromedio();
    console.log(alumnos);

    let notasPlantas = JSON.stringify(alumnos);
    console.log(notasPlantas);
    
    localStorage.setItem("alumnos.notas", notasPlantas);
});




let notas = localStorage.getItem("alumnos.notas");
console.log("notas");

fetch("https://ws.smn.gob.ar/map_items/weather")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        console.log(data[140].weather);
        console.log(data[140].weather.temp);
        let datoMeteorologico = data[140].weather.temp;
        let datoMeteorologicoEle = document.querySelector(".meteorologiaDato");
        datoMeteorologicoEle.innerText = datoMeteorologico + " °C";
    });

    