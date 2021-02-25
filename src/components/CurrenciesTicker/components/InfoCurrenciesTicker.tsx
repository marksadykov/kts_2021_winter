import * as React from "react";
import {useLocal} from "../../../utils";
import {useAsync} from "../../../utils";
import {CurrenciesTickerInfoStore} from "../../../store/CurrenciesTickerInfoStore";
import styles from '../CurrenciesTicker.module.scss';
import {Avatar, Link} from "@vkontakte/vkui";
import {AiFillFacebook,
    AiFillGithub,
    FaDiscord,
    FaTwitter,
    FaTelegram,
    AiFillYoutube} from "react-icons/all";
import {observer} from "mobx-react-lite";


const InfoCurrenciesTicker = (props: { ticker: string}) => {
    const store = useLocal(() => new CurrenciesTickerInfoStore(props.ticker))
    useAsync(store.fetch, []);
    React.useEffect(() => {
        return () => store.destroy();
    }, [])

    return (
            <>
                {store.repos.map(data =>
                <div key={data.id} className={styles.infoStyle}>
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

export default observer(InfoCurrenciesTicker);
