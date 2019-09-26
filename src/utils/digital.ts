
export const digitalAbbreviation = (digital: number | string, abbreviation: string) => `${(Number(digital) / 10000).toFixed(2)}${abbreviation}`;

