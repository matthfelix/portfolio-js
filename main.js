document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('show');
    }, index * 150);
  });
});

// Seleciona todos os cards
const cards = document.querySelectorAll('.card');

// Função para verificar se o card está visível
function mostrarCards() {
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < triggerBottom) {
      card.classList.add('show');
    }
  });
}

// Evento de scroll
window.addEventListener('scroll', mostrarCards);

// Inicializa para já mostrar cards que estão visíveis ao carregar
mostrarCards();
