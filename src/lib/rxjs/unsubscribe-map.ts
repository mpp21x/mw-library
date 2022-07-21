import {Subscription} from 'rxjs';
import {cleanSubscriptionToUnsub} from './clean-subscription-to-unsub';

export class UnsubscribeMap {
  private _map = new Map<string, Subscription>();


  multiSet(params: { [key: string]: Subscription }) {
    const subscriptions = Object.values(params);
    Object.keys(params).forEach((key, index) => this._map.set(key, subscriptions[index]));
  }

  set(name: string, sub: Subscription) {
    if (this._map.has(name)) {
      this._map.get(name).unsubscribe();
    }
    this._map.set(name, sub);
  }

  unsubscribe() {
    cleanSubscriptionToUnsub(Array.from(this._map.values()));
  }
}
