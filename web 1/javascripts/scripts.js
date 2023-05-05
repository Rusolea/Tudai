let dadoUno = document.querySelector("#dadoUno");
let dadoDos = document.querySelector("#dadoDos");
let spanResultado = document.querySelector("#spanResultado");
let win = document.querySelector("#ganaste");
let resultado = document.querySelector("#resultado");
let intenta = document.querySelector("#intenta");
let intentos = 0;

function tirarDados() {
    console.log("hola");
    let valorDadoUno = Math.floor(Math.random()*6)+1;
    let valorDadoDos = Math.floor(Math.random()*6)+1;
    let resultadoSuma = valorDadoUno + valorDadoDos;
     
    if(resultadoSuma == 8){
        ganaste.classList.add("show");
        resultado.classList.add("show");
        spanResultado.innerHTML = "¡Ganaste!";
        intentos++;
    ganaste.innerHTML = `Ganaste en ${intentos} intentos!`;
    mensajeCategoria(intentos);
    }
    else{
        ganaste.classList.remove("show");
        resultado.classList.add("show");
        spanResultado.innerHTML = "El resultado es: " + resultadoSuma + ". ¡Vuelve a intentarlo!";
        intentos++;
    ganaste.innerHTML = `El resultado es: ${valorDadoUno + valorDadoDos}. Vuelve a intentarlo, si da 8 ganaste`;
    }

    dadoUno.src= "http://tudai1-1.alumnos.exa.unicen.edu.ar/web-1/material/archivos/dado" + valorDadoUno + ".png";
    dadoDos.src = "http://tudai1-1.alumnos.exa.unicen.edu.ar/web-1/material/archivos/dado" + valorDadoDos + ".png";
};


  function mensajeCategoria(intentos) {
    if (intentos == 1) {
      return "Eres lo mejor de lo mejor, lo hiciste en un intento!";
    } else if (intentos < 5) {
      return "Excelente, lo hiciste en menos de 5 intentos.";
    } else if (intentos < 10) {
      return "Muy bien, lo hiciste en menos de 10 intentos.";
    } else if (intentos < 20) {
      return "Bien, lo hiciste en menos de 20 intentos.";
    } else {
      return "Sigue intentando, seguro la suerte te sonríe pronto.";
    }
  }
  

