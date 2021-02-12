const apiCurrenciesTicker = (endpoint: string): string =>
    `https://api.nomics.com/v1/${endpoint}`;

const apiKey = '2c3232c58c3be78c9ae8c6e265a51a41';

export const apiUrls = {
    currency: {
        nameResponse: (name: string): string =>
            apiCurrenciesTicker(`${name}?key=${apiKey}&interval=1d,30d&convert=EUR&per-page=100&page=1`),
    },
};
