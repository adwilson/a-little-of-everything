import { Component, computed, OnInit, signal } from '@angular/core';
import { App } from '@capacitor/app';
import { IonicModule } from '@ionic/angular';
import { PluginCardHeaderComponent } from '../plugin-card-header/plugin-card-header.component';

@Component({
  selector: 'app-app-card',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.scss'],
  imports: [IonicModule, PluginCardHeaderComponent]
})
export class AppCardComponent implements OnInit {

  id = signal('');
  name = signal('');
  version = signal('');
  build = signal('');
  isActive = signal(false);
  launchUrl = signal('');

  isActiveDisplay = computed(() => this.isActive() ? 'Yes' : 'No')

  constructor() { }

  async ngOnInit(): Promise<void> {
    const appInfo = await App.getInfo();
    this.id.set(appInfo.id);
    this.name.set(appInfo.name);
    this.version.set(appInfo.version);
    this.build.set(appInfo.build);
    const appState = await App.getState();
    this.isActive.set(appState.isActive);
    const appLaunchUrl = await App.getLaunchUrl();
    this.launchUrl.set(appLaunchUrl?.url ?? 'Not Set');
  }

}
