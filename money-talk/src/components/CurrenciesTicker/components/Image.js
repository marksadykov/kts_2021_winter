import styled from 'styled-components';
import {Avatar} from "@vkontakte/vkui";
import React from "react";


const Image = ({response}) => {

    const ImageCurrency = styled.img`
      width: 30px;
      height: 30px;
    `;

    return (
        <Avatar size={40} src={response.logo_url}/>
    );
}

export default Image;
