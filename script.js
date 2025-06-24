// 1. App Configuration
const students = { "MJBS7X": "Bacuilima Sanmartin, Maria Jose", "PSMC2R": "Castro Mogrovejo, Paul Santiago", "SBYL9P": "Bacuilima Yunga, Saul Blas", "KALA5T": "Lucero Arcentales, Kevin Alexander", "AMBC1E": "Barbecho Cardenas, Angela Mercedes", "AFDP8W": "Delgado Pesantez, Andrea Fernanda", "NYCJ4B": "Cobos Criollo, Nelly Yessenia", "RESK0G": "Santander Castillo, Ruth Estefany", "JFBB6D": "Barros Becerra, Jhoana Fernanda", "ELBM3F": "Buele Morocho, Evelin Lisseth", "AGUC8H": "Cueva Urgiles, Anngye Gricelle", "JEPA1Z": "Peña Aucapiña, Johanna Estefania", "JMGG5V": "Espinosa Guaman, Jennifer Michelle", "SLMF2C": "Moscoso Farfan, Samantha Lizbeth", "EMIR9A": "Ibarra Reyes, Eleanor Raven", "MLSJ4Q": "Siguencia Lopez, Marilyn Lisseth", "ARJR7N": "Jimbo Rodriguez, Arianna Carolina", "MRPO0M": "Peñafiel Orellana, Mariuxi Renata", "MIMP6U": "Mayllazhungo Pomaquiza, Maria Ines", "TSTO3Y": "Tacuri Ochoa, Thalia Soledad", "KPMF1L": "Morocho Farez, Katherine Paulina", "MAZA5X": "Zhinin Alvarracin, Mariana Amparito", "MDQY7S": "Quito Yautibug, Marisol Dayanna", "R00000": "Revisor, Externo", "DFYR9P": "Yupa Romero, Diego Fernando" };

