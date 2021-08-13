import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _loginStatus: boolean = false;
  // isLoginSubject = new BehaviorSubject<boolean>(this.loginStatus);

  constructor() { }
  /*取得目前登入狀態 */
  get loginStatus(): boolean {
    if(this._loginStatus || localStorage.getItem(environment.sessionStorageName)) {
      return true;
    }
    else {
      return false;
    }
  }
  /*設定目前登入狀態 */
  set loginStatus(status: boolean) {
    this._loginStatus = status;
  }
}
