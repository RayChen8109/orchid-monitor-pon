import { Component, OnDestroy, OnInit } from '@angular/core';
import { appPath } from '../app-path.const';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  path = appPath;
  time = new Date();
  intervalId: any;

  constructor() { }

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

}
