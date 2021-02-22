import axios from 'axios';

import { apiUrls } from '../../config/apiUrls';
import  { normalizeCurrencyModel } from '../models';

export const requestCurrencyStore = async (
    id: string
) => {
    try {
        const response = await axios(
            apiUrls.currency(id)
        );
        return {
            isError: false,
            data: normalizeCurrencyModel(response.data),
        };
    } catch (e) {
        return {
            isError: true,
            data: [],
        };
    }
};
