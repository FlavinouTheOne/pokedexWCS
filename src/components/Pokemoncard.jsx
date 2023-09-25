const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

const PokemonCard = () => {
    const pokemon = pokemonList[0];
    const imgHandler = (pokemon) => {
        if (typeof(pokemon.imgSrc) === "string") {
            return <img src={pokemon.imgSrc}></img>
        } else {
            return <p>???</p>;
        }

    }
    return (
        <figure>
            {imgHandler(pokemon)}
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    )
}
export default PokemonCard;