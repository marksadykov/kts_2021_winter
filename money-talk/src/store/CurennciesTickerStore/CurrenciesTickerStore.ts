import {GetCurrenciesTickerModel} from "../models/currencyTicker";
import {Meta} from "../../utils/Meta";
import {action, computed, makeObservable, observable, runInAction,} from 'mobx';
import {requestCurrenciesTicker} from "./requestCurrenciesTicker";
import {CollectionT} from "../../utils/collection";


export class CurrenciesTickerStore {
    _repos: CollectionT<number, GetCurrenciesTickerModel> = {
        order: [],
        entities: []
    }
    meta: Meta = Meta.initial

    constructor() {
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

        const { isError, data } = await requestCurrenciesTicker('currencies/ticker')
        if (isError) {
            this.meta = Meta.error
            return ;
        }

        runInAction(() => {
            this.meta = Meta.success
            this._repos = data;
        })
    }

    get repos(): GetCurrenciesTickerModel[] {
        return this._repos.order.map(id => this._repos.entities[id])
    }

}
