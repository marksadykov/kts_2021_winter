import {ApiResp} from "../../utils/apiTypes";
import {CollectionT} from "../../utils/collection";
import {GetCurrenciesTickerGraphicsModel} from "../models/currenciesTickerGraphics/getCurrenciesTickerGraphics";
import axios from "axios";
import {apiUrls} from "../../config/apiUrls";
import {normalizeCurrenciesTickerGraphicsToCollection} from "../models/currenciesTickerGraphics/getCurrenciesTickerGraphicsApi";
import {log} from "../../utils/log";

export const requestCurrenciesTickerGraphics = async (
    organization: string
    , ticker: any): Promise<ApiResp<CollectionT<number, GetCurrenciesTickerGraphicsModel>>> => {
    try {
        const response = await axios(
            apiUrls.graphics.nameResponse(organization, ticker)
        );
        return {
            isError: false,
            data: normalizeCurrenciesTickerGraphicsToCollection(response.data),
        };
    } catch (e) {
        log(e);
        return {
            isError: true,
            data: null,
        };
    }
};
