import { Injectable } from '@angular/core';
import { Moment } from 'moment';

@Injectable({
  providedIn: 'root'
})
export class SetupService {

  constructor() { }


}

export interface ISaveTimeItem {
  id: number,
  name: string, 
  unit: string,
  value: string,
  // sensor_period: number,
  // checkTime1: Moment,
  // checkTime2: Moment,
  // checkTime3: Moment,
  // checkTime4: Moment,
  // checkTime5: Moment,
  // fcheckTime1: boolean,
  // fcheckTime2: boolean,
  // fcheckTime3: boolean,
  // fcheckTime4: boolean,
  // fcheckTime5: boolean,
}
