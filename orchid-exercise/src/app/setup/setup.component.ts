import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ISaveTimeItem } from "./setup.service";
import { ApiService } from "../api.service";
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  sensor_period: number = 0;
  checkTime1: moment.Moment = moment('');
  checkTime2: moment.Moment = moment('');
  checkTime3: moment.Moment = moment('');
  checkTime4: moment.Moment = moment('');
  checkTime5: moment.Moment = moment('');
  fcheckTime1: boolean = false;
  fcheckTime2: boolean = false;
  fcheckTime3: boolean = false;
  fcheckTime4: boolean = false;
  fcheckTime5: boolean = false;
  sysParam: ISaveTimeItem[] = [];
  success_icon: boolean = false;
  failed_icon: boolean = false;

  constructor(private api: ApiService) { }

  ngOnInit(): void {

    this.api.getPicParameter().subscribe(res => {
      res.forEach(item => {
        switch (item.name) {
          case 'sensor_period':
            this.sensor_period = item.value !== null && item.value !== "" ? Number.parseInt(item.value) : 0;
            break;
          case 'checktime1':
            this.checkTime1 = item.value !== null && item.value !== "" ? moment(item.value, moment.HTML5_FMT.TIME) : moment('', moment.HTML5_FMT.TIME);
            break;
          case 'checktime2':
            this.checkTime2 = item.value !== null && item.value !== "" ? moment(item.value, moment.HTML5_FMT.TIME) : moment('', moment.HTML5_FMT.TIME);
            break;
          case 'checktime3':
            this.checkTime3 = item.value !== null && item.value !== "" ? moment(item.value, moment.HTML5_FMT.TIME) : moment('', moment.HTML5_FMT.TIME);
            break;
          case 'checktime4':
            this.checkTime4 = item.value !== null && item.value !== "" ? moment(item.value, moment.HTML5_FMT.TIME) : moment('', moment.HTML5_FMT.TIME);
            break;
          case 'checktime5':
            this.checkTime5 = item.value !== null && item.value !== "" ? moment(item.value, moment.HTML5_FMT.TIME) : moment('', moment.HTML5_FMT.TIME);
            break;
          case 'fchecktime1':
            this.fcheckTime1 = item.value !== null && item.value !== "" ? Boolean(JSON.parse(item.value)) : false;
            break;
          case 'fchecktime2':
            this.fcheckTime2 = item.value !== null && item.value !== "" ? Boolean(JSON.parse(item.value)) : false;
            break;
          case 'fchecktime3':
            this.fcheckTime3 = item.value !== null && item.value !== "" ? Boolean(JSON.parse(item.value)) : false;
            break;
          case 'fchecktime4':
            this.fcheckTime4 = item.value !== null && item.value !== "" ? Boolean(JSON.parse(item.value)) : false;
            break;
          case 'fchecktime5':
            this.fcheckTime5 = item.value !== null && item.value !== "" ? Boolean(JSON.parse(item.value)) : false;
            break;
        }
      });
    });
  }

  saveParameter() {
    this.sysParam = [
      { id: 1, name: 'sensor_period', unit: '', value: String(this.sensor_period) },
      { id: 2, name: 'checkTime1', unit: '', value: moment(this.checkTime1).format("HH:mm") },
      { id: 3, name: 'checkTime2', unit: '', value: moment(this.checkTime2).format("HH:mm") },
      { id: 4, name: 'checkTime3', unit: '', value: moment(this.checkTime3).format("HH:mm") },
      { id: 5, name: 'checkTime4', unit: '', value: moment(this.checkTime4).format("HH:mm") },
      { id: 6, name: 'checkTime5', unit: '', value: moment(this.checkTime5).format("HH:mm") },
      { id: 7, name: 'fcheckTime1', unit: '', value: String(this.fcheckTime1) },
      { id: 8, name: 'fcheckTime2', unit: '', value: String(this.fcheckTime2) },
      { id: 9, name: 'fcheckTime3', unit: '', value: String(this.fcheckTime3) },
      { id: 10, name: 'fcheckTime4', unit: '', value: String(this.fcheckTime4) },
      { id: 11, name: 'fcheckTime5', unit: '', value: String(this.fcheckTime5) },
    ]

    this.api.setPicParameter(this.sysParam).subscribe(res => {
      if(res === 1) {
        this.success_icon = true;
        this.failed_icon = false;

        setInterval(() => {
          this.success_icon = false;
        }, 5000);
        
      }
      else {
        this.success_icon = false;
        this.failed_icon = true;
      }
    });
  }
}
