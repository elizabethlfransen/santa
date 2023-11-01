import seedrandom from 'seedrandom';

export const CURRENT_YEAR = new Date().getFullYear();
export const NAMES = ['John', 'Michel', 'Eric', 'Liz', 'Scarlett'];
export const MATCHES = createMatches(CURRENT_YEAR);

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