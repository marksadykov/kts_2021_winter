/*
import {ApiResp} from "../../utils/apiTypes";
import {GetCurrenciesTickerModel, normalizeCurrenciesTickerToCollection} from "../models/currencyTicker";
import axios from "axios";
import {apiUrls} from "../../config/apiUrls";
import {normalizeCurrenciesTickerModel} from "../models/currencyTicker";
import {CollectionT} from "../../utils/collection";

export const requestCurrenciesTicker = async (organization: string):
Promise<{ isError: boolean; data: { entities: { [p: string]: GetCurrenciesTickerModel }; order: string[] } }> => {
    try {
        const response = await axios(
            apiUrls.currencyTicker.nameResponse(organization)
        );
        return {
            isError: false,
            data: normalizeCurrenciesTickerToCollection(response.data),
        };
    } catch (e) {
        return {
            isError: true,
            data: null
        };
    }
}
*/


import axios from 'axios';
import {ApiResp} from "../../utils/apiTypes";
import {CollectionT} from "../../utils/collection";
import {GetCurrenciesTickerModel, normalizeCurrenciesTickerToCollection} from "../models/currencyTicker";
import {apiUrls} from "../../config/apiUrls";
import {log} from "../../utils/log";

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
