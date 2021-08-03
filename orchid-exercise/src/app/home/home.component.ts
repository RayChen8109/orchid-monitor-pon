import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService, batchGreenHouseParam } from '../api.service';
import * as echarts from "echarts";
import * as _moment from "moment";
import * as _rollupMoment from "moment";

const moment = _rollupMoment || _moment;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  titleHight: number = 0; //echart title

  dataParam: batchGreenHouseParam = {
    limit: 12
  }; /* 取得資料表最後N個項目 */

  timeInterval: any;

  templateChart: any;
  humidityChart: any;
  luxChart: any;
  speedChart: any;

  template_46: any;
  humidity_46: any;
  lux_46: any;
  speed_46: any;
  template_47: any;
  humidity_47: any;
  lux_47: any;
  speed_47: any;
  template_48: any;
  humidity_48: any;
  lux_48: any;
  speed_48: any;

  constructor(private api: ApiService) { }

  ngOnDestroy(): void {
    clearInterval(this.timeInterval);
  }

  ngOnInit(): void {
    const screenWidth = window.screen.width;
    if(screenWidth < 500)
      this.titleHight = 12;

    this.templateChart = echarts.init(document.getElementById('template') as HTMLElement);
    this.humidityChart = echarts.init(document.getElementById('humidity') as HTMLElement);
    this.luxChart = echarts.init(document.getElementById('lux') as HTMLElement);
    this.speedChart = echarts.init(document.getElementById('speed') as HTMLElement);

    this.getData();
  }

  getData(): void {
    this.api.getBatchGreenHouseData(this.dataParam).subscribe(res => {
      if (Object.keys(res).length > 0) {
        const item = res[Object.keys(res).length - 1];
        this.template_46 = item.temp1;
        this.humidity_46 = item.humidity1;
        this.lux_46 = item.lux1;
        this.speed_46 = item.speed1;
        this.template_47 = item.temp2;
        this.humidity_47 = item.humidity2;
        this.lux_47 = item.lux2;
        this.speed_47 = item.speed2;
        this.template_48 = item.temp3;
        this.humidity_48 = item.humidity3;
        this.lux_48 = item.lux3;
        this.speed_48 = item.speed3;

        let optionTemplate = this.setTemplateOption(res);

        let optionHumidity = this.setHumidityOption(res);

        let optionLux = this.setLuxOption(res);

        let optionSpeed = this.setSpeedOption(res);

        optionTemplate && this.templateChart.setOption(optionTemplate);
        optionHumidity && this.humidityChart.setOption(optionHumidity);
        optionLux && this.luxChart.setOption(optionLux);
        optionSpeed && this.speedChart.setOption(optionSpeed);
      }
    });
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

export interface IGreenHouse {
  id: number,
  datetime: Date,
  temp1: number,
  humidity1: number,
  lux1: number,
  speed1: number,
  temp2: number,
  humidity2: number,
  lux2: number,
  speed2: number,
  temp3: number,
  humidity3: number,
  lux3: number,
  speed3: number,
}
