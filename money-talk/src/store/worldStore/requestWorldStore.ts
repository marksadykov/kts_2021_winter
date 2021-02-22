import axios from 'axios';
import { apiUrls } from '../../config/apiUrls';
import { normalizeWorldModel } from '../models';

export const requestWorldStore = async () => {
    try {
        const response = await axios(
            apiUrls.exchange()
        );
        return {
            isError: false,
            data: normalizeWorldModel(response.data)
        };
    } catch (e) {
        return {
            isError: true,
            data: [],
        };
    }
};
