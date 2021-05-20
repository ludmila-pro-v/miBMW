const moreElem = document.querySelector('.more');
const modalElem = document.querySelector('.modal');
console.log('moreElem: ', moreElem);
const moreElems = document.querySelectorAll('.more');
console.log('moreElems: ', moreElems);



const openModal = () => {
  modalElem.classList.remove('hidden');
};

const closeModal = () => {
  modalElem.classList.add('hidden');
};

// moreElem.addEventListener('click', openModal);

moreElems.forEach(item => {
  item.addEventListener('click', openModal);
});

modalElem.addEventListener('click', (event) => {
  console.log(event.target);
  const target = event.target;

  if (target.classList.contains('overlay') ||
    target.classList.contains('modal__close')) {
    closeModal();
  }
});