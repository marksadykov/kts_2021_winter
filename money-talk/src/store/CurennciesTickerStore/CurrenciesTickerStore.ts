import {GetCurrenciesTickerModel} from "../models/currency";
import {Meta} from "../../utils/Meta";
import {action, makeObservable, observable,} from 'mobx';
import {requestCurrenciesTicker} from "./requestCurrenciesTicker";


export class CurrenciesTickerStore {
    repos: GetCurrenciesTickerModel[] = [];
    meta: Meta = Meta.initial;

    constructor() {
        makeObservable(this, {
            repos: observable,
            meta: observable,
            fetch: action.bound,
            _setSuccessData: action
        })
    }

    async fetch(): Promise<void> {
        if (this.meta === Meta.loading || this.meta === Meta.success) {
            return ;
        }

        this.meta = Meta.loading;
        this.repos = [];

        const { isError, data } = await requestCurrenciesTicker('currencies/ticker')
        if (isError) {
            this.meta = Meta.error
            return ;
        }

        this._setSuccessData(data);
    }

    _setSuccessData(repos: GetCurrenciesTickerModel[]): void {
        this.meta = Meta.success
        this.repos = repos;
    }
}