const questions = [
    {
        time: 41,
        text: "Cuando la primera bola del péndulo de Newton golpea a las demás, ¿qué efecto principal demuestra la última bola al moverse?",
        choices: ["Cambia su color por el fuerte impacto", "Aumenta su tamaño por la energía recibida", "Su rapidez cambia de cero a un valor mayor", "Mantiene su forma sin ninguna alteración"],
        correctAnswerIndex: 2,
        answered: false,
        explanation: "La fuerza del choque se transfiere a la última bola. Esta, que estaba quieta (rapidez cero), empieza a moverse, demostrando un claro cambio de rapidez."
    },
    {
        time: 50,
        text: "Si el hombre logra mover el coche que estaba quieto, ¿qué cambio inmediato provoca la fuerza de su empuje?",
        choices: ["Cambia la forma de las llantas del coche", "Altera el color de la pintura del vehículo", "Modifica la rapidez del vehículo en reposo", "Aumenta el peso total del coche al empujar"],
        correctAnswerIndex: 2,
        answered: false,
        explanation: "El coche estaba en reposo (rapidez cero). La fuerza del empuje lo pone en movimiento, lo cual es un cambio directo y fundamental en su rapidez."
    },
    {
        time: 52,
        text: "Al lanzar sus birretes al aire, ¿qué controlan principalmente los estudiantes con la fuerza de sus brazos?",
        choices: ["La forma que tendrán los birretes en el aire", "La dirección inicial de su movimiento", "El tiempo que los birretes van a flotar", "El color que tendrán los birretes al caer"],
        correctAnswerIndex: 1,
        answered: false,
        explanation: "La fuerza aplicada al lanzar un objeto no solo le da velocidad, sino que también determina la dirección inicial en la que comenzará a moverse."
    },
    {
        time: 67,
        text: "Cuando un imán atrae a otro sin tocarlo, ¿qué efecto tiene su fuerza sobre el objeto que se mueve?",
        choices: ["Aumenta la temperatura de los dos imanes", "Cambia la forma del imán que es atraído", "Cambia la rapidez y dirección del otro imán", "Disminuye el peso del imán que se mueve"],
        correctAnswerIndex: 2,
        answered: false,
        explanation: "La fuerza a distancia del imán hace que el otro objeto, que estaba quieto, comience a moverse (cambio de rapidez) hacia él (cambio de dirección)."
    },
    {
        time: 73,
        text: "Si un futbolista patea un balón con mucha fuerza, ¿qué efecto, además de darle rapidez, es fundamental?",
        choices: ["El balón cambia de forma permanentemente", "El balón se vuelve más pesado al volar", "La fuerza determina la dirección del balón", "El balón cambia de color por la velocidad"],
        correctAnswerIndex: 2,
        answered: false,
        explanation: "La patada no solo impulsa el balón, sino que la dirección en la que se aplica la fuerza es crucial para apuntar y dirigir el tiro hacia la portería."
    },
    {
        time: 115,
        text: "La fuerza que aplica el niño al lanzar el avión de papel, ¿qué determina principalmente en el vuelo del avión?",
        choices: ["La forma que tendrá el avión en el aire", "El tiempo exacto que durará su vuelo", "Su rapidez y dirección al iniciar el vuelo", "El sonido que hará el avión al volar"],
        correctAnswerIndex: 2,
        answered: false,
        explanation: "El impulso inicial del lanzamiento establece tanto la velocidad como la trayectoria con la que el avión de papel comienza su planeo por el aire."
    },
    {
        time: 121,
        text: "La pelota de tenis ya estaba en movimiento. ¿Cuál es el cambio más importante que la fuerza de la raqueta le provoca?",
        choices: ["Aumentar su masa para que pese más", "Cambiar bruscamente su dirección", "Hacer que la pelota se detenga", "Cambiar la forma de la pelota"],
        correctAnswerIndex: 1,
        answered: false,
        explanation: "La pelota viene hacia la jugadora y la fuerza de la raqueta la hace rebotar y moverse en la dirección opuesta, lo que es un cambio de dirección."
    },
    {
        time: 123,
        text: "Al atrapar el disco, la fuerza de la boca del perro causa un cambio drástico en su movimiento. ¿Cuál es ese cambio?",
        choices: ["Reduce su rapidez hasta detenerlo", "Altera la dirección del disco al cielo", "Cambia la forma permanente del disco", "Aumenta la velocidad con la que volaba"],
        correctAnswerIndex: 0,
        answered: false,
        explanation: "El disco estaba volando con una rapidez determinada. La fuerza de la mordida se opone a ese movimiento hasta que su rapidez se vuelve cero."
    },
    {
        time: 156,
        text: "Si una balanza está en equilibrio y no se mueve, ¿qué nos dice esto sobre los efectos de las fuerzas que actúan sobre ella?",
        choices: ["La forma de la balanza está cambiando", "No hay fuerzas actuando sobre la balanza", "No hay cambio en su rapidez ni dirección", "Pronto se moverá hacia arriba por sí sola"],
        correctAnswerIndex: 2,
        answered: false,
        explanation: "Cuando las fuerzas se anulan entre sí, no producen ningún cambio en el estado de movimiento. Si está quieto, permanece quieto."
    },
    {
        time: 188,
        text: "Considerando todos los ejemplos del video, ¿cuál es la mejor conclusión sobre los efectos de aplicar una fuerza?",
        choices: ["Las fuerzas siempre hacen que las cosas vayan más rápido", "El único efecto de una fuerza es cambiar la forma", "Una fuerza puede cambiar cómo se mueve o se ve un objeto", "Las fuerzas solo actúan si los objetos se tocan"],
        correctAnswerIndex: 2,
        answered: false,
        explanation: "El video demuestra con varios ejemplos que una fuerza puede cambiar la rapidez, la dirección del movimiento o incluso la forma de un objeto."
    }
];

// ===================================================================
// == CONTENIDO EDITABLE DEL ORGANIZADOR GRÁFICO ==
// ===================================================================

const organizerData = [
    { id: 'item-1', text: 'Forma', correctZone: 'topic-1' },
    { id: 'item-2', text: 'Alterar la estructura física de un objeto', correctZone: 'concept-1' },
    { id: 'item-3', text: 'Una gota de agua adquiere su figura', correctZone: 'application-1' },
    { id: 'item-4', text: 'Rapidez', correctZone: 'topic-2' },
    { id: 'item-5', text: 'Aumentar o disminuir la velocidad de algo', correctZone: 'concept-2' },
    { id: 'item-6', text: 'El perro detiene el disco volador', correctZone: 'application-2' },
    { id: 'item-7', text: 'Dirección', correctZone: 'topic-3' },
    { id: 'item-8', text: 'Cambiar la trayectoria o el camino de un objeto', correctZone: 'concept-3' },
    { id: 'item-9', text: 'La raqueta devuelve la pelota de tenis', correctZone: 'application-3' },
];

