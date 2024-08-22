// script.js


/*
totalTime: La variable totalTime define el tiempo inicial (5 minutos en este ejemplo).
updateDisplay(): Esta función actualiza los minutos y segundos en la pantalla.
startTimer(): Inicia el temporizador y actualiza la pantalla cada segundo.
pauseTimer(): Pausa el temporizador, pero permite retomarlo desde el tiempo en que se pausó.
resetTimer(): Reinicia el temporizador a los 5 minutos.
*/
let countdown;
const timerDisplay = document.querySelector('#timer');
const minutesDisplay = document.querySelector('#minutes');
const secondsDisplay = document.querySelector('#seconds');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

let totalTime = 300; // Tiempo en segundos (5 minutos)
let isPaused = false;

function updateDisplay() {
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
}

function startTimer() {
    if (!isPaused) {
        totalTime = 300; // Reiniciar el tiempo si no está pausado
    }
    isPaused = false;

    countdown = setInterval(() => {
        if (totalTime <= 0) {
            clearInterval(countdown);
            alert('¡El tiempo ha terminado!');
            return;
        }
        totalTime--;
        updateDisplay();
    }, 1000);
}

function pauseTimer() {
    clearInterval(countdown);
    isPaused = true;
}

function resetTimer() {
    clearInterval(countdown);
    totalTime = 300;
    isPaused = false;
    updateDisplay();
}

// Event listeners para los botones
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

// Inicializar la pantalla
updateDisplay();
