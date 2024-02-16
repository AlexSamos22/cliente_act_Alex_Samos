document.querySelectorAll("*").forEach(elemento => {

    elemento.addEventListener("click", (evento) => {
        alert(`${evento.currentTarget.tagName} lanzado por: ${evento.target.tagName}  por: ${evento.eventPhase === 1 ? "capture" : "bubbling"}`);
    });

    elemento.addEventListener("click", (evento) => {
        alert(`${evento.currentTarget.tagName} lanzado por: ${evento.target.tagName}  por: ${evento.eventPhase === 1 ? "capture" : "bubbling"}`);
    }, {capture: true});
});