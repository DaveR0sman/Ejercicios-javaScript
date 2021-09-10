let calificacion = prompt("Por favor introduce tu calificacion final");

if(calificacion ==10) {
    document.write('Excelente, has demostrado capacidades extraordinarias, lograste la excelencia.');
} else if (calificacion ==9){
    document.write('Felicidades casi logras la excelencia');
} else if (calificacion == 8) {
    document.write('Muy bien pasaste el semestre');
} else if(calificacion >= 6 && calificacion <=7) {
    document.write('por poco lo has logrado, aprobaste');
} else if(calificacion <6){
    document.write('lo sentimos, est[as reprobado ');
}