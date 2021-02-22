import {action, computed, makeObservable, observable, runInAction,} from 'mobx';
import {CollectionT} from "../../utils/collection";
import {GetCurrenciesTickerInfoModel} from "../models/info";
import {Meta} from "../../utils/Meta";
import {requestCurrenciesTickerInfo} from "./requestCurrenciesTickerInfo";



export class CurrenciesTickerInfoStore {
    _repos: CollectionT<number, GetCurrenciesTickerInfoModel> = {
        order: [],
        entities: []
    }
    meta: Meta = Meta.initial
    private ticker: any;

    constructor(ticker: any) {
        this.ticker = ticker
        makeObservable(this, {
            _repos: observable,
            meta: observable,
            fetch: action.bound,
            repos: computed
        })
    }

    async fetch(): Promise<void> {
        if (this.meta === Meta.loading || this.meta === Meta.success) {
            return ;
        }

        this.meta = Meta.loading;
        this._repos = {
            order: [],
            entities: {}
        };

        const { isError, data } = await requestCurrenciesTickerInfo('currencies', this.ticker)
        if (isError) {
            this.meta = Meta.error
            return ;
        }

        runInAction(() => {
            this.meta = Meta.success
            this._repos = data;
        })
    }

    get repos(): GetCurrenciesTickerInfoModel[] {
        return this._repos.order.map(id => this._repos.entities[id])
    }

}
