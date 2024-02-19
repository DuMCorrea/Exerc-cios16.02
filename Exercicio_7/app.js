document.getElementById("imcForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);
    var sexo = document.getElementById("sexo").value;

    var imc = peso / (altura * altura);

    var resultado = "Seu IMC é " + imc.toFixed(2) + ". ";
    
    if (sexo === "masculino") {
        if (imc < 20.7) {
            resultado += "Abaixo do peso.";
        } else if (imc >= 20.7 && imc < 26.4) {
            resultado += "Peso ideal.";
        } else {
            resultado += "Acima do peso.";
        }
    } else {
        if (imc < 19.1) {
            resultado += "Abaixo do peso.";
        } else if (imc >= 19.1 && imc < 25.8) {
            resultado += "Peso ideal.";
        } else {
            resultado += "Acima do peso.";
        }
    }

    document.getElementById("resultado").innerText = resultado;
});