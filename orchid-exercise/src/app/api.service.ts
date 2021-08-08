import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { IGreenHouse } from './home/home.component';
import { IUser } from "./user/login/login.component";
import { ISaveTimeItem } from "./setup/setup.service";

const api = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  getAdmin(info: IUser) {
    return this._http.post<IUser>(api + '/getAdmin.php', info);
  }

  getBatchGreenHouseData(info: batchGreenHouseParam) {
    return this._http.post<IGreenHouse[]>(api + 'getBatchData.php', info);
  }

  getPicParameter() {
    return this._http.post<ISaveTimeItem[]>(api + 'getPicParameter.php', {});
  }

  setPicParameter(info: ISaveTimeItem[]) {
    return this._http.post<any>(api + 'setPicParameter.php', JSON.stringify(info));
  }
}

export class batchGreenHouseParam {
  limit?: number;
  maxDate?: string;
  minDate?: string;
}
