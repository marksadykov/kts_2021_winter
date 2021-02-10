import React from "react";
import axios from "axios";
import {apiResponseTest} from "../config/constants";


const ApiService = () => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        const makeRequest = async () => {
            const response = await axios({
                method: 'get',
                url: apiResponseTest
            });
            setData(response.data)
        }

        makeRequest();
    }, []);
    return data;
}

export default ApiService;
