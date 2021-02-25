import {Meta} from "../../utils";
import {action, computed, IReactionDisposer, makeObservable, observable, reaction, runInAction,} from 'mobx';
import {CollectionT} from "../../utils";
import {requestCurrenciesTickerGraphics} from "./requestCurrenciesTickerGraphics";
import {GetCurrenciesTickerGraphicsModel} from "../models/currenciesTickerGraphics";
import {log} from "../../utils";



export class CurrenciesTickerGraphicsStore {
    _repos: CollectionT<number, GetCurrenciesTickerGraphicsModel> = {
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

        const { isError, data } = await requestCurrenciesTickerGraphics('currencies/sparkline', this.ticker)
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


    destroy(): void {
        this.metaChangedReaction();
    }

    metaChangedReaction: IReactionDisposer = reaction(
        () => this.meta,
        (args) => {
            log('Reaction', args)
        }
    )
}
