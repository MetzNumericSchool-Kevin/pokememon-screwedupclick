async function fetchPokemon() {
    const response = await fetch("./data/pokemon.json");
    const data = await response.json();
    console.log(data);
}

fetchPokemon();

// Get the bush element once and store it in a variable
const bush = document.querySelectorAll('.bush');

bush.forEach(element => {
    element.addEventListener('click', () => {
        element.style.display = 'none';
    });
});
