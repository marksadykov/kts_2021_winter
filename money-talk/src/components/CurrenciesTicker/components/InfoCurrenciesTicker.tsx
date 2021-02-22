import * as React from "react";
import { Icon24LogoTwitter, Icon24LogoFacebook, Icon24LogoInstagram } from '@vkontakte/icons';
import {useLocal} from "../../../utils/useLocal";
import {useAsync} from "../../../utils/useAsync";
import {CurrenciesTickerInfoStore} from "../../../store/CurrenciesTickerInfoStore/CurrenciesTickerInfoStore";
import {Link} from "@vkontakte/vkui";
import {AiFillFacebook, AiFillGithub, AiOutlineInstagram, FaDiscord, FaTwitter} from "react-icons/all";


const InfoCurrenciesTicker = (props: { ticker: any}) => {
    const store = useLocal(() => new CurrenciesTickerInfoStore(props.ticker))
    useAsync(store.fetch, []);
    console.log(store.repos)
    return (
            <div>
                <a href="https://google.com/" target='_blank'><FaTwitter size={40} /></a>
                <FaTwitter size={40} />
                <AiOutlineInstagram size={40}/>
                <FaDiscord size={40}/>
                <AiFillFacebook size={40}/>
                <AiFillGithub size={40}/>
            </div>
    )
}

export default InfoCurrenciesTicker;
