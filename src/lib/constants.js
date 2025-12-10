import seedrandom from 'seedrandom';
import {WORDS} from "./words.js";

const SALT = 1;
export const CURRENT_YEAR = new Date().getFullYear();
export const SEED = CURRENT_YEAR + SALT;
export const NAMES = ['Michel', 'Eric', 'Liz', 'Scarlett'];
export const MATCHES = createMatches(SEED);
export const CONFIRMATION_WORD = getConfirmationWord();

function isInvalidMatches(matches) {
    return Object.entries(matches)
        .some(([k, v]) => k === v);
}

function createMatches(seed) {
    const random = seedrandom(seed);
    let result = attemptCreateMatches(random);
    while (isInvalidMatches(result))
        result = attemptCreateMatches(random);
    return result;
}

function getConfirmationWord() {
    const random = seedrandom(SEED);
    const index = Math.trunc(random() * WORDS.length);
    return WORDS[index];
}

function attemptCreateMatches(random) {
    let availableNames = [...NAMES];
    return Object.fromEntries(
        NAMES.map(name => {
            const index = Math.trunc(random() * availableNames.length);
            const [match] = availableNames.splice(index, 1);
            return [name, match];
        }),
    );
}
