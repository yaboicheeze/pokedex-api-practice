/**
 * Capitalizes the word passed through
 * @param str the word to be capitalized
 */
export const capitalize = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * If a pokemon has two types, combines them into one string seperated by a ' / '
 * @param type1 Pokemon's first typing
 * @param type2 Pokemon's second typing
 */
export const combineTyping = (type1: string, type2: string): string => {
    const type1Cap = capitalize(type1);
    const type2Cap = capitalize(type2);
    return type2Cap ? `${type1Cap} / ${type2Cap}` : type1Cap;
}

// export const playPokemonCry = (pokemonCry: string): void => {
//     new Audio(pokemonCry).play();
// }

/**
 * Converts weight to proper kg (i.e. api gives 905, converts to 90.5)
 * @param weight number to convert to correct weight
 */
export const weightConversion = (weight: number | undefined): number => {
    return weight/10;
}

/**
 * converts height to proper cm (i.e. api gives 17, converts to 170)
 * @param height number to convert to correct height
 */
export const heightConversion = (height: number | undefined): number => {
    return height*10;
}

