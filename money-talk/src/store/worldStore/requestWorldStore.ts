import axios from 'axios';
import { apiUrls } from '../../config/apiUrls';
import { normalizeWorldModel } from '../models';

export const requestWorldStore = async (start: string, end: string) => {
    try {
        const response = await axios(
                {
                    url: apiUrls.world(start, end),
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                    }
                }
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
