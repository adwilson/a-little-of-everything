import { Component } from '@angular/core';
import pluginInfo from './plugin-info';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  plugins = pluginInfo;

  constructor() {}
}
