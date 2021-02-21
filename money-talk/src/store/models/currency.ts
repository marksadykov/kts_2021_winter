export type currencyModel = {
    symbol: string,
    name: string,
    logoUrl: string,
    value: number
};

export type currencyApiModel = {
    symbol: string,
    name: string,
    logo_url: string,
    value: number
};

export const normalizeCurrencyModel = (
    raw: currencyApiModel
): currencyModel => ({
    symbol: raw.symbol,
    name: raw.name,
    logoUrl: raw.logo_url,
    value: raw.value
});
