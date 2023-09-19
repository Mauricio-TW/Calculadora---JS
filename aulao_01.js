/*
FEITO EM AULA
//variaveis
let num_01
let num_02
let escolha
var mais, menos, vezes, dividir

//Prompt de Comando
num_01 = parseFloat(prompt('Digite o Primeiro nº: ').replace(',', '.'))
num_02 = parseFloat(prompt('Digite o Segundo nº: ').replace(',', '.'))

escolha = prompt('Escolha sua Operação\n1 - ADIÇÃO\n2 - SUBTRAÇÃO\n3 - MULTIPLICAÇÃO\n4 - DIVISÃO')

//Switch
switch(escolha) {
    case '1':
      soma (num_01, num_02)
    break;
    case '2':
      subtracao (num_01, num_02)
    break;
    case '3':
      multiplicacao (num_01, num_02)
    break;
    case '4':
      divisao (num_01, num_02)
    break;
    default:
      window.alert(escolha+'Não é uma Opção Valida.')
  } 
  
  //Função
  function soma(numero_01, numero_02) {
    mais = numero_01+numero_02
    window.alert('Resultado Foi: '+mais)
  }
  function subtracao(numero_01, numero_02) {
    menos = numero_01-numero_02
    window.alert('Resultado Foi: '+menos)
  }
  function multiplicacao(numero_01, numero_02) {
    vezes = numero_01*numero_02
    window.alert('Resultado Foi: '+vezes)
  }
  function divisao(numero_01, numero_02) {
   dividir = numero_01/numero_02
    window.alert('Resultado Foi: '+dividir)
  }
*/

//JS Calculadora 
document.getElementById("calculadora-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const num_01 = parseFloat(document.getElementById("num_01").value.replace(",", "."));
    const num_02 = parseFloat(document.getElementById("num_02").value.replace(",", "."));
    const operation = document.getElementById("operacao").value;
    let resultado;
    
    switch (operation) {
        case "adicao":
            resultado = num_01 + num_02;
            break;
        case "subtracao":
            resultado = num_01 - num_02;
            break;
        case "multiplicacao":
            resultado = num_01 * num_02;
            break;
        case "divisao":
            if (num_02 === 0) {
                resultado = "Não é Possível Dividir por zero.";
            } else {
                resultado = num_01 / num_02;
            }
            break;
        default:
                resultado = "Escolha uma Operação Válida.";
    }
    
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado.fixed(2);
});