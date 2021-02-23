import * as React from "react";
import {useLocal} from "../../../utils/useLocal";
import {useAsync} from "../../../utils/useAsync";
import {CurrenciesTickerInfoStore} from "../../../store/CurrenciesTickerInfoStore/CurrenciesTickerInfoStore";
import {Avatar, Link} from "@vkontakte/vkui";
import {AiFillFacebook,
    AiFillGithub,
    FaDiscord,
    FaTwitter,
    FaTelegram,
    AiFillYoutube} from "react-icons/all";


const InfoCurrenciesTicker = (props: { ticker: any}) => {
    const store = useLocal(() => new CurrenciesTickerInfoStore(props.ticker))
    useAsync(store.fetch, []);

    return (
            <>
                {store.repos.map(data =>
                <div key={data.id} style={{display: 'inline-flex', justifyContent: 'center', }}>
                    <a href={data.twitterUrl} target='_blank'><FaTwitter size={40} /></a>
                    <a href={data.facebookUrl} target="_blank"><AiFillFacebook size={40}/></a>
                    <a href={data.websiteUrl} target='_blank'><Avatar src={data.logoUrl} size={40}/></a>
                    <a href={data.discordUrl} target='_blank'><FaDiscord size={40}/></a>
                    <a href={data.facebookUrl} target='_blank'><AiFillFacebook size={40}/></a>
                    <a href={data.githubUrl} target='_blank'><AiFillGithub size={40}/></a>
                    <a href={data.telegramUrl} target='_blank'><FaTelegram size={40}/></a>
                    <a href={data.youtubeUrl} target='_blank'><AiFillYoutube size={40}/></a>
                </div>
                )}
            </>
    )
}

export default InfoCurrenciesTicker;
