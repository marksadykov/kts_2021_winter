export type singleCurrencyApiModel = {
    symbol: string,
    name: string,
    logo_url: string,
    price: string
}

export type singleCurrencyModel = {
    symbol: string,
    name: string,
    logoUrl: string,
    price: number
}

export const normalizeSingleCurrencyModel = (raw: singleCurrencyApiModel[]): (singleCurrencyModel)[] => {

    return raw.map((item, index) =>{
        return {
            symbol: item.symbol,
            name: item.name,
            logoUrl: item.logo_url,
            price: +(item.price.slice(0, item.price.length - 4))
        };
    });
}
