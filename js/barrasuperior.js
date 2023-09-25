function enviar_barra() {
    
    let enviar = document.querySelector(".barra_superior")

    enviar.innerHTML = `
    
        <header>
            <p class="p1h">J</p>
            <img src="./img/me-gusta.png" alt="">
            <p class="ph2">P</p>
        </header>
    `;

}

enviar_barra();