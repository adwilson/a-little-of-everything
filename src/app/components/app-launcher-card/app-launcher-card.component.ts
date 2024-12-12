import { Component, computed, OnInit, signal } from '@angular/core';
import { AppLauncher } from '@capacitor/app-launcher';
import { IonicModule } from '@ionic/angular';
import { PluginCardHeaderComponent } from '../plugin-card-header/plugin-card-header.component';

@Component({
  selector: 'app-app-launcher-card',
  templateUrl: './app-launcher-card.component.html',
  styleUrls: ['./app-launcher-card.component.scss'],
  imports: [IonicModule, PluginCardHeaderComponent]
})
export class AppLauncherCardComponent implements OnInit {
  readonly bbcNewsAppId = 'bbc.mobile.news.uk';
  canOpenBbcNewsApp = signal(false);

  canOpenBbcNewsAppDisplay = computed(() => this.canOpenBbcNewsApp() ? 'Yes' : 'No');

  constructor() { }

  async ngOnInit(): Promise<void> {
    const canOpen = await AppLauncher.canOpenUrl({
      url: this.bbcNewsAppId
    });
    this.canOpenBbcNewsApp.set(canOpen.value);
  }

  async launchBbcNewsApp(): Promise<void> {
    await AppLauncher.openUrl({ url: this.bbcNewsAppId });
  }

}
