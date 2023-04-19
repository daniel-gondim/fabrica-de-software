    function validarFormulario() {
    // Obtém os valores dos campos do formulário
    var descricao = document.getElementById('local-descricao').value;
    var observacao = document.getElementById('local-observacao').value;

    // Verifica se algum dos campos está vazio
    if (descricao === '' || observacao === '') {
    alert('Por favor, preencha todos os campos.');
    return false;
}

    return true;
}