import {GetCurrenciesTickerInfoModel} from "./getCurrenciesTickerInfo";
import {CollectionT} from "../../../utils/collection";

export type GetCurrenciesTickerInfoApiModel = {
    id: string,
    website_url: string,
    logo_url: string,
    facebook_url: string,
    twitter_url: string,
    github_url: string,
    telegram_url: string,
    youtube_url: string,
    discord_url: string
}

export const normalizeCurrenciesTickerInfoModel = (raw: GetCurrenciesTickerInfoApiModel): GetCurrenciesTickerInfoModel => ({
    id: raw.id,
    websiteUrl: raw.website_url,
    logoUrl: raw.logo_url,
    facebookUrl: raw.facebook_url,
    twitterUrl: raw.twitter_url,
    githubUrl: raw.github_url,
    telegramUrl: raw.telegram_url,
    youtubeUrl: raw.youtube_url,
    discordUrl: raw.discord_url
})

export const normalizeCurrenciesTickerInfoToCollection = (
    rawList: GetCurrenciesTickerInfoApiModel[]
): CollectionT<number | any, GetCurrenciesTickerInfoModel> => {
    return {
        order: rawList.map((item) => item.id),
        entities: rawList.reduce(
            (acc, item) => ({
                ...acc,
                [item.id]: normalizeCurrenciesTickerInfoModel(item),
            }),
            {}
        ),
    };
};
