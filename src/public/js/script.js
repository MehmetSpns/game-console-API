document.addEventListener('DOMContentLoaded', () => {
    console.log('Game Console API Website Loaded!');
});

function fetchGames() {
    fetch('/api/games')
        .then(response => response.json())
        .then(data => {
            document.getElementById('output').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error('Error fetching games:', error));
}

function fetchConsoles() {
    fetch('/api/consoles')
        .then(response => response.json())
        .then(data => {
            document.getElementById('output').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error('Error fetching consoles:', error));
}
