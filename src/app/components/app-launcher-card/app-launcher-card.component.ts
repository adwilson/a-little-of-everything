import { Component, OnInit } from '@angular/core';
import { AppLauncher } from '@capacitor/app-launcher';

@Component({
  selector: 'app-app-launcher-card',
  templateUrl: './app-launcher-card.component.html',
  styleUrls: ['./app-launcher-card.component.scss'],
})
export class AppLauncherCardComponent implements OnInit {
  readonly bbcNewsAppId = 'bbc.mobile.news.uk';
  canOpenBbcNewsApp = false;

  constructor() { }

  async ngOnInit(): Promise<void> {
    ({ value: this.canOpenBbcNewsApp } = await AppLauncher.canOpenUrl({
      url: this.bbcNewsAppId
    }));
  }

  async launchBbcNewsApp(): Promise<void> {
    await AppLauncher.openUrl({ url: this.bbcNewsAppId });
  }

}
