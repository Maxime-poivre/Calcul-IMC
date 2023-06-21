function calculateBMI() {
    var TailleInput = document.getElementById("Taille");
    var poidsInput = document.getElementById("poids");
    var resultDiv = document.getElementById("result");

    var Taille = parseFloat(TailleInput.value);
    var poids = parseFloat(poidsInput.value);

    if (isNaN(Taille) || isNaN(poids)) {
    resultDiv.innerHTML = "Veuillez entrer une taille et un poids valides.";
    return;
    }

    var bmi = poids / ((Taille / 100) ** 2);
    var category = "";

    if (bmi < 18.5) {
    category = "Maigreur";
    } else if (bmi < 25) {
    category = "Corpulence normale";
    } else if (bmi < 30) {
    category = "Surpoids";
    } else if (bmi < 35 ){
    category = "Obésité modérée";
    } else if (bmi < 40 ){ 
    category = "Obésité élevé";
    } else { 
    category = "Obésite morbide";
    }

    resultDiv.innerHTML = "Votre IMC est de " + bmi.toFixed(2) + " (" + category + ")";
}