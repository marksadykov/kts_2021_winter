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
    raw: currencyApiModel[]
): (currencyModel)[] => (
    [
        {
        symbol: raw[0].symbol,
        name: raw[0].name,
        logoUrl: raw[0].logo_url,
        value: raw[0].value
    },
    {
        symbol: raw[1].symbol,
        name: raw[1].name,
        logoUrl: raw[1].logo_url,
        value: raw[1].value
    }
    ]
);
