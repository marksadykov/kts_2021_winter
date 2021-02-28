import axios from 'axios';
import { apiUrls } from '../../config/apiUrls';
import {normalizeSingleCurrencyModel} from "../models/SingleCurrency";

export const requestSingleCurrencyStore = async (symbols: string[]) => {
    try {
        const response = await axios(
            apiUrls.currency(symbols)
        );
        return {
            isError: false,
            data: normalizeSingleCurrencyModel(response.data)
        };
    } catch (e) {
        return {
            isError: true,
            data: [],
        };
    }
};
