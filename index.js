const cards = document.querySelectorAll('.card'); 
const radioButtons = document.querySelectorAll('input[name="offer"]');

cards.forEach((card) => {
  card.addEventListener('click', () => {
    cards.forEach((otherCard) => {
      const expandableContent = otherCard.querySelector('.expandable-content');
      expandableContent.style.display = 'none'; 
      
    }); 
    const expandableContent = card.querySelector('.expandable-content');
    if (expandableContent.style.display === 'none' || expandableContent.style.display === '') {
      expandableContent.style.display = 'block';  

    } else {
      expandableContent.style.display = 'none'; 
    }
  });
});   



radioButtons.forEach((radio) => {
  radio.addEventListener('change', (event) => { 
    cards.forEach((card) => {
      card.classList.remove('selected');
    });

    const selectedCard = event.target.closest('.card');
    selectedCard.classList.add('selected');
    const expandableContent = selectedCard.querySelector('.expandable-content');
    expandableContent.style.display = 'block';
  });
});


cards.forEach((card) => {
  const expandableContent = card.querySelector('.expandable-content');
  expandableContent.style.display = 'none';
});
