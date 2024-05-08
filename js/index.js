var passwordActual = 'sirena';
var indication2 = $('.indicación2');

indication2.on('click', '#confirmar1', function(e) {
    e.preventDefault();
    var pass = indication2.find('#pass1').val();
    if(pass === passwordActual) {
        indication2.find('.resultado').html('<p class="correcto">Correct</p>');
        $('body').addClass('página-transición');
        $('body').one('transitionend', function() {
            window.location.href = 'pagprincipal.html';
        });
    } else {
        indication2.find('.resultado').html('<p class="incorrecto">Incorrect</p>');
        alert('Password is incorrect!');
    }
});