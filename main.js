let pokemonData = [];
let pokemonPairs = [];
let clickedBushes = new Set();

async function fetchPokemon() {
    const response = await fetch("./data/pokemon.json");
    pokemonData = await response.json();
    console.log(pokemonData);
}

function createPokemonPairs() {
    // Create pairs of random Pokémon
    for (let i = 0; i < bush.length; i += 2) {
        const randomPokemon = getRandomPokemon();
        pokemonPairs[i] = randomPokemon;
        pokemonPairs[i + 1] = randomPokemon;
    }
}

function getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * pokemonData.length);
    return pokemonData[randomIndex];
}

fetchPokemon();

const pairOfPokemonIds = ["pikachu","pikachu", "charmander", "charmander", "bulbasaur", "bulbasaur", "squirtle", "squirtle"];

// bush element dans const
const bush = document.querySelectorAll('.bush');

// Creation des paires
createPokemonPairs();

bush.forEach((element, index) => {
    element.addEventListener('click', () => {
        if (clickedBushes.has(index)) return; // Prevent clicking the same bush twice
        
        const pokemon = pokemonPairs[index];
        // Create and show the Pokémon image
        const pokemonImage = document.createElement('img');
        pokemonImage.src = pokemon.sprite;
        pokemonImage.style.width = '100px';
        pokemonImage.style.height = '100px';
        pokemonImage.style.position = 'absolute';
        pokemonImage.style.left = element.offsetLeft + 'px';
        pokemonImage.style.top = element.offsetTop + 'px';
        document.body.appendChild(pokemonImage);
        
        // Hide the bush
        element.style.display = 'none';
        
        // Mark this bush as clicked
        clickedBushes.add(index);
    });
});
