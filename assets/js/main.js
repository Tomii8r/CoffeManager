document.addEventListener("DOMContentLoaded", () => {
    const fechaInput = document.getElementById('fecha-auto');
    if (fechaInput) {
        fechaInput.value = new Date().toLocaleString('es-ES');
    }
});

function simularSubmit(event, mensaje) {
    event.preventDefault();
    alert(mensaje);
    event.target.reset();
    
    const fechaInput = document.getElementById('fecha-auto');
    if (fechaInput) {
        fechaInput.value = new Date().toLocaleString('es-ES');
    }
}