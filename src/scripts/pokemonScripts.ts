/**
 * Capitalizes the word passed through
 * @param str the word to be capitalized
 * @return returns the capitalized word as a string
 */
export const capitalize = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * If a pokemon has two types, combines them into one string seperated by a ' / '
 * @param type1 Pokemon's first typing
 * @param type2 Pokemon's second typing
 * @return the pokemon's type as a string
 */
export const combineTyping = (type1: string, type2: string): string => {
    const type1Cap = capitalize(type1);
    const type2Cap = capitalize(type2);
    return type2Cap ? `${type1Cap} / ${type2Cap}` : type1Cap;
}

