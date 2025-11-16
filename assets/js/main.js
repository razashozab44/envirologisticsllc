// Main JS for Enviro Logistics LLC
// Add interactive features here

document.addEventListener('DOMContentLoaded', function() {
    // Example: Navbar dropdown toggle for Services
    var servicesNav = document.querySelectorAll('.nav-item .nav-link');
    servicesNav.forEach(function(link) {
        if (link.textContent.trim() === 'Services') {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                var dropdown = link.nextElementSibling;
                if (dropdown && dropdown.classList.contains('dropdown-menu')) {
                    dropdown.classList.toggle('show');
                }
            });
        }
    });

    // Example: Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        var dropdowns = document.querySelectorAll('.dropdown-menu');
        dropdowns.forEach(function(menu) {
            if (!menu.contains(e.target) && !menu.previousElementSibling.contains(e.target)) {
                menu.classList.remove('show');
            }
        });
    });
});
