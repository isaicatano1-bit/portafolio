
// Función genérica para manejar cualquier menú
function setupMenu(buttonId, linksClassOrId) {
    const btn = document.getElementById(buttonId);
    const links = document.querySelector(linksClassOrId);

    if (btn && links) {
        btn.addEventListener('click', () => {
            links.classList.toggle('active'); 
            btn.classList.toggle('is-active'); 
        });

        // Cerrar al hacer clic en un link
        links.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                links.classList.remove('active');
                btn.classList.remove('is-active');
            });
        });
    }
}


setupMenu('mobile-menu', '.nav-links');
setupMenu('mobile-menu-mascotas', '#nav-list-mascotas');

