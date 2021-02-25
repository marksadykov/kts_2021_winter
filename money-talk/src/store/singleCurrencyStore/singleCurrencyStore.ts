import {observable, action, computed, makeObservable, runInAction, IReactionDisposer, reaction} from 'mobx';
import { Meta } from '../../utils/meta';
import { ILocalStore } from '../../utils/useLocal';
import {singleCurrencyModel} from "../models/SingleCurrency";
import {requestSingleCurrencyStore} from "./requestCurrencyStore";

export default class singleCurrencyStore implements ILocalStore {
    _currency: singleCurrencyModel[] = [];
    _symbols: string[] = [];

    meta: Meta = Meta.initial;

    constructor(symbols: string[]) {
        makeObservable(this, {
            _currency: observable,
            fetch: action.bound,
            currency: computed,
        });
        this._symbols = symbols;
    }

    async fetch(): Promise<void> {
        if (this.meta === Meta.loading || this.meta === Meta.success) {
            return;
        }

        this.meta = Meta.loading;
        this._currency = [];

        const { isError, data } = await requestSingleCurrencyStore(this._symbols);
        if (isError) {
            this.meta = Meta.error;
            return;
        }

        runInAction(() => {
            this.meta = Meta.success;
            this._currency = data.slice();
        });
    }

    get currency():singleCurrencyModel[] {
        return this._currency;
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
