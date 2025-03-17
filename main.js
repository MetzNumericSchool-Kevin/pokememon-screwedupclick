let pokemonData = [];
let pokemonPairs = [];
let clickedBushes = new Set();

async function fetchPokemon() {
    const response = await fetch("./data/pokemon.json");
    pokemonData = await response.json();
    console.log(pokemonData);
    // Initialize the game after data is loaded
    initializeGame();
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

function initializeGame() {
    // Create pairs
    createPokemonPairs();

    // Add click listeners
    bush.forEach((element, index) => {
        element.addEventListener('click', () => {
            if (clickedBushes.has(index)) return; // Prevent clicking the same bush twice
            
            const pokemon = pokemonPairs[index];
            if (!pokemon) return; // Safety check
            
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
}

// bush element dans const
const bush = document.querySelectorAll('.bush');

// Start the game by fetching Pokemon data
fetchPokemon();

// restart button
document.getElementById('rejouer').addEventListener('click',restartGame);

function restartGame() {
    // réinitialise le jeu
    let randomno = Math.floor(Math.random() * 100 + 1);
    let attempts = 0;

    // restart game elements
    document.getElementById('rejouer').style.display = 'block';
}