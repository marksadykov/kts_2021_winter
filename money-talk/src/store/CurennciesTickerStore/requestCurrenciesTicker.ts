import {ApiResp} from "../../utils/apiTypes";
import {GetCurrenciesTickerModel} from "../models/currency";
import axios from "axios";
import {apiUrls} from "../../config/apiUrls";
import {normalizeCurrenciesTickerModel} from "../models/currency";

export const requestCurrenciesTicker = async (organization: string):
Promise<ApiResp<GetCurrenciesTickerModel[]>> => {
    try {
        const response = await axios(
            apiUrls.currency.nameResponse(organization)
        );
        return {
            isError: false,
            data: response.data.map(normalizeCurrenciesTickerModel),
        };
    } catch (e) {
        return {
            isError: true,
            data: null
        };
    }
}
