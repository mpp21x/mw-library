import {Injectable} from '@angular/core';
import {LoadingController} from '../lib/loading-controller';

@Injectable({
  providedIn: 'root'
})
export class BlockLoadingService {

  private _isShow = false;
  private _loading: LoadingController = {
    start: () => setTimeout(() => this.start(), 1),
    end: () => setTimeout(() => this.end(), 1)
  };

  get isShow() {
    return this._isShow;
  }

  get loading() {
    return this._loading;
  }

  private start() {
    this._isShow = true;
  }

  private end() {
    this._isShow = false;
  }
}
