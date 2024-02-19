function calcularFibonacci(numero) {
    var fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
  
    for (var i = 2; i <= numero; i++) {
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
  
    return fibonacci.slice(0, numero + 1);
  }
  
  document.getElementById("calcular-btn").addEventListener("click", function() {
    var numero = parseInt(document.getElementById("numero").value);
  
    if (isNaN(numero) || numero < 0) {
      alert("Por favor, insira um número inteiro não negativo.");
      return;
    }
  
    var resultado = calcularFibonacci(numero);
  
    document.getElementById("resultado").textContent = "Sequência de Fibonacci até " + numero + ": " + resultado.join(", ");
  });