const config = {
    // apiKey: '2c3232c58c3be78c9ae8c6e265a51a41',
    // apiKey: 'demo-6410726746980cead2a17c9db9ef29af',
    apiKey: '14992dc0b5275f114015307b2db6a605',
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

const apiCurrenciesTicker = (endpoint: string): string =>
    `https://api.nomics.com/v1/${endpoint}`;

export const apiUrls = {
    currency: (symbols: string[]): string =>
        currencyApi(symbols),

    exchange: (): string => exchangeApi,

    world: (start: string, end: string): string => worldApi(start, end),

    currencyTicker: {
        nameResponse: (name: string): string =>
            apiCurrenciesTicker(`${name}?key=${config.apiKey}&interval=1d,30d&convert=EUR&per-page=100&page=1`),
    },
    graphics: {
        nameResponse: (name: string, ticker: any): string =>
            apiCurrenciesTicker(`${name}?key=${config.apiKey}&ids=${ticker}&start=2020-01-01T00%3A00%3A00Z`),
    },
    info: {
        nameResponse: (name: string, ticker: string): string =>
            apiCurrenciesTicker(`${name}?key=${config.apiKey}&ids=${ticker}&attributes=
            id,website_url,logo_url,facebook_url,twitter_url,github_url,telegram_url,youtube_url,discord_url`)
    }
};
