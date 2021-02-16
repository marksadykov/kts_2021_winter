import {Meta} from "../../utils/Meta";
import {action, computed, makeObservable, observable, runInAction,} from 'mobx';
import {CollectionT} from "../../utils/collection";
import {requestCurrenciesTickerGraphics} from "./requestCurrenciesTickerGraphics";
import {GetCurrenciesTickerGraphicsModel} from "../models/currenciesTickerGraphics/getCurrenciesTickerGraphics";



export class CurrenciesTickerGraphicsStore {
    _repos: CollectionT<number, GetCurrenciesTickerGraphicsModel> = {
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

        const { isError, data } = await requestCurrenciesTickerGraphics('currencies/sparkline')
        if (isError) {
            this.meta = Meta.error
            return ;
        }

        runInAction(() => {
            this.meta = Meta.success
            this._repos = data;
        })
    }

    get repos(): GetCurrenciesTickerGraphicsModel[] {
        return this._repos.order.map(id => this._repos.entities[id])
    }

}
