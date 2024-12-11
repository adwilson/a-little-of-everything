import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { IonicModule } from '@ionic/angular';
import { PluginCardHeaderComponent } from '../plugin-card-header/plugin-card-header.component';

@Component({
    selector: 'app-browser-card',
    templateUrl: './browser-card.component.html',
    styleUrls: ['./browser-card.component.scss'],
    imports: [IonicModule, PluginCardHeaderComponent]
})
export class BrowserCardComponent implements OnInit {
  youReturned = false;

  constructor() { }

  ngOnInit() {}

  async openBrowser(): Promise<void> {
    await Browser.open({
      url: 'https://capacitorjs.com/docs/apis/browser'
    });
    Browser.addListener('browserFinished', () => {
      this.youReturned = true;
      window.setTimeout(() => {
        this.youReturned = false;
      }, 3000);
    });
  }
}
