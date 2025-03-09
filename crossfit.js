
// Função para o formulário de contato
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Obrigado por entrar em contato, ${name}!`);
        // Aqui você pode adicionar a lógica para enviar o formulário
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

// Função para adicionar produtos ao carrinho
let cart = [];
let total = 0;

document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.parentElement.querySelector('h3').innerText;
        const productPrice = parseFloat(this.parentElement.querySelector('.price').innerText.replace('R$ ', '').replace(',', '.'));
        
        cart.push({ name: productName, price: productPrice });
        total += productPrice;

        alert(`Você adicionou ${productName} ao carrinho!`);
    });
});