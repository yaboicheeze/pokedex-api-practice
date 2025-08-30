import PokemonCardComponent from "./PokemonCard.tsx";
import type {JSX} from "react";

/**
 * Generates PokemonCardComponents in a loop
 * @param amountToGenerate the number of PokemonCardComponents to generate
 * @return a list of pokemon card components
 */
export function generateCardSheet (amountToGenerate : number): JSX.Element[] {
    const cardList = [];

    for (let i = 1; i <= amountToGenerate; i++) {
        cardList.push(<PokemonCardComponent pokemonNum={i}/>);
    }

    return cardList
}