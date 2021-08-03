import { Component, OnInit } from '@angular/core';
import { ApiService, batchGreenHouseParam } from '../api.service';
import * as _moment from "moment";
import * as _rollupMoment from "moment";
import * as echarts from "echarts";
import { IGreenHouse } from '../home/home.component';
import { HistoryService, IHistoryComponentData } from "./history.service";
import { environment } from "../../environments/environment";


const moment = _moment || _rollupMoment;

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  templateChart: any;
  humidityChart: any;
  luxChart: any;
  speedChart: any;

  dateFrom: any;
  dateTo: any;
  maxDate: Date = new Date();
  greenHouseData$: any;
  selectId: any = 0;
  key: string = '';
  p: number = 1;
  reverse: boolean = true;
  isShowTable: boolean = false;
  isShowCharts: boolean = false;
  selectItemsArray = ['全部組別', '第一組', '第二組', '第三組'];
  columnData: Array<any> = [
    { key: 'id', name: 'id' },
    { key: 'datetime', name: '日期' },
    { key: 'temp1', name: '第一區溫度' },
    { key: 'humidity1', name: '第一區濕度' },
    { key: 'lux1', name: '第一區照度' },
    { key: 'speed1', name: '第一區風速' },
    { key: 'temp2', name: '第二區溫度' },
    { key: 'humidity2', name: '第二區濕度' },
    { key: 'lux2', name: '第二區照度' },
    { key: 'speed2', name: '第二區風速' },
    { key: 'temp3', name: '第三區溫度' },
    { key: 'humidity3', name: '第三區濕度' },
    { key: 'lux3', name: '第三區照度' },
    { key: 'speed3', name: '第三區風速' },
  ];


  constructor(private api: ApiService, private service: HistoryService) {
  }

  ngOnInit(): void {
    this.templateChart = echarts.init(document.getElementById('template') as HTMLElement);
    this.humidityChart = echarts.init(document.getElementById('humidity') as HTMLElement);
    this.luxChart = echarts.init(document.getElementById('lux') as HTMLElement);
    this.speedChart = echarts.init(document.getElementById('speed') as HTMLElement);

    const data = sessionStorage.getItem(environment.sessionStorageName);
    if(data) {
      const tmp = JSON.parse(data) as IHistoryComponentData;
      this.dateFrom = moment(tmp.dateFrom).format('yyyy-MM-DD HH:mm:ss');
      this.dateTo = moment(tmp.dateTo).format('yyyy-MM-DD HH:mm:ss');
      this.selectId = tmp.deviceGroup;
      this.isShowTable = tmp.isShowTable;
      this.isShowCharts = tmp.isShowLine;
      this.getData();
    }
  }

  getData() {
    const data: batchGreenHouseParam = {};
    data.maxDate = this.dateTo;
    data.minDate = this.dateFrom;
    this.api.getBatchGreenHouseData(data).subscribe(res => {
      this.greenHouseData$ = res;

      let optionTemplate = this.setTemplateOption(res);

      let optionHumidity = this.setHumidityOption(res);

      let optionLux = this.setLuxOption(res);

      let optionSpeed = this.setSpeedOption(res);

      optionTemplate && this.templateChart.setOption(optionTemplate);
      optionHumidity && this.humidityChart.setOption(optionHumidity);
      optionLux && this.luxChart.setOption(optionLux);
      optionSpeed && this.speedChart.setOption(optionSpeed);
    });
  }

  dateFromPickerOpen() {
    this.maxDate = new Date();
  }

  dateToPickerOpen() {
    this.maxDate = new Date();
  }

  onSearchSubmit() {
    this.getData();
    const data = this.service.componentData = {
      dateFrom: this.dateFrom,
      dateTo: this.dateTo,
      deviceGroup: this.selectId,
      isShowTable: this.isShowTable,
      isShowLine: this.isShowCharts
    }
    sessionStorage.setItem(environment.sessionStorageName, JSON.stringify(data));
  }

  setTemplateOption(dataArray: IGreenHouse[]) {
    let option = {
      title: {
        text: '溫度 (℃)',
        subtext: moment(dataArray[dataArray.length - 1].datetime).format('yyyy/MM/DD')
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['46區溫度', '47區溫度', '48區溫度']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      dataset: {
        dimensions: ['datetime', 'temp1', 'temp2', 'temp3'],
        source: dataArray.map(x => {
          let rObj = {
            'datetime': moment(x.datetime).format('HH:mm:ss'),
            'temp1': x.temp1,
            'temp2': x.temp2,
            'temp3': x.temp3,
          };
          return rObj;
        })
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
      },
      yAxis: {},
      series: [
        {
          name: '46區溫度',
          type: 'line'
        },
        {
          name: '47區溫度',
          type: 'line'
        },
        {
          name: '48區溫度',
          type: 'line'
        },
      ]
    };
    return option;
  }

  setHumidityOption(dataArray: IGreenHouse[]) {
    let option = {
      title: {
        text: '濕度 (%)',
        subtext: moment(dataArray[dataArray.length - 1].datetime).format('yyyy/MM/DD')
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['46區濕度', '47區濕度', '48區濕度']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      dataset: {
        dimensions: ['datetime', 'humidity1', 'humidity2', 'humidity3'],
        source: dataArray.map(x => {
          let rObj = {
            'datetime': moment(x.datetime).format('HH:mm:ss'),
            'humidity1': x.humidity1,
            'humidity2': x.humidity2,
            'humidity3': x.humidity3,
          }
          return rObj;
        })
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
      },
      yAxis: {},
      series: [
        {
          name: '46區濕度',
          type: 'line',
        },
        {
          name: '47區濕度',
          type: 'line',
        },
        {
          name: '48區濕度',
          type: 'line',
        }
      ]
    }
    return option;
  }

  setLuxOption(dataArray: IGreenHouse[]) {
    let option = {
      title: {
        text: '照度 (lux)',
        subtext: moment(dataArray[dataArray.length - 1].datetime).format('yyyy/MM/DD')
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['46區照度', '47區照度', '48區照度']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      dataset: {
        dimensions: ['datetime', 'lux1', 'lux2', 'lux3'],
        source: dataArray.map(x => {
          let rObj = {
            'datetime': moment(x.datetime).format('HH:mm:ss'),
            'lux1': x.lux1,
            'lux2': x.lux2,
            'lux3': x.lux3
          };
          return rObj;
        })
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
      },
      yAxis: {},
      series: [
        {
          name: '46區照度',
          type: 'line',
        },
        {
          name: '47區照度',
          type: 'line',
        },
        {
          name: '48區照度',
          type: 'line',
        }
      ]
    }
    return option;
  }

  setSpeedOption(dataArray: IGreenHouse[]) {
    let option = {
      title: {
        text: '風速 (m/s)',
        subtext: moment(dataArray[dataArray.length - 1].datetime).format('yyyy/MM/DD')
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['46區風速', '47區風速', '48區風速']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      dataset: {
        dimensions: ['datetime', 'speed1', 'speed2', 'speed3'],
        source: dataArray.map(x => {
          let rObj = {
            'datetime': moment(x.datetime).format('HH:mm:ss'),
            'speed1': x.speed1,
            'speed2': x.speed2,
            'speed3': x.speed3
          }
          return rObj;
        })
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
      },
      yAxis: {},
      series: [
        {
          name: '46區風速',
          type: 'line',
        },
        {
          name: '47區風速',
          type: 'line',
        },
        {
          name: '48區風速',
          type: 'line',
        }
      ]
    }
    return option;
  }
}
