import {Subscription} from 'rxjs';
import * as R from 'ramda';


export function cleanSubscriptionToUnsub(subscriptions: {
  unsubscribe: () => void
}[]) {
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
