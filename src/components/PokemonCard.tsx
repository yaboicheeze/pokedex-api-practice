import '../styles/PokemonCard.css'
import {type FC, useEffect, useState} from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import {capitalize, combineTyping} from "../scripts/pokemonScripts.ts";

interface PokemonCardProps {
    pokemonNum: number;
}

/**
 * imports info then displays basic thumbnail card of a given pokemon
 * @param pokemonNum Number of the pokemon to be searched for in api and displayed
 * @constructor
 */
const PokemonCardComponent: FC<PokemonCardProps> = ({ pokemonNum }) => {
    const [pokemonImage, setPokemonImage] = useState();
    const [pokemonName, setPokemonName] = useState("");
    const [pokemonType1, setPokemonType1] = useState("");
    const [pokemonType2, setPokemonType2] = useState("");

    useEffect(() => {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNum}`).then((res) => {
            setPokemonImage(res.data.sprites.front_default);
            setPokemonName(capitalize(res.data.name));
            setPokemonType1(res.data.types[0].type.name);
            setPokemonType2(res.data.types[1].type.name);
        })
    })

    return (
        <div className="cardContainer">
            <Link to={`/expandedentry/${pokemonNum}`}>
                <img src={pokemonImage} alt={pokemonName} />
            </Link>
            <h2>{pokemonName}</h2>
            <h3># {pokemonNum}</h3>
            <p>{combineTyping(pokemonType1, pokemonType2)}</p>
        </div>
    )
}

export default PokemonCardComponent