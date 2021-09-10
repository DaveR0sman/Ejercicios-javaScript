var num1 = parseInt(prompt ("Introduce el primer numero para realizar las operaciones"));
var num2 = parseInt(prompt ("Introduce el segundo numero"));

function operaciones (num1,num2) {
 var resultado1 = num1 + num2;
 var resultado2 = num1 * num2;
 var resultado3 = num1 - num2;
 var resultado4 = num1 / num2;
    document.write('La multiplicacion de tus numeros ingresados es = ',  +resultado2,"<br>") ;
    document.write('La resta de tus numeros ingresados es = ', +resultado3,"<br>") ;
    document.write('La suma de tus numeros ingresados es = ' + resultado1,"<br>") ;
    document.write('La division de tus numeros ingresados es = ',  +resultado4,"<br>");
   }

   operaciones(num1, num2);
//document.write("La suma de tus numeros ingresados es " ,num1+num2, "<br>");

//document.write("La resta de tus numeros ingresados es " ,num1-num2, "<br>");

//document.write("La multiplicacion de tus numeros ingresados es " ,num1*num2, "<br>");

//document.write("La division de tus numeros ingresados es " ,num1/num2, "<br>");