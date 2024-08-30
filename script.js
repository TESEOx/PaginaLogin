
const wrapper = document.querySelector('.wrapper');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

// Abre el popup cuando se hace clic en el botón de Login
btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

// Cierra el popup cuando se hace clic en el icono de cierre
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});
