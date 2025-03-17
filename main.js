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
            pokemonImage.classList.add('pokemon');
            pokemonImage.style.width = '100%';
            pokemonImage.style.height = '100%';
            pokemonImage.style.objectFit = 'contain';
            pokemonImage.style.position = 'absolute';
            pokemonImage.style.left = '0';
            pokemonImage.style.top = '0';
            
            // Create a container for the Pokémon
            const pokemonContainer = document.createElement('div');
            pokemonContainer.style.position = 'relative';
            pokemonContainer.style.width = element.offsetWidth + 'px';
            pokemonContainer.style.height = element.offsetHeight + 'px';
            pokemonContainer.style.left = element.offsetLeft + 'px';
            pokemonContainer.style.top = element.offsetTop + 'px';
            pokemonContainer.appendChild(pokemonImage);
            
            // Replace the bush with the Pokémon container
            element.parentNode.replaceChild(pokemonContainer, element);
            
            // Mark this bush as clicked
            clickedBushes.add(index);
        });
    });
}

// bush element dans const
const bush = document.querySelectorAll('.bush');

// Start the game by fetching Pokemon data
fetchPokemon();