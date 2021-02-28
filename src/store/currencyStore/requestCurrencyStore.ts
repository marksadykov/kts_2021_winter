import axios from 'axios';

import { apiUrls } from '../../config/apiUrls';
import {normalizeCurrencyModel, normalizeExchangeModel} from '../models';

export const requestCurrencyStore = async (
    // idFirst: string,
    // idSecond: string,
) => {
    try {
        const response = await axios(
            // apiUrls.currency(idFirst, idSecond)
            apiUrls.exchange()
        );
        return {
            isError: false,
            // data: normalizeCurrencyModel(response.data),
            data: normalizeExchangeModel(response.data)
        };
    } catch (e) {
        return {
            isError: true,
            data: [],
        };
    }
};
