import {Injectable} from '@angular/core';
import {LoadingController} from '../lib/loading-controller';

@Injectable({
  providedIn: 'root'
})
export class BlockLoadingService {

  private _isShow = true;
  private _loading: LoadingController = {
    start: () => this.start(),
    end: () => this.end()
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
