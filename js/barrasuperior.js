function enviar_barra() {
    
    let enviar = document.querySelector(".barra_superior")

    enviar.innerHTML = `
    
        <header>
            <p class="p1h">»»——</p>
            <a class="toggle-btn" onclick="toggleSidebar()" href="./index.html"><img src="./img/me-gusta.png" alt=""></a>
            <p class="p2h">——««</p>
        </header>
    `;

}

enviar_barra();