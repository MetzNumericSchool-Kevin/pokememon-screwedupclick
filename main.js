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
    for (let i = 0; i < bushList.length; i += 2) {
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
    bushList.forEach((bushElement, index) => {
        bushElement.addEventListener('click', () => {
            if (clickedBushes.has(index)) return; // Prevent clicking the same bush twice
            
            const pokemon = pokemonPairs[index];
            if (!pokemon) return; // Safety check
            
            // Create and show the Pokémon image
            const pokemonImage = document.createElement('img');
            pokemonImage.src = pokemon.sprite;
            pokemonImage.classList.add('pokemon');
            
            // Replace the bush with the Pokémon container
            bushElement.style.display = 'none';
            bushElement.parentNode.appendChild(pokemonImage, bushElement);
            
            // Mark this bush as clicked
            clickedBushes.add(index);
        });
    });
}


// bush element dans const
const bushList = document.querySelectorAll('.bush');

// Start the game by fetching Pokemon data
fetchPokemon();