import {number, string} from "prop-types";

export type currencyModel = {
    symbol: string,
    name: string,
    logoUrl: string,
    price: number
};

export type currencyApiModel = {
    symbol: string,
    name: string,
    logo_url: string,
    price: string
};

export const normalizeCurrencyModel = (
    raw: currencyApiModel[]
): (currencyModel)[] => (
    [
        {
        symbol: raw[0].symbol,
        name: raw[0].name,
        logoUrl: raw[0].logo_url,
            price: +raw[0].price
    },
    {
        symbol: raw[1].symbol,
        name: raw[1].name,
        logoUrl: raw[1].logo_url,
        price: +raw[1].price
    }
    ]
);

export type exchangeApiModel = {
    currency: string,
    rate: string,
}

export type exchangeModel = {
    id: number,
    name: string,
    value: number,
}

export const normalizeExchangeModel = (raw: exchangeApiModel[]): (exchangeModel)[] => {

    return raw.map((item, index) =>{
        return {
            id: index,
            name: item.currency,
            value: +item.rate
        };
    });
}
