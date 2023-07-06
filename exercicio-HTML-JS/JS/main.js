function validarFormulario() {
    var campo_A = parseInt(document.getElementById('campo_A').value);
    var campo_B = parseInt(document.getElementById('campo_B').value);
    
    if (campo_B > campo_A) {
    alert("Formulário válido! Número B é maior que número A.");
    } else {
    alert("Formulário inválido! Número B deve ser maior que número A.");
    }
    
    return false;
}