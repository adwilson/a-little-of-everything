import { Component, OnInit } from '@angular/core';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-app-card',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.scss'],
})
export class AppCardComponent implements OnInit {

  id = '';
  name = '';
  version = '';
  build = '';
  isActive = false;
  launchUrl = '';

  constructor() { }

  async ngOnInit(): Promise<void> {
      const appInfo = await App.getInfo();
      this.id = appInfo.id;
      this.name = appInfo.name;
      this.version = appInfo.version;
      this.build = appInfo.build;
      const appState = await App.getState();
      this.isActive = appState.isActive;
      const appLaunchUrl = await App.getLaunchUrl();
      this.launchUrl = appLaunchUrl?.url ?? 'Not Set';
  }

}
