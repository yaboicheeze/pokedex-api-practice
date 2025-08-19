import PokemonCardComponent from "./PokemonCard.tsx";

/**
 * Generates PokemonCardComponents in a loop
 * @param amountToGenerate the number of PokemonCardComponents to generate
 */
export const generateCardSheet = (amountToGenerate : number) => {
    const cardList = [];

    for (let i = 1; i <= amountToGenerate; i++) {
        cardList.push(<PokemonCardComponent pokemonNum={i}/>);
    }

    return cardList
}