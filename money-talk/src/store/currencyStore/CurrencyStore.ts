import {observable, action, computed, makeObservable, runInAction, IReactionDisposer, reaction} from 'mobx';
import { currencyModel, exchangeModel } from '../models';
import { Meta } from '../../utils/meta';
import {requestCurrencyStore} from "./requestCurrencyStore";
import { ILocalStore } from '../../utils/useLocal';

export default class CurrencyStore implements ILocalStore {
    // _currency: currencyModel[] = [];
    _test: number = 228;
    _exchange: exchangeModel[] = [];

    meta: Meta = Meta.initial;

    constructor() {
        makeObservable(this, {
            // _currency: observable,
            fetch: action,
            // currency: computed,

            _exchange: observable,
            exchange: computed,
        });
    }

    async fetch(): Promise<void> {
        if (this.meta === Meta.loading || this.meta === Meta.success) {
            return;
        }

        this.meta = Meta.loading;
        // this._currency = [];

        // const { isError, data } = await requestCurrencyStore('BTC', 'ETH');
        const { isError, data } = await requestCurrencyStore();
        if (isError) {
            this.meta = Meta.error;
            return;
        }

        runInAction(() => {
            this.meta = Meta.success;
            // this._currency = data;
            this._exchange = data.slice();
        });
    }

    // get currency():currencyModel[] {
    //     return this._currency;
    // }

    get exchange():exchangeModel[] {
        return this._exchange;
    }

    get test(): number {
        return this._test;
    }

    destroy(): void {
        this._metaChangedReaction();
    }

    _metaChangedReaction: IReactionDisposer = reaction(
        () => this.meta,
        (...args) => {
            console.log('Reaction', args);
        }
    );
}
