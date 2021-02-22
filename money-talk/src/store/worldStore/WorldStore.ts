import {observable, action, computed, makeObservable, runInAction, IReactionDisposer, reaction} from 'mobx';
import { worldModel } from '../models';
import { Meta } from '../../utils/meta';
import { requestWorldStore } from "./requestWorldStore";
import { ILocalStore } from '../../utils/useLocal';

export default class WorldStore implements ILocalStore {
    _world: worldModel[] = [];

    meta: Meta = Meta.initial;

    constructor() {
        makeObservable(this, {
            _world: observable,
            fetch: action,
            world: computed,
        });
    }

    async fetch(): Promise<void> {
        if (this.meta === Meta.loading || this.meta === Meta.success) {
            return;
        }

        this.meta = Meta.loading;
        this._world = [];

        const { isError, data } = await requestWorldStore();
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
