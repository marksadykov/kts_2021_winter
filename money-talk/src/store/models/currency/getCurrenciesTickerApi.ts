import {GetCurrenciesTickerModel} from "./getCurrenciesTicker";
import {CollectionT} from "../../../utils/collection";

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


export const normalizeCurrenciesTickerToCollection = (
    rawList: GetCurrenciesTickerApiModel[]
): CollectionT<number | any, GetCurrenciesTickerModel> => {
    return {
        order: rawList.map((item) => item.id),
        entities: rawList.reduce(
            (acc, item) => ({
                ...acc,
                [item.id]: normalizeCurrenciesTickerModel(item),
            }),
            {}
        ),
    };
};
