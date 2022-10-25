const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
    document.body.classList.toggle('clear')
})

console.log('Página do Carrinho!')

const buyButton = document.getElementById('buy-button')
const cartForm = document.getElementById('cart-form')

const addTicket = document.getElementById('add-ticket')
const removeTicket = document.getElementById('remove-ticket')
const ticket = document.getElementById('ticket')

const ticketPrice = document.getElementById('ticket-price')

addTicket.addEventListener("click", (e) => {
    e.preventDefault();
    console.log('Adicionando ticket')
    ticket.innerText = parseInt(ticket.innerText)+1
    ticketPrice.innerText = parseInt(ticket.innerText)*90
})

removeTicket.addEventListener("click", (e) => {
    e.preventDefault();
    console.log('Removendo ticket')
    if(parseInt(ticket.innerText) !== 1) {
        ticket.innerText = parseInt(ticket.innerText)-1
        ticketPrice.innerText = parseInt(ticket.innerText)*90
    }
})

cartForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = cartForm.nome.value;
    const email = cartForm.email.value;
    const quantityTickets = ticket.innerText;

    window.localStorage.setItem('nome', nome)
    window.localStorage.setItem('email', email)
    window.localStorage.setItem('quantityTickets', quantityTickets)
    window.location.href = "finalisacao.html"

    console.log('Nome: ', nome)
    console.log('Email: ', email)
    console.log('Tickets: ', ticket.innerText)
})
