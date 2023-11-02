import {NAMES} from "$lib/constants";

export function load({params}) {
    return {
        name: params.name
    }
}

export function entries() {
    return NAMES.map(name => ({name}));
}