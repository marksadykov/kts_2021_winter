const config = {
    apiKey: '2c3232c58c3be78c9ae8c6e265a51a41',
    baseUrl: 'https://api.nomics.com/v1/',
};

const currencyApi = (id: string): string =>
    `${config.baseUrl}currencies/ticker?
    key=${config.baseUrl}&
    ids=${id}&
    interval=1h&
    convert=USD`;

export const apiUrls = {
    currency: (id: string): string =>
        currencyApi(id),
};
