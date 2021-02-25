import axios from 'axios';
import {ApiResp} from "../../utils";
import {CollectionT} from "../../utils";
import {GetCurrenciesTickerModel, normalizeCurrenciesTickerToCollection} from "../models/currencyTicker";
import {apiUrls} from "../../config/apiUrls";
import {log} from "../../utils";

export const requestCurrenciesTicker = async (
    organization: string
): Promise<ApiResp<CollectionT<number, GetCurrenciesTickerModel>>> => {
    try {
        const delay = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
        await delay();
        const response = await axios(
            {
                url: apiUrls.currencyTicker.nameResponse(organization),
                timeout: 10000
            }
        );
        return {
            isError: false,
            data: normalizeCurrenciesTickerToCollection(response.data),
        };
    } catch (e) {
        log(e);
        return {
            isError: true,
            data: null,
        };
    }
};
