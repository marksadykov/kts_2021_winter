import {ApiResp} from "../../utils";
import {CollectionT} from "../../utils";
import {GetCurrenciesTickerInfoModel, normalizeCurrenciesTickerInfoToCollection} from "../models/info";
import axios from "axios";
import {apiUrls} from "../../config/apiUrls";
import {log} from "../../utils";

export const requestCurrenciesTickerInfo = async (
    organization: string
    , ticker: any): Promise<ApiResp<CollectionT<number, GetCurrenciesTickerInfoModel>>> => {
    try {
        const response = await axios(
            apiUrls.info.nameResponse(organization, ticker)
        );
        return {
            isError: false,
            data: normalizeCurrenciesTickerInfoToCollection(response.data),
        };
    } catch (e) {
        log(e);
        return {
            isError: true,
            data: null,
        };
    }
};
