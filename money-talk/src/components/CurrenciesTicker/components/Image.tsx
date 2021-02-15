import {Avatar} from "@vkontakte/vkui";
import React from "react";


const Image = (response: any) => {

    return (
        <Avatar size={40} src={response.logoUrl}/>
    );
}

export default Image;
