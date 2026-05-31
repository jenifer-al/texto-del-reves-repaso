
// --- 1. LÓGICA PURA (Independiente) ---
// El parámetro 'texto' es la entrada. La función no sabe de dónde viene,
// solo sabe que debe procesar lo que reciba en esa variable.
const invertirTexto = (texto) => texto.split('').reverse().join('');

// --- 2. LÓGICA DE INTERFAZ (Puente) ---
document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("calcular");
    const input = document.getElementById("texto");
    const resultado = document.getElementById("resultado");

    boton.addEventListener("click", () => {
        // Obtenemos el dato real del input
        const valorDelInput = input.value;
        
        // Aquí le enviamos el dato a la función a través del parámetro
        resultado.textContent = invertirTexto(valorDelInput);
    });
});


 