const organizerHints = {
    'hint-topic-1': "Soy el efecto que aplasta, estira o rompe.",
    'hint-concept-1': "¿Qué significa alterar la apariencia física de un objeto?",
    'hint-application-1': "Ejemplo: ¿Qué pasaría si pateas una bola de plastilina?",
    'hint-topic-2': "Soy el efecto que acelera o frena.",
    'hint-concept-2': "¿Qué significa hacer que algo se mueva más rápido o más lento?",
    'hint-application-2': "Ejemplo: ¿Qué le pasa al disco cuando el perro lo atrapa?",
    'hint-topic-3': "Soy el efecto que desvía o cambia el rumbo.",
    'hint-concept-3': "¿Qué significa alterar la trayectoria o el camino de un objeto?",
    'hint-application-3': "Ejemplo: ¿Qué le pasa a la pelota de tenis al ser golpeada?",
};

// ===================================================================
// == FIN DEL CONTENIDO EDITABLE ==
// ===================================================================


// 2. State Management
let timeChecker;
let quizScore = 0;
let organizerScore = 0;
let currentStudent = "";
let answeredCount = 0;
let questionTimer;
let studentCode = "";
let userAnswers = [];

// 3. DOM Elements
const screens = { splash: document.getElementById('splash-screen'), disclaimer: document.getElementById('disclaimer-modal'), login: document.getElementById('login-screen'), welcome: document.getElementById('welcome-screen'), video: document.getElementById('video-activity'), organizer: document.getElementById('organizer-screen') };
const video = document.getElementById('interactive-video');
const playOverlay = document.getElementById('play-overlay');
const questionModal = document.getElementById('question-modal');
const questionText = document.getElementById('question-text');
const choicesContainer = document.getElementById('choices-container');
const feedbackText = document.getElementById('feedback-text');
const scoreDisplay = document.getElementById('score');
const progressIndicator = document.getElementById('progress-indicator');
const progressBar = document.getElementById('progress-bar');
const questionTime = document.getElementById('question-time');
const questionNumber = document.getElementById('question-number');
const studentCodeInput = document.getElementById('student-code');
const loginError = document.getElementById('login-error');
const welcomeTitle = document.getElementById('welcome-title');
const studentName = document.getElementById('student-name');
const currentStudentName = document.getElementById('current-student-name');
const pauseModal = document.getElementById('pause-modal');
const resultsModal = document.getElementById('results-modal');
const finalScoreQuiz = document.getElementById('final-score-quiz');
const finalScoreOrganizer = document.getElementById('final-score-organizer');
const resultCodeElement = document.getElementById('result-code');
const finishButton = document.getElementById('finish-button');
const monitoringModal = document.getElementById('monitoring-modal');
const monitoringStudentName = document.getElementById('monitoring-student-name');
const itemBank = document.getElementById('item-bank');

// 4. Screen Management
function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}
function showModal(modalEl) {
    const modals = [pauseModal, questionModal, resultsModal, monitoringModal];
    modals.forEach(m => m.classList.remove('active'));
    if (modalEl) modalEl.classList.add('active');
}

// 5. App Initialization
document.addEventListener('DOMContentLoaded', () => {
    video.load();
    showScreen('splash');
    setTimeout(() => showScreen('disclaimer'), 4000);
});

// 6. Event Listeners
document.getElementById('accept-button').addEventListener('click', () => showScreen('login'));
document.getElementById('reject-button').addEventListener('click', () => { showScreen('splash'); setTimeout(() => showScreen('disclaimer'), 4000); });
document.getElementById('login-button').addEventListener('click', handleLogin);
studentCodeInput.addEventListener('keyup', (e) => { if (e.key === 'Enter') handleLogin(); });
document.getElementById('start-activity-button').addEventListener('click', () => {
    const lastName = currentStudent.split(',')[0];
    monitoringStudentName.textContent = lastName;
    showModal(monitoringModal);
});
document.getElementById('understood-button').addEventListener('click', startActivity);
playOverlay.addEventListener('click', () => video.play());
video.addEventListener('play', () => { playOverlay.classList.add('hidden'); startTimeChecker(); });
video.addEventListener('pause', () => stopTimeChecker());
video.addEventListener('ended', () => {
    stopTimeChecker();
    if (answeredCount === questions.length) {
        startOrganizerActivity();
    }
});
document.getElementById('pause-button').addEventListener('click', () => { video.pause(); showModal(pauseModal); });
document.getElementById('resume-button').addEventListener('click', () => { showModal(null); video.play(); });
document.getElementById('surrender-button').addEventListener('click', () => { showModal(null); resetApp(); showScreen('login'); });
document.getElementById('finish-organizer-button').addEventListener('click', finishOrganizer);
finishButton.addEventListener('click', () => { showModal(null); resetApp(); showScreen('login'); });
document.getElementById('play-button').addEventListener('click', () => video.play());

