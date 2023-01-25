import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-browser-card',
  templateUrl: './browser-card.component.html',
  styleUrls: ['./browser-card.component.scss'],
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
