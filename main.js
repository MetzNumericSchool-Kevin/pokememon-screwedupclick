async function fetchPokemon() {
    const response = await fetch("http://localhost:5500/data/pokemon.json");
    const data = await response.json();
    console.log(data);
}

fetchPokemon();

bush.addEventListener("click", () => {
    console.log("click");
});
