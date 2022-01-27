import {Subscription} from 'rxjs';

export function unsubscribe(subscriptions: Subscription[]) {
  subscriptions.map((sub) => {
    if (!sub || !(sub instanceof Subscription)) {
      return;
    }

    try {
      sub.unsubscribe();
    } catch (e) {
      console.log(e);
    }
  });
}
