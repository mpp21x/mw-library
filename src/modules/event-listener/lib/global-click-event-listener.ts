import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalClickEventListener {

  private _subject = new Subject();

  constructor() {
  }

  getObservable() {
    return this._subject.asObservable();
  }

  getSubject() {
    return this._subject;
  }
}
