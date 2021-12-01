import {Subscription} from 'rxjs';
import * as R from 'ramda';

export interface Unsubscribable {
  unsubscribe: () => void;
}


export function cleanSubscriptionToUnsub(subscriptions: Unsubscribable[]) {
  if (!R.is(Array, subscriptions)) {
    return;
  }

  subscriptions.map((sub) => {
    if (!sub || !(sub instanceof Subscription)) {
      return;
    }

    try {
      sub.unsubscribe();
    } catch (e) {
    }
  });
}
