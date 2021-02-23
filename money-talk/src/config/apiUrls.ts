const config = {
    apiKey: '2c3232c58c3be78c9ae8c6e265a51a41',
    baseUrl: 'https://api.nomics.com/v1/',
};

const currencyApi = (symbols: string[]): string =>
    `${config.baseUrl}currencies/ticker?`+
    `key=${config.apiKey}&`+
    `ids=${symbols.join()}&`+
    `interval=1h&`+
    `convert=USD`;

const exchangeApi = `${config.baseUrl}/exchange-rates?`+
                    `key=${config.apiKey}`;

const worldApi = (start: string, end: string):string =>
    `${config.baseUrl}volume/history`+
    `?key=${config.apiKey}&`+
    `start=${start}`+
    `&end=${end}`

export const apiUrls = {
    currency: (symbols: string[]): string =>
        currencyApi(symbols),

    exchange: (): string => exchangeApi,

    world: (start: string, end: string): string => worldApi(start, end),
};
