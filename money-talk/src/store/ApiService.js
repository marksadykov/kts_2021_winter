import React from "react";
import axios from "axios";
import {apiResponseTest} from "../config/constants";
import {apiUrls} from "../config/apiUrls";


const ApiService = () => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        const makeRequest = async () => {
            const response = await axios({
                method: 'get',
                url: apiUrls.currency.nameResponse('currencies/ticker')
            });
            setData(response.data)
        }

        makeRequest();
    }, []);
    return data;
}

export default ApiService;
