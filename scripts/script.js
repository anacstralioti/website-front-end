// Captura o formulário
const formulario = document.getElementById('formulario');

// Adiciona um event listener para o evento de submissão
formulario.addEventListener('submit', function(event) {

    // Exibe o alerta
    alert('Agradecemos o contato! Seu pedido de informações foi recebido com sucesso. Entraremos em contato em breve pelo e-mail fornecido.');
    
    // Limpa os campos do formulário
    formulario.reset();
});