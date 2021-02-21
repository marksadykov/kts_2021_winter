import * as React from 'react';
import axios from 'axios';

import config from '../config/apiUrls';

const useData = (option: string = '', start: string = '', end: string = '') => {

    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const makeRequest = async () => {
            // axios({
            //     headers: {
            //         'Access-Control-Allow-Origin' : '*',
            //         'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            //         'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Content-Type, X-Auth-Token',
            //         'Access-Control-Allow-Credentials': 'true',
            //         'Content-Type': 'application/json',
            //         'Accept': 'application/json',
            //     },
            //     withCredentials: true,
            //     method: 'get',
            //     url: `${config.baseUrl}?key=${config.apiKey}&currency=BTC&start=2018-04-14T00%3A00%3A00Z&end=2018-05-14T00%3A00%3A00Z`
                    // url: 'https://api.nomics.com/v1/volume/history?key=demo-b5d84e505a11969a7184f899fbb40ae1&start=2018-04-14T00%3A00%3A00Z&end=2018-05-14T00%3A00%3A00Z&convert=EUR'
            // }).then(response => {
            //     setData(response.data);
            //     console.log(data);
            // });

            console.log(`${config.baseUrl}${option}?key=${config.apiKey}&start=${start}&end=${end}`);
            fetch(`${config.baseUrl}${option}?key=${config.apiKey}&start=${start}&end=${end}`)
                .then(response => response.json())
                .then(response => {
                    setData(response);
                })
        }

        makeRequest();
    }, []);

    return data;
}

export default useData;
