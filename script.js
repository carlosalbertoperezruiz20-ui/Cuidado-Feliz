// Scroll suave
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Validación de formulario
document.getElementById('formulario').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  if (!email.includes('@')) {
    alert('Por favor ingresa un correo válido.');
    return;
  }
  window.open(`mailto:contacto@clinicaveterinaria.com?subject=Consulta&body=${document.getElementById('mensaje').value}`);
  const modal = new bootstrap.Modal(document.getElementById('modalConfirmacion'));
  modal.show();
});

// Carrusel de clientes
const clientes = [
  { nombre: "Juan Pérez", comentario: "Excelente atención 🐶", img: "https://randomuser.me/api/portraits/men/1.jpg" },
  { nombre: "María Gómez", comentario: "Mi gato está feliz 😻", img: "https://randomuser.me/api/portraits/women/2.jpg" },
  { nombre: "Luis Rodríguez", comentario: "Muy profesionales 👨‍⚕️", img: "https://randomuser.me/api/portraits/men/3.jpg" },
  { nombre: "Ana Torres", comentario: "Recomiendo 100% 🐾", img: "https://randomuser.me/api/portraits/women/4.jpg" },
  { nombre: "Carlos Díaz", comentario: "Ambiente limpio y seguro 🧼", img: "https://randomuser.me/api/portraits/men/5.jpg" },
  { nombre: "Laura Fernández", comentario: "Mi perrita fue muy bien cuidada 🐕", img: "https://randomuser.me/api/portraits/women/6.jpg" },
  { nombre: "Pedro Martínez", comentario: "Atención rápida y amable 😊", img: "https://randomuser.me/api/portraits/men/7.jpg" },
  { nombre: "Sofía Herrera", comentario: "Volveré pronto 🐩", img: "https://randomuser.me/api/portraits/women/8.jpg" },
  { nombre: "José Ramírez", comentario: "Gracias por salvar a mi mascota 🙏", img: "https://randomuser.me/api/portraits/men/9.jpg" },
  { nombre: "Claudia Núñez", comentario: "Todo perfecto 💯", img: "https://randomuser.me/api/portraits/women/10.jpg" }
];

const carousel = document.getElementById('carouselClientes');
clientes.forEach(cliente => {
  const card = document.createElement('div');
  card.className = 'card text-center';
  card.innerHTML = `
    <img src="${cliente.img}" alt="${cliente.nombre}" />
    <h5 class="mt-2">${cliente.nombre}</h5>
    <p>${cliente.comentario}</p>
    <i class="fas fa-paw text-accent"></i>
  `;
  carousel.appendChild(card);
});

document.getElementById('prevBtn').addEventListener('click', () => {
  carousel.scrollBy({ left: -300, behavior: 'smooth' });
});

document.getElementById('nextBtn').addEventListener('click', () => {
  carousel.scrollBy({ left: 300, behavior: 'smooth' });
});