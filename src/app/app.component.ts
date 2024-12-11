import { Component } from '@angular/core';
import pluginInfo from './plugin-info';
import { IonicModule } from '@ionic/angular';
import { RouterLinkActive, RouterLink } from '@angular/router';
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    imports: [IonicModule, RouterLinkActive, RouterLink]
})
export class AppComponent {
  plugins = pluginInfo;

  constructor() {}
}
