import React from "react";

import CurrenciesMathFloor from "../../../utils/utils";


const ListCurrenciesTicker = ({response}) => {

    return (
        <>
            {response.id} {CurrenciesMathFloor(response.price)}
        </>
    )
}

export default ListCurrenciesTicker;
