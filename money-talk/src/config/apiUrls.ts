const apiCurrenciesTicker = (endpoint: string): string =>
    `https://api.nomics.com/v1/${endpoint}`;

const apiKey = '2c3232c58c3be78c9ae8c6e265a51a41';

export const apiUrls = {
    currencyTicker: {
        nameResponse: (name: string): string =>
            apiCurrenciesTicker(`${name}?key=${apiKey}&interval=1d,30d&convert=EUR&per-page=100&page=1`),
    },
    graphics: {
        nameResponse: (name: string, ticker: any): string =>
            apiCurrenciesTicker(`${name}?key=${apiKey}&ids=${ticker}&start=2021-01-10T00%3A00%3A00Z`),
    },
    info: {
        nameResponse: (name: string, ticker: string): string =>
            apiCurrenciesTicker(`${name}?key=${apiKey}&ids=${ticker}&attributes=
            id,website_url,logo_url,facebook_url,twitter_url,github_url,telegram_url,youtube_url,discord_url`)
    }
};


// https://api.nomics.com/v1/currencies/sparkline?key=demo-b5d84e505a11969a7184f899fbb40ae1&ids=BTC&start=2018-04-14T00%3A00%3A00Z&end=2018-05-14T00%3A00%3A00Z