// 7. Core Logic Functions
function handleLogin() {
    const code = studentCodeInput.value.trim().toUpperCase();
    if (students[code]) {
        currentStudent = students[code];
        studentCode = code;
        loginError.classList.add('hidden');
        const lastName = currentStudent.split(',')[0];
        welcomeTitle.textContent = `¡Bienvenid@, ${lastName}!`;
        studentName.textContent = lastName;
        currentStudentName.textContent = lastName;
        showScreen('welcome');
    } else {
        loginError.classList.remove('hidden');
    }
}

function startActivity() {
    showModal(null);
    resetQuiz();
    showScreen('video');
    document.documentElement.requestFullscreen().catch(err => {
        console.log(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
    });
}

function resetApp() {
    quizScore = 0;
    organizerScore = 0;
    answeredCount = 0;
    scoreDisplay.textContent = quizScore;
    progressIndicator.textContent = `0/${questions.length}`;
    progressBar.style.width = '0%';
    questions.forEach(q => q.answered = false);
    userAnswers = [];
    video.currentTime = 0;
    video.load();
}
const resetQuiz = resetApp;

function startTimeChecker() {
    if (timeChecker) return;
    timeChecker = setInterval(() => {
        const currentTime = Math.floor(video.currentTime);
        const question = questions.find(q => !q.answered && currentTime >= q.time);
        if (question) {
            video.pause();
            question.answered = true;
            showQuestionModal(question);
        }
    }, 500);
}

function stopTimeChecker() {
    clearInterval(timeChecker);
    timeChecker = null;
}

function showQuestionModal(question) {
    const questionIndex = questions.findIndex(q => q === question);
    questionNumber.textContent = questionIndex + 1;
    let timeLeft = 60;
    questionTime.textContent = "01:00";
    if (questionTimer) clearInterval(questionTimer);
    questionTimer = setInterval(() => {
        timeLeft--;
        questionTime.textContent = `00:${timeLeft.toString().padStart(2, '0')}`;
        if (timeLeft <= 0) {
            clearInterval(questionTimer);
            handleAnswer(-1, question.correctAnswerIndex, questionIndex);
        }
    }, 1000);
    questionText.textContent = question.text;
    choicesContainer.innerHTML = '';
    question.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.className = 'answer-option';
        button.onclick = (event) => {
            const rect = event.target.getBoundingClientRect();
            const x = (rect.left + rect.right) / 2 / window.innerWidth;
            const y = (rect.top + rect.bottom) / 2 / window.innerHeight;
            confetti({
                particleCount: 50,
                spread: 70,
                origin: { x, y },
                scalar: 0.8,
                zIndex: 101
            });
            clearInterval(questionTimer);
            handleAnswer(index, question.correctAnswerIndex, questionIndex);
        };
        choicesContainer.appendChild(button);
    });
    showModal(questionModal);
}

function handleAnswer(selectedIndex, correctIndex, questionIndex) {
    answeredCount++;
    progressIndicator.textContent = `${answeredCount}/${questions.length}`;
    progressBar.style.width = `${(answeredCount / questions.length) * 100}%`;
    userAnswers.push({ question: questionIndex, selected: selectedIndex, correct: selectedIndex === correctIndex });
    
    const buttons = choicesContainer.querySelectorAll('button');
    buttons.forEach(button => button.disabled = true);

    if (selectedIndex === correctIndex) {
        quizScore++;
        scoreDisplay.textContent = quizScore;
        feedbackText.textContent = "¡Respuesta Correcta!";
        feedbackText.className = "text-center mt-6 font-medium h-8 text-lg text-green-400";
        if (selectedIndex >= 0) buttons[selectedIndex].classList.add('correct-answer-style');
    } else {
        feedbackText.textContent = "Respuesta Incorrecta";
        feedbackText.className = "text-center mt-6 font-medium h-8 text-lg text-red-400";
        if (selectedIndex >= 0) buttons[selectedIndex].classList.add('incorrect-answer-style');
        buttons[correctIndex].classList.add('correct-answer-style');
    }

    setTimeout(() => {
        showModal(null);
        feedbackText.textContent = '';
        if (answeredCount === questions.length) {
            startOrganizerActivity();
        } else {
            video.play();
        }
    }, 2000);
}

// 8. Organizer Logic
function startOrganizerActivity() {
    setupOrganizer();
    showScreen('organizer');
}

