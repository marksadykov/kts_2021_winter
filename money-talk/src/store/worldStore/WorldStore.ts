import {observable, action, computed, makeObservable, runInAction, IReactionDisposer, reaction} from 'mobx';
import { worldModel } from '../models';
import { Meta } from '../../utils/meta';
import { requestWorldStore } from "./requestWorldStore";
import { ILocalStore } from '../../utils/useLocal';

export default class WorldStore implements ILocalStore {
    _world: worldModel[] = [];

    meta: Meta = Meta.initial;

    _startTime = '';
    _endTime = '';

    constructor(start: string, end: string) {
        makeObservable(this, {
            _world: observable,
            _startTime: observable,
            _endTime: observable,
            fetch: action,
            world: computed,
        });
        this._startTime = start;
        this._endTime = end;
    }

    async fetch(): Promise<void> {
        if (this.meta === Meta.loading || this.meta === Meta.success) {
            return;
        }

        this.meta = Meta.loading;
        this._world = [];

        const { isError, data } = await requestWorldStore(this._startTime, this._endTime);
        if (isError) {
            this.meta = Meta.error;
            return;
        }

        runInAction(() => {
            this.meta = Meta.success;
            this._world = data.slice();
        });
    }

    get world():worldModel[] {
        return this._world;
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
