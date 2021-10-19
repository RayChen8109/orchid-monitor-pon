import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snapshot',
  templateUrl: './snapshot.component.html',
  styleUrls: ['./snapshot.component.scss']
})
export class SnapshotComponent implements OnInit {
  ACLASS_DEVICE_COLOR: string = 'deepskyblue';
  ACLASS_DEVICE_COLOR_HOVER: string = 'rgb(0, 93, 124)';
  BCLASS_DEVICE_COLOR: string = 'rgb(166, 231, 160)';
  BCLASS_DEVICE_COLOR_HOVER: string = 'rgb(68, 97, 66)';
  CCLASS_DEVICE_COLOR: string = 'rgb(219, 208, 109)';
  CCLASS_DEVICE_COLOR_HOVER: string = 'rgb(138, 125, 9)';
  modalImageUrl: string = '';
  modalTitle: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  openDialog(item: ISnapshotItem) {
    this.modalImageUrl = item.imgUrl;
    this.modalTitle = item.dialogName;
  }

  snapshotArray: ISnapshotItem[] = [
    {
      title: 'A1 設備:49',
      dialogName: 'IPCam-A1',
      imgUrl: '../../assets/pic/A1.png',
      backgroundColor: this.ACLASS_DEVICE_COLOR,
      hoverColor: this.ACLASS_DEVICE_COLOR_HOVER,
    },
    {
      title: 'A2 設備:4A',
      dialogName: 'IPCam-A2',
      imgUrl: '../../assets/pic/A2.png',
      backgroundColor: this.ACLASS_DEVICE_COLOR,
      hoverColor: this.ACLASS_DEVICE_COLOR_HOVER,
    },
    {
      title: 'A3 設備:4B',
      dialogName: 'IPCam-A3',
      imgUrl: '../../assets/pic/A3.png',
      backgroundColor: this.ACLASS_DEVICE_COLOR,
      hoverColor: this.ACLASS_DEVICE_COLOR_HOVER,
    },
    {
      title: 'A4 設備:4C',
      dialogName: 'IPCam-A4',
      imgUrl: '../../assets/pic/A4.png',
      backgroundColor: this.ACLASS_DEVICE_COLOR,
      hoverColor: this.ACLASS_DEVICE_COLOR_HOVER,
    },
    {
      title: 'A5 設備:4D',
      dialogName: 'IPCam-A5',
      imgUrl: '../../assets/pic/A5.png',
      backgroundColor: this.ACLASS_DEVICE_COLOR,
      hoverColor: this.ACLASS_DEVICE_COLOR_HOVER,
    },
    {
      title: 'A6 設備:4E',
      dialogName: 'IPCam-A6',
      imgUrl: '../../assets/pic/A6.png',
      backgroundColor: this.ACLASS_DEVICE_COLOR,
      hoverColor: this.ACLASS_DEVICE_COLOR_HOVER,
    },
    {
      title: 'B1 設備:4F',
      dialogName: 'IPCam-B1',
      imgUrl: '../../assets/pic/B1.png',
      backgroundColor: this.BCLASS_DEVICE_COLOR,
      hoverColor: this.BCLASS_DEVICE_COLOR_HOVER,
    },
    {
      title: 'B2 設備:50',
      dialogName: 'IPCam-B2',
      imgUrl: '../../assets/pic/B2.png',
      backgroundColor: this.BCLASS_DEVICE_COLOR,
      hoverColor: this.BCLASS_DEVICE_COLOR_HOVER,
    },
    {
      title: 'B3 設備:51',
      dialogName: 'IPCam-B3',
      imgUrl: '../../assets/pic/B3.png',
      backgroundColor: this.BCLASS_DEVICE_COLOR,
      hoverColor: this.BCLASS_DEVICE_COLOR_HOVER,
    },
    {
      title: 'B4 設備:52',
      dialogName: 'IPCam-B4',
      imgUrl: '../../assets/pic/B4.png',
      backgroundColor: this.BCLASS_DEVICE_COLOR,
      hoverColor: this.BCLASS_DEVICE_COLOR_HOVER,
    },
    {
      title: 'B5 設備:53',
      dialogName: 'IPCam-B15',
      imgUrl: '../../assets/pic/B5.png',
      backgroundColor: this.BCLASS_DEVICE_COLOR,
      hoverColor: this.BCLASS_DEVICE_COLOR_HOVER,
    },
    {
      title: 'B6 設備:54/56',
      dialogName: 'IPCam-B6',
      imgUrl: '../../assets/pic/B6.png',
      backgroundColor: this.BCLASS_DEVICE_COLOR,
      hoverColor: this.BCLASS_DEVICE_COLOR_HOVER,
    },
    {
      title: 'C1 設備:55',
      dialogName: 'IPCam-C1',
      imgUrl: '../../assets/pic/C1.png',
      backgroundColor: this.CCLASS_DEVICE_COLOR,
      hoverColor: this.CCLASS_DEVICE_COLOR_HOVER,
    },
    {
      title: 'C2 設備:56',
      dialogName: 'IPCam-C2',
      imgUrl: '../../assets/pic/C2.png',
      backgroundColor: this.CCLASS_DEVICE_COLOR,
      hoverColor: this.CCLASS_DEVICE_COLOR_HOVER,
    },
    {
      title: 'C3 設備:57',
      dialogName: 'IPCam-C3',
      imgUrl: '../../assets/pic/C3.png',
      backgroundColor: this.CCLASS_DEVICE_COLOR,
      hoverColor: this.CCLASS_DEVICE_COLOR_HOVER,
    },
    {
      title: 'C4 設備:58',
      dialogName: 'IPCam-C4',
      imgUrl: '../../assets/pic/C4.png',
      backgroundColor: this.CCLASS_DEVICE_COLOR,
      hoverColor: this.CCLASS_DEVICE_COLOR_HOVER,
    },
    {
      title: 'C5 設備:59',
      dialogName: 'IPCam-C5',
      imgUrl: '../../assets/pic/C5.png',
      backgroundColor: this.CCLASS_DEVICE_COLOR,
      hoverColor: this.CCLASS_DEVICE_COLOR_HOVER,
    },
    {
      title: 'C6 設備:5A/48',
      dialogName: 'IPCam-C6',
      imgUrl: '../../assets/pic/C6.png',
      backgroundColor: this.CCLASS_DEVICE_COLOR,
      hoverColor: this.CCLASS_DEVICE_COLOR_HOVER,
    },
    {
      title: 'D1 設備:5B',
      dialogName: 'IPCam-D1',
      imgUrl: '../../assets/pic/D1.png',
      backgroundColor: this.CCLASS_DEVICE_COLOR,
      hoverColor: this.CCLASS_DEVICE_COLOR_HOVER,
    },
    {
      title: 'D2 設備:5C',
      dialogName: 'IPCam-D2',
      imgUrl: '../../assets/pic/D2.png',
      backgroundColor: this.CCLASS_DEVICE_COLOR,
      hoverColor: this.CCLASS_DEVICE_COLOR_HOVER,
    },
  ]
}

export interface ISnapshotItem {
  title: string,
  dialogName: string,
  imgUrl: string,
  backgroundColor: string,
  hoverColor: string,
}
