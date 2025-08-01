const items = document.querySelectorAll('.acordeon .item');

  items.forEach(item => {
    const pregunta = item.querySelector('.pregunta');
    pregunta.addEventListener('click', () => {
      item.classList.toggle('activa');
    });
  });



const links = document.querySelectorAll('.CajaDerecha a');
  const currentURL = window.location.pathname;

  links.forEach(link => {
    if (link.getAttribute('href') === currentURL) {
      link.classList.add('activo');
    }
  });


// MENU HAMBURGUESA

const menuToggle = document.getElementById('menu-toggle');
const navbarMenu = document.getElementById('navbar-menu');

menuToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
  menuToggle.classList.toggle('active');
});
