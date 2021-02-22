export type worldApiModel = {
    timestamp: string,
    volume: string
};

export type worldModel = {
    date: string,
    Доллары: number
};

export const normalizeWorldModel = (raw: worldApiModel[]): (worldModel)[] => {

    return raw.map((item) =>{

        const currentDate = new Date(item.timestamp);
        const currentDateProp = {
            year: currentDate.getFullYear(),
            month: currentDate.getMonth(),
            day: currentDate.getDate()
        };
        const date = `${currentDateProp.day}.`+
            `${currentDateProp.month}.`+
            `${currentDateProp.year}`;

        return {
            date: date,
            Доллары: +item.volume
        };
    });
}
