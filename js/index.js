var passwordActual = ['sirena','SIRENA'];
var indication2 = $('.indicación2');

var alerts = [
    'Esto no es para cualquiera, no te preocupes, intentalo de nuevo! 😘',
    'Intentalo otra vez, no te rindas 💪',
    'Vamos... Dale, sé que lo sabes 🙃🙃',
    'Piensa un poquito más... 🫠',
    'Otra vez? Enserio...? 🤨',
    'Ni como ayudarte... 😕',
    'Está bien... Aunque sea una última vez piensalo... 🫡',
    'Nada enserio? 🫥',
    'Está bien, la contraseña es... sirena 🧜‍♀️'
];

var currentIndex = 0;

document.getElementById('confirmar1').addEventListener('click', function(e) {
    e.preventDefault();
    var pass = indication2.find('#pass1').val();
    if(passwordActual.includes(pass)) {
        indication2.find('.resultado').html('<p class="correcto">Correct</p>');
        $('body').addClass('página-transición');
        $('body').one('transitionend', function() {
            window.location.href = 'pagprincipal.html';
        });
    } else {
        indication2.find('.resultado').html('<p class="incorrecto">Incorrect</p>');
        alert(alerts[currentIndex]);
        currentIndex = (currentIndex + 1) % alerts.length;
    }

});

document.getElementById('confirmar1').addEventListener('click', indication2);