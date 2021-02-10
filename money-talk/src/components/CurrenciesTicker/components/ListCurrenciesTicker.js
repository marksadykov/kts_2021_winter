import React from "react";

import CurrenciesMathFloor from "../../../utils/utils";


const ListCurrenciesTicker = ({response}) => {

    return (
        <>
            {response.name} {CurrenciesMathFloor(response.price)}
        </>
    )
}

export default ListCurrenciesTicker;
