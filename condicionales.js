var nombre = prompt('Cual es tu nombre?');
var edad = prompt('Cual es tu edad?');

if( edad >=18 && edad <=29){
    //console.log('Eres mayor de edad');
    document.write("has sido aceptado en el programa " + nombre + ", Bienvenido" );
} else{
    //console.log('Eres menor de edad');
    document.write('NO CUMPLES CON LOS REQUISITOS DEL PROGRAMA ' + nombre);
}