import { observable, action, makeObservable } from 'mobx';
import { currencyModel } from '../models';

export default class currencyStore {
    _currencyFirst: currencyModel;
    _currencySecond: currencyModel;

    constructor() {
        makeObservable(this, {
            _currencyFirst: observable,
            _currencySecond: observable,
        });
    }
}
