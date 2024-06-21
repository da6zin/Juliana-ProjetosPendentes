var homeUrl = "https://da6zin.github.io/Fortes-Engenharia---Juliana/index.html#"; // Substitua pelo site desejado
document.getElementById('home-icon').onclick = function() {
    window.location.href = homeUrl;
};

var acceptButtons = document.querySelectorAll('.accept-btn');
var denyButtons = document.querySelectorAll('.deny-btn');

acceptButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        alert('O projeto foi aceito');
    });
});

denyButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        alert('O projeto foi negado');
    });
});

document.getElementById('search-button').addEventListener('click', function() {
    var searchInput = document.getElementById('search-input').value.toLowerCase();
    var rows = document.querySelectorAll('tbody tr');
    rows.forEach(function(row) {
        row.classList.remove('highlight');
        var projectName = row.cells[0].innerText.toLowerCase();
        if (projectName.includes(searchInput)) {
            row.classList.add('highlight');
        }
    });
});

// Função para abrir o menu lateral
document.getElementById('menu-icon').addEventListener('click', function() {
    document.getElementById('sidebar').style.width = '250px';
});

// Função para fechar o menu lateral
document.getElementById('close-sidebar').addEventListener('click', function() {
    document.getElementById('sidebar').style.width = '0';
});