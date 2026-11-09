
import ko from "./ko";
import en from "./en";

import type { Locale } from "../config";

export const dictionaries = {
    ko,
    en,
};

export type Dictionary = typeof ko;

export function getDictionary(lang: Locale): Dictionary {
    return dictionaries[lang];
}