function setupOrganizer() {
    // Inyectar los acertijos en el HTML
    for (const hintId in organizerHints) {
        const element = document.getElementById(hintId);
        if (element) {
            element.textContent = organizerHints[hintId];
        }
    }

    // Limpiar y crear las tarjetas arrastrables
    itemBank.innerHTML = '';
    document.querySelectorAll('.drop-zone .draggable-item').forEach(item => item.remove());
    const shuffledItems = [...organizerData].sort(() => Math.random() - 0.5);
    shuffledItems.forEach(item => {
        const div = document.createElement('div');
        div.id = item.id;
        div.className = 'draggable-item';
        div.textContent = item.text;
        div.draggable = true;
        div.dataset.correctZone = item.correctZone;
        div.addEventListener('dragstart', dragStart);
        itemBank.appendChild(div);
    });

    // Añadir listeners a las zonas de destino
    document.querySelectorAll('.drop-zone').forEach(zone => {
        zone.addEventListener('dragover', dragOver);
        zone.addEventListener('dragleave', dragLeave);
        zone.addEventListener('drop', drop);
    });
}

function dragStart(e) { e.dataTransfer.setData('text/plain', e.target.id); }
function dragOver(e) { e.preventDefault(); e.currentTarget.classList.add('drag-over'); }
function dragLeave(e) { e.currentTarget.classList.remove('drag-over'); }

function drop(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);
    const dropZone = e.currentTarget;
    
    // Si la zona ya tiene un item, lo devuelve al banco
    if (dropZone.querySelector('.draggable-item')) {
        itemBank.appendChild(dropZone.querySelector('.draggable-item'));
    }
    dropZone.appendChild(draggable);
    // Ocultar la etiqueta del acertijo cuando se coloca una tarjeta
    const label = dropZone.querySelector('.drop-zone-label');
    if (label) label.style.display = 'none';
}

function finishOrganizer() {
    organizerScore = 0;
    document.querySelectorAll('.drop-zone').forEach(zone => {
        const item = zone.querySelector('.draggable-item');
        if (item && item.dataset.correctZone === zone.dataset.zoneId) {
            organizerScore++;
        }
    });
    showFinalResults();
}

// 9. Final Results
function showFinalResults() {
    finalScoreQuiz.textContent = quizScore;
    finalScoreOrganizer.textContent = organizerScore;
    resultCodeElement.textContent = generateResultCode();
    
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }
    
    showModal(resultsModal);

    // Confetti rain effect
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 101 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) {
            return clearInterval(interval);
        }
        const particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}

/**
 * OFUSCACIÓN DE CÓDIGO DE RESULTADO
 * Este método genera un código no legible para el humano pero decodificable por la app de revisión.
 * 1. Crea una cadena base: [StudentCode][QuizScoreHex][OrganizerScoreHex][AnswerString]
 *    - Ejemplo: MJBS7XA9ABCDABCDAB (18 caracteres)
 * 2. Aplica un cifrado César (shift) a cada caracter para ofuscarlo.
 *    - Ejemplo: PKGUAYDCHEFGHEFGHE (18 caracteres)
 */
function generateResultCode() {
    // Función auxiliar para desplazar caracteres (Cifrado César)
    const shiftChar = (char, amount) => {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const index = alphabet.indexOf(char.toUpperCase());
        if (index === -1) return char; // No cambiar si no está en el alfabeto
        const newIndex = (index + amount + alphabet.length) % alphabet.length;
        return alphabet[newIndex];
    };

    // 1. Construir la cadena de respuestas
    let answerCode = "";
    for (let i = 0; i < questions.length; i++) {
        const answer = userAnswers.find(a => a.question === i);
        if (!answer || answer.selected === -1) {
            answerCode += "X"; // Timeout o no respondida
        } else {
            answerCode += String.fromCharCode(65 + answer.selected); // A, B, C, D
        }
    }

    // 2. Construir la cadena base sin ofuscar
    const quizScoreHex = quizScore.toString(16).toUpperCase(); // 10 -> A
    const organizerScoreHex = organizerScore.toString(16).toUpperCase(); // 9 -> 9
    const rawCode = `${studentCode}${quizScoreHex}${organizerScoreHex}${answerCode}`;

    // 3. Ofuscar la cadena completa aplicando un shift de +5
    const shiftAmount = 5;
    let obfuscatedCode = "";
    for (const char of rawCode) {
        obfuscatedCode += shiftChar(char, shiftAmount);
    }
    
    // El código final tendrá 18 caracteres.
    return obfuscatedCode;
}