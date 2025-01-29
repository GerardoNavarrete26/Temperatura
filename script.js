function convertirTemperatura() {
    let inputField = document.getElementById("celsius");
    let celsius = inputField.value.trim();
    let resultadoDiv = document.getElementById("resultado");
    let mercury = document.getElementById("mercury");

    // Si el input está vacío, ocultar el resultado y resetear el termómetro
    if (celsius === "") {
        resultadoDiv.style.visibility = "hidden";
        mercury.style.height = "0%";
        return;
    }

    // Convertir el input a número
    let temperatura = Number(celsius);

    // Validamos si es un número
    if (isNaN(temperatura)) {
        alert("❌ Error: Por favor solo puedes ingresar números.");
        inputField.value = "";  // Borra el input
        resultadoDiv.style.visibility = "hidden";
        mercury.style.height = "0%";
        return;
    }

    // Fórmulas de conversión
    let fahrenheit = (temperatura * 9/5) + 32;
    let kelvin = temperatura + 273.15;

    // Mostramos el resultado en el DOM
    resultadoDiv.innerHTML = 
        `🌡️ Grados Kelvin: <strong>${kelvin.toFixed(2)}</strong><br>
         🔥 Grados Fahrenheit: <strong>${fahrenheit.toFixed(2)}</strong>`;
    
    resultadoDiv.style.visibility = "visible"; // Mostrar el resultado

    // Ajustamos la altura del mercurio en base a la temperatura (0C = 0%, 100C = 100%)
    let altura = Math.max(0, Math.min(100, (temperatura / 100) * 100));
    mercury.style.height = altura + "%";
}
