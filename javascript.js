document.getElementById("consultaFormulario").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Su mensaje se envió correctamente!");
    this.reset();
});