import { Component } from '@angular/core';
import { appPath } from './app-path.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appPath = appPath;
  title = 'orchid-exercise';
}
