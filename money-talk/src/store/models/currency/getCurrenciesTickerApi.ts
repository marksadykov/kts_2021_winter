import {GetCurrenciesTickerModel} from "./getCurrenciesTicker";

export type GetCurrenciesTickerApiModel = {
    id: string,
    currency: string,
    price: string,
    name: string,
    rank: string,
    logo_url: string
}

export const normalizeCurrenciesTickerModel = (raw: GetCurrenciesTickerApiModel): GetCurrenciesTickerModel => ({
    id: raw.id,
    currency: raw.currency,
    price: raw.price,
    name: raw.name,
    rank: raw.rank,
    logoUrl: raw.logo_url
})
