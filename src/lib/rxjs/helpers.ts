import {Subscription} from 'rxjs';
import * as R from 'ramda';

export interface UnsubscriptibeAble {
  unsubscribe: () => void;
}


export function cleanSubscriptionToUnsub(subscriptions: UnsubscriptibeAble[]) {
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
