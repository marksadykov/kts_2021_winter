import {GetCurrenciesTickerGraphicsModel} from "./getCurrenciesTickerGraphics";
import {CollectionT} from "../../../utils/collection";

export type GetCurrenciesTickerGraphicsApiModel = {
    currency: string,
    timestamps: string,
    prices: string
}

export const normalizeCurrenciesTickerGraphicsModel = (raw: GetCurrenciesTickerGraphicsApiModel): GetCurrenciesTickerGraphicsModel => ({
    currency: raw.currency,
    timestamps: raw.timestamps,
    prices: raw.prices,
})


export const normalizeCurrenciesTickerGraphicsToCollection = (
    rawList: GetCurrenciesTickerGraphicsApiModel[]
): CollectionT<number | any, GetCurrenciesTickerGraphicsModel> => {
    return {
        order: rawList.map((item) => item.currency),
        entities: rawList.reduce(
            (acc, item) => ({
                ...acc,
                [item.currency]: normalizeCurrenciesTickerGraphicsModel(item),
            }),
            {}
        ),
    };
};
