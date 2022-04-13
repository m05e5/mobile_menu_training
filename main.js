const modalDisplay = () => {
  const modal = document.querySelector('.nav_modal-background');
  const opener = document.querySelector('#nav_modal-displayer');
  const closer = document.querySelector('.X');
  const modalNavLink = document.querySelectorAll('.modal_nav_link');

  function closeModal() {
    modal.style.visibility = 'hidden';
  }

  function callp() {
    modal.style.visibility = 'visible';
  }
  modalNavLink.forEach((link) => {
    link.onclick = closeModal;
  });
  opener.onclick = callp;
  closer.onclick = closeModal;
};

modalDisplay();