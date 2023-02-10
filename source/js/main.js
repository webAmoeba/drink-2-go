const menu = document.querySelector('.main-header__navigation');
const menuToggler = document.querySelector('.main-header__menu-toggler');

menu.classList.add('main-header__navigation--hidden');
menu.classList.add('main-header__navigation--with-js');

menuToggler.classList.remove('main-header__menu-toggler--hidden');
menuToggler.classList.add('main-header__menu-toggler--closed');

menuToggler.addEventListener('click', () => {
  if (menu.classList.contains('main-header__navigation--hidden')) {
    menu.classList.remove('main-header__navigation--hidden');
    menuToggler.classList.remove('main-header__menu-toggler--closed');
    menuToggler.classList.add('main-header__menu-toggler--opened');
  } else {
    menu.classList.add('main-header__navigation--hidden');
    menuToggler.classList.remove('main-header__menu-toggler--opened');
    menuToggler.classList.add('main-header__menu-toggler--closed');
  }
});
