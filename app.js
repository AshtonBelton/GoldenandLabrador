document.addEventListener("DOMContentLoaded", function() {
    let accordions = document.querySelectorAll('.accordion');

    accordions.forEach(function(accordion) {
        accordion.addEventListener('click', function() {
            this.classList.toggle('active');
            let panel = this.nextElementSibling;
            panel.style.display = (panel.style.display === 'block') ? 'none' : 'block';
        });
    });
});


