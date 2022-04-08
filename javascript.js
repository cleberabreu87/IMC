function validar() {
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    if (!peso || !altura) {
        alert("Preencher os campos corretamente");
    }
    else {
        const imc = peso/(altura^2);
        document.getElementById("resultado").value = "Seu IMC é " + imc.toFixed(1);
    }
}