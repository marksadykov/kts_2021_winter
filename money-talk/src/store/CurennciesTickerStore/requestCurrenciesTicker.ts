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
        const response = await axios(
            apiUrls.currencyTicker.nameResponse(organization)
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
