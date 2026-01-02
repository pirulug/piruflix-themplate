document.addEventListener('DOMContentLoaded', () => {

  // Elementos Globales
  const htmlElement = document.documentElement;
  const overlay = document.getElementById('piru-overlay');

  // --- 1. MENÚ OFFCANVAS ---
  const menuTrigger = document.getElementById('mobile-menu-trigger');
  const closeMenuBtn = document.getElementById('close-menu');
  const menuWrapper = document.getElementById('piru-menu');

  function toggleMenu(show) {
    if (!menuWrapper || !overlay) return;

    if (show) {
      menuWrapper.classList.add('active');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      menuWrapper.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Verificamos que existan antes de asignar eventos
  if (menuTrigger) menuTrigger.addEventListener('click', () => toggleMenu(true));
  if (closeMenuBtn) closeMenuBtn.addEventListener('click', () => toggleMenu(false));
  if (overlay) {
    overlay.addEventListener('click', () => {
      toggleMenu(false);
      toggleSearch(false);
    });
  }

  // --- 2. BUSCADOR MÓVIL ---
  const searchTrigger = document.getElementById('mobile-search-trigger');
  const searchBar = document.getElementById('mobile-search-bar');
  const closeSearchBtn = document.getElementById('close-search');
  const searchInput = searchBar ? searchBar.querySelector('input') : null;

  function toggleSearch(show) {
    if (!searchBar) return;

    if (show) {
      searchBar.classList.add('active');
      if (searchInput) searchInput.focus();
    } else {
      searchBar.classList.remove('active');
    }
  }

  if (searchTrigger) {
    searchTrigger.addEventListener('click', () => {
      // Cerrar menú si está abierto para evitar superposición
      if (menuWrapper && menuWrapper.classList.contains('active')) toggleMenu(false);

      const isActive = searchBar.classList.contains('active');
      toggleSearch(!isActive);
    });
  }

  if (closeSearchBtn) closeSearchBtn.addEventListener('click', () => toggleSearch(false));

  // --- 3. TEMA (DARK/LIGHT) ---
  // Buscamos ambos botones (móvil y desktop)
  const themeBtns = [
    document.getElementById('mobile-theme-toggle'),
    document.getElementById('desktop-theme-toggle')
  ];

  // Cargar preferencia
  const savedTheme = localStorage.getItem('piru-theme') || 'dark';
  setTheme(savedTheme);

  function setTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('piru-theme', theme);

    // Actualizar iconos en todos los botones que existan
    themeBtns.forEach(btn => {
      if (!btn) return; // Si el botón no existe en el HTML actual, saltar

      const icon = btn.querySelector('i');
      if (icon) {
        if (theme === 'dark') {
          icon.classList.remove('fa-moon');
          icon.classList.add('fa-sun'); // Icono Sol
        } else {
          icon.classList.remove('fa-sun');
          icon.classList.add('fa-moon'); // Icono Luna
        }
      }
    });
  }

  // Asignar eventos click
  themeBtns.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
      });
    }
  });

});

function togglePass() {
  const passwordInput = document.getElementById('password');
  const eyeIcon = document.getElementById('eye-icon');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eyeIcon.classList.remove('fa-eye');
    eyeIcon.classList.add('fa-eye-slash'); // Cambia icono a ojo tachado
  } else {
    passwordInput.type = 'password';
    eyeIcon.classList.remove('fa-eye-slash');
    eyeIcon.classList.add('fa-eye'); // Vuelve al ojo normal
  }
}