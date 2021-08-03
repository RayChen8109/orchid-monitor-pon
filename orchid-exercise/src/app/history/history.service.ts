import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  componentData: IHistoryComponentData = {
    dateFrom: '1900-01-01 00:00:00',
    dateTo: '1900-01-01 00:00:00',
    deviceGroup: 0,
    isShowTable: false,
    isShowLine: false
  };

  constructor() { }
}

export interface IHistoryComponentData {
  dateFrom: string;
  dateTo: string;
  deviceGroup: number;
  isShowTable: boolean;
  isShowLine: boolean;
}

