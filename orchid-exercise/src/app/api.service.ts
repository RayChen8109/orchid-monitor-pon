import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { IGreenHouse } from './home/home.component';
import { IUser } from "./user/login/login.component";

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
}

export class batchGreenHouseParam {
  limit?: number;
  maxDate?: string;
  minDate?: string;
}
