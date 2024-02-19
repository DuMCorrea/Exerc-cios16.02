document.getElementById("calcular-btn").addEventListener("click", function() {
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);
    let nota4 = parseFloat(document.getElementById("nota4").value);
    let nota5 = parseFloat(document.getElementById("nota5").value);
    
    
      let media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
    
      let resultadoTexto;
    
      if (media < 5) {
        resultadoTexto = "Você foi mal, estude mais";
      } else if (media >= 5 && media < 7) {
        resultadoTexto = "Você quase conseguiu a média, estude mais";
      } else if (media === 7) {
        resultadoTexto = "Parabéns! Você atingiu a média, estude mais para se sobressair";
      } else if (media > 7 && media < 10) {
        resultadoTexto = "Parabéns! Você ficou acima da média, um ótimo resultado, mas ainda errou algumas questões. Estude mais";
      } else if (media === 10) {
        resultadoTexto = "Parabéns! Você acertou todas as questões de todas as provas, estude conteúdos além dos cobrados";
      }
    
      document.getElementById("resultado").textContent = resultadoTexto;
    });