import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Axios from "axios";
import '../styles/ExpandedEntry.css'
import {combineTyping, capitalize, heightConversion, weightConversion} from "../scripts/pokemonScripts.ts";

/**
 * imports info for then displays expanded list of pokemon statistics and info
 * @constructor
 */
const ExpandedEntry = () => {
    const { pokemonNum } = useParams<{ pokemonNum: string }>();

    const [pokemonImage, setPokemonImage] = useState();
    const [pokemonShinyImage, setPokemonShinyImage] = useState();
    const [pokemonName, setPokemonName] = useState("");
    const [pokemonType1, setPokemonType1] = useState("");
    const [pokemonType2, setPokemonType2] = useState("");
    const [pokemonHP, setPokemonHP] = useState<number>();
    const [pokemonAttack, setPokemonAttack] = useState<number>();
    const [pokemonDefense, setPokemonDefense] = useState<number>();
    const [pokemonSpecialAttack, setPokemonSpecialAttack] = useState<number>();
    const [pokemonSpecialDefense, setPokemonSpecialDefense] = useState<number>();
    const [pokemonSpeed, setPokemonSpeed] = useState<number>();
    const [pokemonCry, setPokemonCry] = useState();
    const [pokemonWeight, setPokemonWeight] = useState<number>();
    const [pokemonHeight, setPokemonHeight] = useState<number>();

    const [showShiny, setShowShiny] = useState(false);

    useEffect(() => {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNum}`).then((res) => {
            setPokemonImage(res.data.sprites.front_default);
            setPokemonShinyImage(res.data.sprites.front_shiny);
            setPokemonName(capitalize(res.data.name));
            setPokemonType1(res.data.types[0].type.name);
            setPokemonType2(res.data.types[1]?.type.name ?? "");
            setPokemonHP(res.data.stats[0].base_stat);
            setPokemonAttack(res.data.stats[1].base_stat);
            setPokemonDefense(res.data.stats[2].base_stat);
            setPokemonSpecialAttack(res.data.stats[3].base_stat);
            setPokemonSpecialDefense(res.data.stats[4].base_stat);
            setPokemonSpeed(res.data.stats[5].base_stat);
            setPokemonCry(res.data.cries.latest);
            setPokemonWeight(res.data.weight);
            setPokemonHeight(res.data.height);
        })
    })

    /**
     * plays pokemon cry
     */
    function playPokemonCry() {
        new Audio(pokemonCry).play();
    }

    return (
        <div className="infoContainer">

            <Link to={`/`}>
                <button className="returnButton">Home</button>
            </Link>

            <img className="expandedImage" src={showShiny ? pokemonShinyImage : pokemonImage} alt="Pokemon Image" />
            <button onClick={() => setShowShiny(prev => !prev)}>
                {showShiny ? "Show Normal" : "Show Shiny"}
            </button>

            <button onClick={playPokemonCry}>Play Latest Cry</button>

            <h1>{pokemonName}</h1>
            <h2>#{pokemonNum}</h2>
            <p>Type: {combineTyping(pokemonType1, pokemonType2)}</p>
            <div className="statLayout">
                <p>Height: {heightConversion(pokemonHeight)} cm</p>
                <p>Weight: {weightConversion(pokemonWeight)} kg</p>
            </div>
            <div className="statLayout">
                <p>Base HP: {pokemonHP} </p>
                <p>Base Attack: {pokemonAttack} </p>
                <p>Base Defense: {pokemonDefense} </p>
                <p>Base Special Attack: {pokemonSpecialAttack} </p>
                <p>Base Special Defense: {pokemonSpecialDefense} </p>
                <p>Base Speed: {pokemonSpeed} </p>
            </div>
        </div>
    );
}

export default ExpandedEntry;