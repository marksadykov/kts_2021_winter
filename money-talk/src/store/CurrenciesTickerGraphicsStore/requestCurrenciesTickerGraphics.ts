import {ApiResp} from "../../utils";
import {CollectionT} from "../../utils";
import {GetCurrenciesTickerGraphicsModel} from "../models/currenciesTickerGraphics";
import axios from "axios";
import {apiUrls} from "../../config/apiUrls";
import {normalizeCurrenciesTickerGraphicsToCollection} from "../models/currenciesTickerGraphics";
import {log} from "../../utils";

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
