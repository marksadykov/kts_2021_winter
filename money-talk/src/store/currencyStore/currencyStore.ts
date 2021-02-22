import {observable, action, makeObservable, runInAction} from 'mobx';
import { currencyModel } from '../models';
import { Meta } from '../../utils/meta';
import {requestCurrencyStore} from "./requestCurrencyStore";

export default class currencyStore {
    _currency: currencyModel[] = [];

    meta: Meta = Meta.initial;

    constructor() {
        makeObservable(this, {
            _currency: observable,
        });
    }

    async fetch(): Promise<void> {
        if (this.meta === Meta.loading || this.meta === Meta.success) {
            return;
        }

        this.meta = Meta.loading;
        this._currency = [];

        const { isError, data } = await requestCurrencyStore('BTC');
        if (isError) {
            this.meta = Meta.error;
            return;
        }

        runInAction(() => {
            this.meta = Meta.success;
            this._currency = data;
        });
    }
}
