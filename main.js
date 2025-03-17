async function fetchPokemon() {
    const response = await fetch("http://localhost:5500/data/pokemon.json");
    const data = await response.json();
    console.log(data);
}

fetchPokemon();

// Get the bush element once and store it in a variable
const bush = document.querySelector('.bush');

// Add event listener using modern syntax
if (bush) {
    bush.addEventListener('click', () => {
        bush.style.display = 'none';
    });
} else {
    console.warn('Bush element not found in the document');
}
